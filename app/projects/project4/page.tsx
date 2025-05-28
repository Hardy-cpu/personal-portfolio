import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Project4Page() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/projects" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

        <h1 className="text-4xl font-mono mb-8">Project 4</h1>

        <div className="aspect-video relative mb-8 bg-gray-900 rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-gray-500 font-mono">Project Image Will Go Here</span>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-mono mb-2">Overview</h2>
            <p className="text-gray-300">
              Detailed overview of the project will go here. This will include the project's purpose, goals, and overall
              scope.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-mono mb-2">Challenge</h2>
            <p className="text-gray-300">
              Description of the challenges faced during this project and how they were addressed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-mono mb-2">Solution</h2>
            <p className="text-gray-300">
              Explanation of the solutions implemented, strategies used, and the overall approach to the project.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-mono mb-2">Results</h2>
            <p className="text-gray-300">Summary of the project outcomes, metrics, and overall impact of the work.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
