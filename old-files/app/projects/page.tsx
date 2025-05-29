import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        <h1 className="text-4xl font-mono mb-8">Marketing Projects</h1>

        <div className="space-y-12">
          <div className="border border-gray-800 rounded-lg p-6 hover:border-blue-600 transition-colors">
            <h2 className="text-2xl font-mono mb-4">Project 1</h2>
            <p className="text-gray-400 mb-4">
              Detailed description of Project 1 will go here. This section will include information about the project
              goals, strategies implemented, and results achieved.
            </p>
            <Button asChild>
              <Link href="/projects/project1">View Details</Link>
            </Button>
          </div>

          <div className="border border-gray-800 rounded-lg p-6 hover:border-blue-600 transition-colors">
            <h2 className="text-2xl font-mono mb-4">Project 2</h2>
            <p className="text-gray-400 mb-4">
              Detailed description of Project 2 will go here. This section will include information about the project
              goals, strategies implemented, and results achieved.
            </p>
            <Button asChild>
              <Link href="/projects/project2">View Details</Link>
            </Button>
          </div>

          <div className="border border-gray-800 rounded-lg p-6 hover:border-blue-600 transition-colors">
            <h2 className="text-2xl font-mono mb-4">Project 3</h2>
            <p className="text-gray-400 mb-4">
              Detailed description of Project 3 will go here. This section will include information about the project
              goals, strategies implemented, and results achieved.
            </p>
            <Button asChild>
              <Link href="/projects/project3">View Details</Link>
            </Button>
          </div>

          <div className="border border-gray-800 rounded-lg p-6 hover:border-blue-600 transition-colors">
            <h2 className="text-2xl font-mono mb-4">Project 4</h2>
            <p className="text-gray-400 mb-4">
              Detailed description of Project 4 will go here. This section will include information about the project
              goals, strategies implemented, and results achieved.
            </p>
            <Button asChild>
              <Link href="/projects/project4">View Details</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
