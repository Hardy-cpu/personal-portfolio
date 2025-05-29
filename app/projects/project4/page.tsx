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

export default function Project4Page() {
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

                <h1 className='text-4xl font-medium mb-8'>Agency Analytics & Documentation</h1>

                {/* Analytics Image */}
                <div className='mb-8'>
                    <div className='relative aspect-[16/9] bg-gray-900 rounded-lg overflow-hidden'>
                        <Image
                            src='/images/linkedin-analytics.png'
                            alt='Agency Analytics'
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
                            Comprehensive <span className='font-bold'>marketing analytics platform</span> and <span className='font-bold'>API documentation</span> project focused
                            on providing data-driven insights and comprehensive guides for marketing agencies and professionals.
                        </p>
                    </div>

                    <div>
                        <h2 className='text-2xl font-medium mb-2'>Our Challenge</h2>
                        <p className='text-gray-300'>
                            Marketing agencies needed a centralized solution for <span className='font-bold'>tracking performance metrics</span> across multiple platforms while
                            having access to <span className='font-bold'>clear, comprehensive documentation</span> for implementing various marketing tools and APIs.
                        </p>
                    </div>

                    <div>
                        <h2 className='text-2xl font-medium mb-2'>Our Solution</h2>
                        <p className='text-gray-300'>We developed a comprehensive analytics and documentation system that includes:</p>
                        <ul className='list-disc list-inside text-gray-300 mt-4 space-y-2'>
                            <li>
                                <span className='font-bold'>Multi-Platform Analytics Dashboard</span> - Unified view of performance across social media, email, and web
                            </li>
                            <li>
                                <span className='font-bold'>Real-Time Reporting</span> - Live data updates and customizable reporting tools
                            </li>
                            <li>
                                <span className='font-bold'>API Documentation</span> - Comprehensive guides for integrating marketing tools
                            </li>
                            <li>
                                <span className='font-bold'>Data Visualization</span> - Interactive charts and graphs for better insights
                            </li>
                            <li>
                                <span className='font-bold'>Performance Benchmarking</span> - Industry standards and competitive analysis
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-2xl font-medium mb-2'>Key Features</h2>
                        <p className='text-gray-300'>The analytics platform provides:</p>
                        <ul className='list-disc list-inside text-gray-300 mt-4 space-y-2'>
                            <li>
                                <span className='font-bold'>LinkedIn Analytics Integration</span> - Deep insights into professional network performance
                            </li>
                            <li>
                                <span className='font-bold'>Custom KPI Tracking</span> - Tailored metrics for different marketing objectives
                            </li>
                            <li>
                                <span className='font-bold'>Automated Report Generation</span> - Scheduled reports for stakeholders
                            </li>
                            <li>
                                <span className='font-bold'>API Rate Limit Management</span> - Efficient usage of third-party APIs
                            </li>
                            <li>
                                <span className='font-bold'>Documentation Portal</span> - Searchable guides and tutorials
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-2xl font-medium mb-2'>Technical Implementation</h2>
                        <p className='text-gray-300'>Built using modern technologies and best practices:</p>
                        <ul className='list-disc list-inside text-gray-300 mt-4 space-y-2'>
                            <li>
                                <span className='font-bold'>Next.js & React</span> - Modern web application framework
                            </li>
                            <li>
                                <span className='font-bold'>TypeScript</span> - Type-safe development environment
                            </li>
                            <li>
                                <span className='font-bold'>API Integrations</span> - LinkedIn, Twitter, Facebook, and Google Analytics
                            </li>
                            <li>
                                <span className='font-bold'>Database Management</span> - Efficient data storage and retrieval
                            </li>
                            <li>
                                <span className='font-bold'>Documentation Tools</span> - Interactive API documentation
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-2xl font-medium mb-2'>Results</h2>
                        <p className='text-gray-300'>The analytics and documentation platform has delivered:</p>
                        <ul className='list-disc list-inside text-gray-300 mt-4 space-y-2'>
                            <li>
                                <span className='font-bold'>Improved Decision Making</span> - Data-driven insights for marketing strategies
                            </li>
                            <li>
                                <span className='font-bold'>Time Savings</span> - Automated reporting reduced manual work by 70%
                            </li>
                            <li>
                                <span className='font-bold'>Better API Adoption</span> - Clear documentation increased integration success rate
                            </li>
                            <li>
                                <span className='font-bold'>Enhanced Performance Tracking</span> - Real-time monitoring of campaign effectiveness
                            </li>
                            <li>
                                <span className='font-bold'>Scalable Solution</span> - Platform supports multiple clients and use cases
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
