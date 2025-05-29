'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
})

export default function Project3Page() {
    return (
        <div className={`min-h-screen bg-gray-800 text-white p-6 ${roboto.className}`}>
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

                <h1 className='text-4xl font-medium mb-8'>Social Media Management</h1>

                {/* Social Media Header Image */}
                <div className='mb-8'>
                    <div className='relative aspect-[16/9] bg-gray-900 rounded-lg overflow-hidden'>
                        <Image
                            src='/images/twitter-header.png'
                            alt='Social Media Management'
                            fill
                            className='object-cover'
                            sizes='(max-width: 768px) 100vw, 800px'
                        />
                    </div>
                </div>

                <div className='space-y-6'>
                    <div>
                        <h2 className='text-2xl font-medium mb-2'>Project Overview</h2>
                        <p className='text-gray-300'>
                            Comprehensive <span className='font-bold'>social media management</span> services focused on building and managing brand presence across multiple
                            platforms. Our approach emphasizes <span className='font-bold'>strategic content creation</span> and{' '}
                            <span className='font-bold'>community engagement</span>.
                        </p>
                    </div>

                    <div>
                        <h2 className='text-2xl font-medium mb-2'>Our Challenge</h2>
                        <p className='text-gray-300'>
                            Many businesses struggle to maintain <span className='font-bold'>consistent social media presence</span> while creating engaging content that resonates
                            with their target audience. The challenge was to develop a sustainable strategy that drives <span className='font-bold'>meaningful engagement</span> and{' '}
                            <span className='font-bold'>brand growth</span>.
                        </p>
                    </div>

                    <div>
                        <h2 className='text-2xl font-medium mb-2'>Our Strategy</h2>
                        <p className='text-gray-300'>We developed a comprehensive social media strategy that includes:</p>
                        <ul className='list-disc list-inside text-gray-300 mt-4 space-y-2'>
                            <li>
                                <span className='font-bold'>Content Calendar Development</span> - Strategic planning of posts across all platforms
                            </li>
                            <li>
                                <span className='font-bold'>Brand Voice Consistency</span> - Maintaining cohesive messaging across channels
                            </li>
                            <li>
                                <span className='font-bold'>Community Management</span> - Active engagement with followers and responding to interactions
                            </li>
                            <li>
                                <span className='font-bold'>Performance Analytics</span> - Regular monitoring and optimization based on metrics
                            </li>
                            <li>
                                <span className='font-bold'>Platform-Specific Content</span> - Tailored content for Twitter, LinkedIn, Instagram, and other platforms
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-2xl font-medium mb-2'>Tools & Platforms</h2>
                        <p className='text-gray-300'>Our social media management leverages industry-leading tools:</p>
                        <ul className='list-disc list-inside text-gray-300 mt-4 space-y-2'>
                            <li>
                                <span className='font-bold'>Twitter/X</span> - Real-time engagement and thought leadership
                            </li>
                            <li>
                                <span className='font-bold'>LinkedIn</span> - Professional networking and B2B content
                            </li>
                            <li>
                                <span className='font-bold'>Instagram</span> - Visual storytelling and brand awareness
                            </li>
                            <li>
                                <span className='font-bold'>Analytics Tools</span> - Data-driven insights and performance tracking
                            </li>
                            <li>
                                <span className='font-bold'>Content Creation Software</span> - Figma, Canva, and other design tools
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-2xl font-medium mb-2'>Results</h2>
                        <p className='text-gray-300'>Through strategic social media management, our clients have achieved:</p>
                        <ul className='list-disc list-inside text-gray-300 mt-4 space-y-2'>
                            <li>
                                <span className='font-bold'>Increased follower growth</span> across all managed platforms
                            </li>
                            <li>
                                <span className='font-bold'>Higher engagement rates</span> with quality content
                            </li>
                            <li>
                                <span className='font-bold'>Improved brand recognition</span> and awareness
                            </li>
                            <li>
                                <span className='font-bold'>Enhanced community building</span> and customer relationships
                            </li>
                            <li>
                                <span className='font-bold'>Measurable ROI</span> from social media marketing efforts
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
