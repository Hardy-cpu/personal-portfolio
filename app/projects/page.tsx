import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ProjectsPage() {
    return (
        <div className='min-h-screen bg-gray-800 text-white p-6'>
            <div className='max-w-4xl mx-auto'>
                <div className='mb-8'>
                    <Button
                        variant='ghost'
                        size='sm'
                        asChild
                    >
                        <Link
                            href='/'
                            className='flex items-center gap-2'
                        >
                            <ArrowLeft className='w-4 h-4' />
                            Back to Home
                        </Link>
                    </Button>
                </div>

                <h1 className='text-4xl font-mono mb-8'>Marketing Projects</h1>

                <div className='space-y-12'>
                    <div className='border border-gray-800 rounded-lg p-6 hover:border-blue-600 transition-colors'>
                        <h2 className='text-2xl font-mono mb-4'>CLEATUS</h2>
                        <p className='text-gray-400 mb-4'>
                            Developing engaging content and strategic marketing plans for CLEATUS, focusing on brand development and content creation. Grew LinkedIn from zero to
                            over 2k followers driving thousands in MRR.
                        </p>
                        <Button asChild>
                            <Link href='/projects/project1'>View Details</Link>
                        </Button>
                    </div>

                    <div className='border border-gray-800 rounded-lg p-6 hover:border-blue-600 transition-colors'>
                        <h2 className='text-2xl font-mono mb-4'>College of Charleston</h2>
                        <p className='text-gray-400 mb-4'>Sports Marketing and fan experience initiatives for College of Charleston athletics department.</p>
                        <Button asChild>
                            <Link href='/projects/project2'>View Details</Link>
                        </Button>
                    </div>

                    <div className='border border-gray-800 rounded-lg p-6 hover:border-blue-600 transition-colors'>
                        <h2 className='text-2xl font-mono mb-4'>Social Media Management</h2>
                        <p className='text-gray-400 mb-4'>Building and managing brand presence across social media platforms with strategic content creation.</p>
                        <Button asChild>
                            <Link href='/projects/project3'>View Details</Link>
                        </Button>
                    </div>

                    <div className='border border-gray-800 rounded-lg p-6 hover:border-blue-600 transition-colors'>
                        <h2 className='text-2xl font-mono mb-4'>Agency Analytics</h2>
                        <p className='text-gray-400 mb-4'>Comprehensive guides and API documentation for marketing analytics and data-driven strategies.</p>
                        <Button asChild>
                            <Link href='/projects/project4'>View Details</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
