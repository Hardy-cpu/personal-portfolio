import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ToolsPage() {
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

        <h1 className="text-4xl font-mono mb-8">Marketing Tools & Workflow</h1>

        <div className="mb-12">
          <h2 className="text-2xl font-mono mb-4">My Toolkit</h2>
          <p className="text-gray-300 mb-6">
            Here are the primary tools I use in my digital marketing and communications work. Each tool serves a
            specific purpose in my workflow, allowing me to deliver comprehensive solutions to clients.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-800 rounded-xl mb-2 flex items-center justify-center">
                  <span className="text-gray-500 font-mono text-xs">Tool {i}</span>
                </div>
                <span className="text-sm text-gray-400">Tool Name</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-mono mb-4">My Workflow</h2>
          <p className="text-gray-300 mb-6">
            My approach to digital marketing and communications projects follows a structured workflow that ensures
            quality and consistency.
          </p>

          <div className="space-y-4">
            <div className="border border-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-mono mb-2">1. Discovery & Research</h3>
              <p className="text-gray-400">Description of the discovery and research phase of your workflow.</p>
            </div>

            <div className="border border-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-mono mb-2">2. Strategy Development</h3>
              <p className="text-gray-400">Description of how you develop marketing strategies.</p>
            </div>

            <div className="border border-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-mono mb-2">3. Content Creation</h3>
              <p className="text-gray-400">Description of your content creation process.</p>
            </div>

            <div className="border border-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-mono mb-2">4. Implementation</h3>
              <p className="text-gray-400">Description of how you implement marketing campaigns.</p>
            </div>

            <div className="border border-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-mono mb-2">5. Analysis & Optimization</h3>
              <p className="text-gray-400">Description of how you analyze results and optimize campaigns.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-mono mb-4">Demo Video</h2>
          <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 font-mono">Demo Video Will Go Here</span>
          </div>
        </div>
      </div>
    </div>
  )
}
