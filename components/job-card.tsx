import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

interface JobPosition {
  id: string
  title: string
  subtitle: string
  department: string
  location: string
  type: string
  featured: boolean
  jobDescription: string[]
  requirements: string[]
  benefits?: string[]
}

interface JobCardProps {
  job: JobPosition
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="flex flex-col items-start text-left w-full">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center">
          <Star className="h-6 w-6 text-amber-600" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
          {job.subtitle && <p className="text-gray-600">{job.subtitle}</p>}
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">{job.department}</Badge>
        <Badge variant="outline" className="border-gray-300">
          {job.location}
        </Badge>
        <Badge variant="outline" className="border-gray-300">
          {job.type}
        </Badge>
        {job.featured && <Badge className="bg-green-100 text-green-800">Lương cao</Badge>}
      </div>
    </div>
  )
}
