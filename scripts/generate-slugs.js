const { MongoClient } = require('mongodb');

// Function to generate slug from title
function generateSlug(title) {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove Vietnamese diacritics
    .replace(/[đĐ]/g, 'd') // Replace đ/Đ with d
    .replace(/[^a-z0-9\s-]/g, '') // Only keep letters, numbers, spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Remove consecutive hyphens
    .replace(/^-|-$/g, ''); // Remove hyphens at start and end
}

async function generateSlugsForExistingArticles() {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('acta');
    const collection = db.collection('acta');

    // Find all articles without slug
    const articles = await collection.find({ 
      $or: [
        { slug: { $exists: false } },
        { slug: null },
        { slug: '' }
      ]
    }).toArray();

    console.log(`Found ${articles.length} articles without slug`);

    for (const article of articles) {
      const slug = generateSlug(article.title);
      
      // Check if slug already exists
      const existingArticle = await collection.findOne({ 
        slug: slug,
        _id: { $ne: article._id }
      });

      let finalSlug = slug;
      if (existingArticle) {
        // Add timestamp to make it unique
        finalSlug = `${slug}-${Date.now()}`;
      }

      await collection.updateOne(
        { _id: article._id },
        { $set: { slug: finalSlug } }
      );

      console.log(`Updated article "${article.title}" with slug: ${finalSlug}`);
    }

    console.log('Slug generation completed!');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
  }
}

// Run the script
generateSlugsForExistingArticles(); 