import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ToolsPage() {
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

                <h1 className='text-4xl font-mono mb-8'>Marketing Tools & Workflow</h1>

                <div className='mb-12'>
                    <h2 className='text-2xl font-mono mb-4'>My Toolkit</h2>
                    <p className='text-gray-300 mb-6'>
                        Here are the primary tools I use in my digital marketing and communications work. Each tool serves a specific purpose in my workflow, allowing me to deliver
                        comprehensive solutions to clients.
                    </p>

                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
                        <div className='flex flex-col items-center'>
                            <div className='w-16 h-16 bg-white rounded-xl mb-2 flex items-center justify-center p-2'>
                                <Image
                                    src='/images/Figma.png'
                                    alt='Figma'
                                    width={48}
                                    height={48}
                                    className='object-contain'
                                />
                            </div>
                            <span className='text-sm text-gray-400'>Figma</span>
                            <span className='text-xs text-gray-500 text-center'>Design & Prototyping</span>
                        </div>

                        <div className='flex flex-col items-center'>
                            <div className='w-16 h-16 bg-white rounded-xl mb-2 flex items-center justify-center p-2'>
                                <Image
                                    src='/images/Twitter-logo.png'
                                    alt='Twitter'
                                    width={48}
                                    height={48}
                                    className='object-contain'
                                />
                            </div>
                            <span className='text-sm text-gray-400'>Twitter/X</span>
                            <span className='text-xs text-gray-500 text-center'>Social Media</span>
                        </div>

                        <div className='flex flex-col items-center'>
                            <div className='w-16 h-16 bg-white rounded-xl mb-2 flex items-center justify-center p-2'>
                                <Image
                                    src='/images/LinkedIn.png'
                                    alt='LinkedIn'
                                    width={48}
                                    height={48}
                                    className='object-contain'
                                />
                            </div>
                            <span className='text-sm text-gray-400'>LinkedIn</span>
                            <span className='text-xs text-gray-500 text-center'>Professional Network</span>
                        </div>

                        <div className='flex flex-col items-center'>
                            <div className='w-16 h-16 bg-white rounded-xl mb-2 flex items-center justify-center p-2'>
                                <Image
                                    src='/images/cursor-logo.jpeg'
                                    alt='Cursor'
                                    width={48}
                                    height={48}
                                    className='object-contain'
                                />
                            </div>
                            <span className='text-sm text-gray-400'>Cursor AI</span>
                            <span className='text-xs text-gray-500 text-center'>Code & Content</span>
                        </div>

                        <div className='flex flex-col items-center'>
                            <div className='w-16 h-16 bg-white rounded-xl mb-2 flex items-center justify-center p-2'>
                                <Image
                                    src='/images/semrush.png'
                                    alt='SEMrush'
                                    width={48}
                                    height={48}
                                    className='object-contain'
                                />
                            </div>
                            <span className='text-sm text-gray-400'>SEMrush</span>
                            <span className='text-xs text-gray-500 text-center'>SEO & Analytics</span>
                        </div>
                    </div>
                </div>

                <div className='mb-12'>
                    <h2 className='text-2xl font-mono mb-4'>My Workflow</h2>
                    <p className='text-gray-300 mb-6'>
                        My approach to digital marketing and communications projects follows a structured workflow that ensures quality and consistency across all client
                        engagements.
                    </p>

                    <div className='space-y-4'>
                        <div className='border border-gray-700 rounded-lg p-4 hover:border-blue-600 transition-colors'>
                            <h3 className='text-xl font-mono mb-2'>1. Discovery & Research</h3>
                            <p className='text-gray-400'>
                                Comprehensive analysis of target audience, industry trends, and competitive landscape using tools like SEMrush and Perplexity AI to gather deep
                                insights.
                            </p>
                        </div>

                        <div className='border border-gray-700 rounded-lg p-4 hover:border-blue-600 transition-colors'>
                            <h3 className='text-xl font-mono mb-2'>2. Strategy Development</h3>
                            <p className='text-gray-400'>
                                Creating data-driven marketing strategies that align with business goals, utilizing platform-specific approaches for LinkedIn, Twitter, and other
                                channels.
                            </p>
                        </div>

                        <div className='border border-gray-700 rounded-lg p-4 hover:border-blue-600 transition-colors'>
                            <h3 className='text-xl font-mono mb-2'>3. Content Creation</h3>
                            <p className='text-gray-400'>
                                Developing engaging content using Figma for design, Cursor AI for efficient content management, and v0 Dev for interactive elements and mockups.
                            </p>
                        </div>

                        <div className='border border-gray-700 rounded-lg p-4 hover:border-blue-600 transition-colors'>
                            <h3 className='text-xl font-mono mb-2'>4. Implementation</h3>
                            <p className='text-gray-400'>
                                Strategic deployment across all channels with careful timing, platform optimization, and consistent brand messaging to maximize impact.
                            </p>
                        </div>

                        <div className='border border-gray-700 rounded-lg p-4 hover:border-blue-600 transition-colors'>
                            <h3 className='text-xl font-mono mb-2'>5. Analysis & Optimization</h3>
                            <p className='text-gray-400'>
                                Continuous monitoring of performance metrics, A/B testing, and iterative improvements based on data insights to ensure optimal results.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-2xl font-mono mb-4'>Additional Tools & Technologies</h2>
                    <p className='text-gray-300 mb-4'>Beyond the core toolkit, I leverage additional technologies for enhanced workflow efficiency:</p>
                    <ul className='list-disc list-inside text-gray-300 space-y-2'>
                        <li>
                            <Link
                                href='https://www.perplexity.ai/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='font-bold hover:text-blue-400'
                            >
                                Perplexity AI
                            </Link>{' '}
                            - Advanced research and competitive analysis
                        </li>
                        <li>
                            <Link
                                href='https://v0.dev/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='font-bold hover:text-blue-400'
                            >
                                v0 Dev
                            </Link>{' '}
                            - Rapid prototyping and design mockups
                        </li>
                        <li>
                            <Link
                                href='https://github.com/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='font-bold hover:text-blue-400'
                            >
                                GitHub
                            </Link>{' '}
                            - Version control and project management
                        </li>
                        <li>
                            <span className='font-bold'>Google Analytics</span> - Web traffic analysis and conversion tracking
                        </li>
                        <li>
                            <span className='font-bold'>Canva</span> - Quick graphic design and social media assets
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
