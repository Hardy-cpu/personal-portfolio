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

export default function Project2Page() {
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

                <h1 className='text-4xl font-medium mb-8'>Sports Marketing @ College of Charleston</h1>

                {/* College of Charleston Image */}
                <div className='mb-8'>
                    <div className='relative aspect-[16/9] bg-gray-900 rounded-lg overflow-hidden'>
                        <Image
                            src='/images/collegeathletics.jpeg'
                            alt='College of Charleston Athletics'
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
                            Working with the College of Charleston athletics department to enhance <span className='font-bold'>sports marketing initiatives</span> and improve{' '}
                            <span className='font-bold'>fan experience</span> across all athletic programs.
                        </p>
                    </div>

                    <div>
                        <h2 className='text-2xl font-medium mb-2'>Our Challenge</h2>
                        <p className='text-gray-300'>
                            The College of Charleston needed to <span className='font-bold'>increase fan engagement</span> and{' '}
                            <span className='font-bold'>build stronger community connections</span> with their athletic programs. The goal was to create a more dynamic and engaging
                            presence for Cougar athletics.
                        </p>
                    </div>

                    <div>
                        <h2 className='text-2xl font-medium mb-2'>Our Approach</h2>
                        <p className='text-gray-300'>We developed comprehensive marketing strategies focusing on:</p>
                        <ul className='list-disc list-inside text-gray-300 mt-4 space-y-2'>
                            <li>
                                <span className='font-bold'>Social Media Content Creation</span> - Engaging posts highlighting student-athletes and game highlights
                            </li>
                            <li>
                                <span className='font-bold'>Fan Experience Enhancement</span> - Improving game day atmosphere and community engagement
                            </li>
                            <li>
                                <span className='font-bold'>Brand Consistency</span> - Maintaining cohesive messaging across all athletics communications
                            </li>
                            <li>
                                <span className='font-bold'>Community Outreach</span> - Building stronger connections with Charleston community
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-2xl font-medium mb-2'>Key Initiatives</h2>
                        <p className='text-gray-300'>Our work with College of Charleston athletics included:</p>
                        <ul className='list-disc list-inside text-gray-300 mt-4 space-y-2'>
                            <li>
                                Development of <span className='font-bold'>digital marketing campaigns</span> for major sporting events
                            </li>
                            <li>
                                Creation of <span className='font-bold'>student-athlete spotlight content</span>
                            </li>
                            <li>
                                Implementation of <span className='font-bold'>fan engagement strategies</span> for home games
                            </li>
                            <li>
                                Coordination of <span className='font-bold'>community partnership initiatives</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-2xl font-medium mb-2'>Results</h2>
                        <p className='text-gray-300'>Through strategic marketing and communication efforts, we helped the College of Charleston athletics achieve:</p>
                        <ul className='list-disc list-inside text-gray-300 mt-4 space-y-2'>
                            <li>
                                <span className='font-bold'>Increased social media engagement</span> across all athletic platforms
                            </li>
                            <li>
                                <span className='font-bold'>Enhanced game day atmosphere</span> and fan participation
                            </li>
                            <li>
                                <span className='font-bold'>Stronger community partnerships</span> and local support
                            </li>
                            <li>
                                <span className='font-bold'>Improved brand recognition</span> for Cougar athletics
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
