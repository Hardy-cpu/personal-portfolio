'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
})

export default function Project1Page() {
    return (
        <div className={`min-h-screen bg-[#243665] text-white p-6 ${roboto.className}`}>
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
                            Home
                        </Link>
                    </Button>
                </div>

                <h1 className='text-4xl font-medium mb-8'>Marketing and Communications @ CLEATUS</h1>

                {/* Article Images Section */}
                <div className='mb-8 grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {[1, 2, 3, 4].map((num) => (
                        <div
                            key={num}
                            className='relative aspect-[16/9] bg-[#243665] rounded-lg overflow-hidden'
                        >
                            <Image
                                src={`/images/article-${num}.png`}
                                alt={`Article ${num}`}
                                fill
                                className='object-contain'
                                sizes='(max-width: 768px) 100vw, 350px'
                            />
                        </div>
                    ))}
                </div>

                {/* CLEATUS Insights Report Button */}
                <div className='mb-8'>
                    <Button
                        variant='outline'
                        size='lg'
                        className='gap-2 text-white bg-gray-800 hover:bg-gray-700'
                        asChild
                    >
                        <Link
                            href='/CLEATUS-InsightsReport.pdf'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FileText className='w-5 h-5' />
                            View CLEATUS Insights Report
                        </Link>
                    </Button>
                </div>

                <div className='space-y-6'>
                    <div>
                        <h2 className='text-2xl font-medium mb-2'>What is CLEATUS?</h2>
                        <p className='text-gray-300'>
                            CLEATUS is a <span className='font-bold'>comprehensive, AI-powered platform designed to streamline the entire government contracting process</span>. It
                            completely transforms the contract management process, from bid to award, and provides a comprehensive workflow throughout.
                        </p>
                    </div>

                    <div>
                        <h2 className='text-2xl font-medium mb-2'>Our Challenge</h2>
                        <p className='text-gray-300'>
                            CLEATUS had <span className='font-bold'>little to no marketing presence</span> and were relying primarily on{' '}
                            <span className='font-bold'>targeted google ads</span> to generate leads. They needed to establish a{' '}
                            <span className='font-bold'>strong brand presence</span> and a <span className='font-bold'>reliable channel for new customer acquisition</span>.
                        </p>
                    </div>

                    <div>
                        <h2 className='text-2xl font-medium mb-2'>Our Solution</h2>
                        <p className='text-gray-300'>
                            After extensive industry-specific research into target audience, media trends, and market trends, we concluded that{' '}
                            <span className='font-bold'>utilizing LinkedIn</span> to create valuable content, post feature updates, and connect with potential customers would be
                            the best option for CLEATUS. The challenge was to establish a strong presence on this platform while maintaining consistent engagement and valuable
                            content delivery.
                        </p>
                        <p className='text-gray-300 mt-4'>
                            We worked in unison with the CLEATUS team to <span className='font-bold'>develop topic ideas for long and short-form content</span>,{' '}
                            <span className='font-bold'>create and edit content</span>, <span className='font-bold'>improve company messaging</span>,{' '}
                            <span className='font-bold'>develop long-term goals</span>, and <span className='font-bold'>enhance brand identity</span>. The team made it a priority
                            to enhance workflow processes and maintain efficiency by leveraging innovative tools including:
                        </p>
                        <ul className='list-disc list-inside text-gray-300 mt-4 space-y-2'>
                            <li>
                                <Link
                                    href='https://www.cursor.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='font-bold hover:text-blue-400'
                                >
                                    Cursor AI
                                </Link>{' '}
                                - Maintaining a repository of written content and visuals
                            </li>
                            <li>
                                <Link
                                    href='https://www.perplexity.ai/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='font-bold hover:text-blue-400'
                                >
                                    Perplexity AI
                                </Link>{' '}
                                - Detailed industry research and comprehensive sourcing
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
                                - Design mock-ups, infographics, and dynamic charts/graphs
                            </li>
                            <li>
                                <Link
                                    href='https://www.figma.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='font-bold hover:text-blue-400'
                                >
                                    Figma
                                </Link>{' '}
                                - Graphic Design (ads, thumbnails, logo iterations, and brand visuals)
                            </li>
                            <li>
                                <Link
                                    href='https://github.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='font-bold hover:text-blue-400'
                                >
                                    Github
                                </Link>{' '}
                                - CLEATUS codebase management and website content updates
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-2xl font-medium mb-2'>Results</h2>
                        <p className='text-gray-300'>
                            The CLEATUS LinkedIn campaign resulted in <span className='font-bold'>significant increases in brand visibility and engagement</span>. Since October
                            2024, CLEATUS has achieved:
                        </p>
                        <ul className='list-disc list-inside text-gray-300 mt-4 space-y-2'>
                            <li>
                                <span className='font-bold'>2,000+</span> new LinkedIn followers (from zero)
                            </li>
                            <li>
                                Driving <span className='font-bold'>thousands in MRR</span> through LinkedIn engagement
                            </li>
                            <li>
                                Nearly <span className='font-bold'>120,000</span> impressions across content
                            </li>
                            <li>
                                Established a <span className='font-bold'>reliable channel for new customer acquisition</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
