import { MongoClient } from "mongodb"

if (!process.env.CONNECT_DB) {
  throw new Error("Please add your Mongo URI to .env.local as CONNECT_DB")
}

const uri = process.env.CONNECT_DB
const options = {}

let client
let clientPromise: Promise<MongoClient>

declare global {
  var _mongoClientPromise: Promise<MongoClient>
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri!, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri!, options)
  clientPromise = client.connect()
}

export default clientPromise 