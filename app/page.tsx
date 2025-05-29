'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu, Twitter, Linkedin, Youtube, ArrowRight, Mail, Phone, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Portfolio() {
    // Structured data for SEO
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Cole Hardister',
        jobTitle: 'Digital Marketing & Communications Expert',
        description: 'Digital marketing strategist who transforms businesses through marketing, distribution, and go-to-market strategy',
        url: 'https://colehardister.com',
        image: 'https://colehardister.com/images/cole-profile.JPEG',
        email: 'hardisterw@g.cofc.edu',
        telephone: '+15034905874',
        alumniOf: {
            '@type': 'CollegeOrUniversity',
            name: 'College of Charleston',
        },
        knowsAbout: ['Digital Marketing', 'LinkedIn Growth', 'Social Media Marketing', 'Content Strategy', 'Go-to-Market Strategy', 'Sports Marketing', 'Analytics'],
        hasOccupation: {
            '@type': 'Occupation',
            name: 'Digital Marketing Strategist',
            description: 'Specializes in marketing strategy, distribution, and go-to-market planning',
        },
        sameAs: ['https://linkedin.com/in/colehardister', 'https://twitter.com/colehardister'],
    }

    // Keep only the CLEATUS slide as static content
    const heroProject = {
        image: '/images/cover.png',
        title: 'CLEATUS',
        description: 'Marketing and Communications - grew LinkedIn from zero to over 2k followers driving thousands in MRR',
        thumbnailImage: '/images/small-frame.png',
    }

    // Project slides data for thumbnails only
    const slides = [
        {
            image: '/images/cover.png',
            title: 'CLEATUS',
            description: 'Marketing and Communications - grew LinkedIn from zero to over 2k followers driving thousands in MRR',
            thumbnailImage: '/images/small-frame.png',
        },
        {
            image: '/images/collegeathletics.jpeg',
            title: 'College of Charleston',
            description: 'Sports Marketing',
            thumbnailImage: '/images/CofcLogo.png',
        },
        {
            image: '/images/twitter-header.png',
            title: 'Social Media Management',
            description: 'Content Strategy & Growth',
            thumbnailImage: '/images/X-logo.png',
        },
        {
            image: '/images/linkedin-analytics.png',
            title: 'Agency Analytics',
            description: 'Comprehensive guides and API documentation',
            thumbnailImage: '/images/LinkedIn.png',
        },
    ]

    return (
        <div className='min-h-screen bg-gray-800 text-white p-6'>
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <div className='grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8'>
                {/* Left Sidebar */}
                <div className='space-y-8'>
                    {/* Profile Header */}
                    <div className='flex items-center gap-4'>
                        <Image
                            src='/images/cole-profile.JPEG'
                            alt='Cole Hardister Profile'
                            width={90}
                            height={90}
                            className='rounded-md border-2 border-white'
                        />
                        <div>
                            <h1 className='text-2xl font-mono'>COLE HARDISTER</h1>
                            <p className='text-gray-400'>DIGITAL MARKETING & COMMUNICATIONS</p>
                        </div>
                    </div>

                    {/* Bio */}
                    <div className='space-y-4'>
                        <p className='text-gray-300 text-lg leading-relaxed font-semibold'>I transform businesses through marketing, distribution, and go-to-market strategy.</p>
                        <ul className='list-disc list-inside text-gray-300 space-y-2 text-sm'>
                            <li>
                                Grew <span className='font-bold'>LinkedIn</span> presence from <span className='font-bold'>0 → 2,000+</span> followers for{' '}
                                <span className='font-bold'>CLEATUS</span>, driving <span className='font-bold'>thousands in new MRR</span>.
                            </li>
                            <li>
                                Delivered <span className='font-bold'>120K+</span> organic impressions in 90 days through targeted content campaigns.
                            </li>
                            <li>
                                Led <span className='font-bold'>sports-marketing activations</span> for <span className='font-bold'>College of Charleston</span> boosting game-day
                                fan engagement by 40%.
                            </li>
                            <li>Built data-driven dashboards & reporting suites that cut weekly analytics time by 70%.</li>
                            <li>Trusted by startups & universities to craft brand voice, scale distribution, and ship revenue-ready GTM plans.</li>
                        </ul>
                        <Button
                            variant='outline'
                            className='rounded-full bg-transparent border-white text-white hover:bg-white hover:text-gray-800'
                            asChild
                        >
                            <Link
                                href='/Cole-Resume.pdf'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                View Full Résumé
                            </Link>
                        </Button>
                    </div>

                    {/* Contact Information */}
                    <div className='space-y-4'>
                        <div className='flex items-center gap-3'>
                            <div className='w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center'>
                                <Mail className='w-4 h-4 text-gray-300' />
                            </div>
                            <Link
                                href='mailto:hardisterw@g.cofc.edu'
                                className='text-gray-300 hover:text-white transition-colors'
                            >
                                hardisterw@g.cofc.edu
                            </Link>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center'>
                                <Phone className='w-4 h-4 text-gray-300' />
                            </div>
                            <Link
                                href='tel:+15034905874'
                                className='text-gray-300 hover:text-white transition-colors'
                            >
                                +1 (503) 490-5874
                            </Link>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className='space-y-4'>
                        <div className='flex gap-4'>
                            <div className='w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2'>
                                <Image
                                    src='/images/X-logo.png'
                                    alt='X/Twitter'
                                    width={40}
                                    height={40}
                                    className='object-contain'
                                />
                            </div>
                            <div className='w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2'>
                                <Image
                                    src='/images/LinkedIn.png'
                                    alt='LinkedIn'
                                    width={40}
                                    height={40}
                                    className='object-contain'
                                />
                            </div>
                            <div className='w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2'>
                                <Image
                                    src='/images/meta-logo.jpeg'
                                    alt='Meta'
                                    width={40}
                                    height={40}
                                    className='object-contain'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className='space-y-8'>
                    {/* Menu Button - Only show on mobile */}
                    <div className='flex justify-end lg:hidden'>
                        <Button
                            variant='ghost'
                            size='icon'
                        >
                            <Menu className='w-6 h-6' />
                        </Button>
                    </div>

                    {/* Project Highlights Section */}
                    <section className='space-y-8'>
                        <div className='flex justify-between items-center'>
                            <h2 className='text-2xl font-mono'>My Projects</h2>
                            <Button
                                variant='ghost'
                                size='icon'
                                asChild
                            >
                                <Link href='/projects'>
                                    <ArrowRight className='w-5 h-5' />
                                </Link>
                            </Button>
                        </div>

                        {/* Projects Section - 2/3 width */}
                        <section className='space-y-8'>
                            {/* Project Highlights Carousel - now static */}
                            <div className='relative h-[300px] bg-gray-900 rounded-xl overflow-hidden group'>
                                <Image
                                    src={heroProject.image}
                                    alt={heroProject.title}
                                    fill
                                    className='object-cover'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity'>
                                    <div className='absolute bottom-4 left-4 right-4'>
                                        <h3 className='text-xl font-bold mb-2'>{heroProject.title}</h3>
                                        <p className='text-gray-300'>{heroProject.description}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Project Thumbnails */}
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                                {slides.map((project, index) => (
                                    <Link
                                        key={index}
                                        href={`/projects/project${index + 1}`}
                                        className='block'
                                    >
                                        <div className='relative aspect-[4/3] bg-gray-900 rounded-lg overflow-hidden group transition-all duration-300'>
                                            <Image
                                                src={project.thumbnailImage}
                                                alt={project.title}
                                                fill
                                                className='object-cover group-hover:scale-105 transition-transform duration-300'
                                            />
                                            <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'>
                                                <span className='text-white text-sm font-medium text-center px-2'>{project.title}</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    </section>

                    {/* Tools Section */}
                    <section className='bg-blue-600 rounded-xl p-6'>
                        <div className='flex justify-between items-center mb-4'>
                            <h2 className='text-2xl font-mono'>Tools/Skills</h2>
                            <Button
                                variant='ghost'
                                size='icon'
                                className='text-white'
                                asChild
                            >
                                <Link href='/tools'>
                                    <ArrowRight className='w-5 h-5' />
                                </Link>
                            </Button>
                        </div>
                        <div className='flex gap-4 flex-wrap'>
                            <div className='w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2'>
                                <Image
                                    src='/images/Figma.png'
                                    alt='Figma'
                                    width={40}
                                    height={40}
                                    className='object-contain'
                                />
                            </div>
                            <div className='w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2'>
                                <Image
                                    src='/images/X-logo.png'
                                    alt='X/Twitter'
                                    width={40}
                                    height={40}
                                    className='object-contain'
                                />
                            </div>
                            <div className='w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2'>
                                <Image
                                    src='/images/LinkedIn.png'
                                    alt='LinkedIn'
                                    width={40}
                                    height={40}
                                    className='object-contain'
                                />
                            </div>
                            <div className='w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2'>
                                <Image
                                    src='/images/cursor-logo.jpeg'
                                    alt='Cursor'
                                    width={40}
                                    height={40}
                                    className='object-contain'
                                />
                            </div>
                            <div className='w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2'>
                                <Image
                                    src='/images/semrush.png'
                                    alt='SEMrush'
                                    width={40}
                                    height={40}
                                    className='object-contain'
                                />
                            </div>
                            <div className='w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2'>
                                <Image
                                    src='/images/github-logo.png'
                                    alt='GitHub'
                                    width={40}
                                    height={40}
                                    className='object-contain'
                                />
                            </div>
                            <div className='w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2'>
                                <Image
                                    src='/images/meta-logo.jpeg'
                                    alt='Meta'
                                    width={40}
                                    height={40}
                                    className='object-contain'
                                />
                            </div>
                            <div className='w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2'>
                                <Image
                                    src='/images/capcut-logo.png'
                                    alt='CapCut'
                                    width={40}
                                    height={40}
                                    className='object-contain'
                                />
                            </div>
                            <div className='w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2'>
                                <Image
                                    src='/images/screen-studio.jpeg'
                                    alt='Screen Studio'
                                    width={40}
                                    height={40}
                                    className='object-contain'
                                />
                            </div>
                        </div>
                    </section>

                    {/* Contact and Stats Sections */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {/* Contact Section */}
                        <section className='relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 border border-gray-700'>
                            <h2 className='text-2xl font-mono mb-4'>Contact</h2>
                            <div className='space-y-4'>
                                <Link
                                    href='mailto:hardisterw@g.cofc.edu'
                                    className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition-colors group'
                                >
                                    <div className='w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center group-hover:bg-gray-600 transition-colors'>
                                        <Mail className='w-4 h-4 text-gray-300' />
                                    </div>
                                    <span className='text-gray-300'>Email Me</span>
                                </Link>
                                <Link
                                    href='tel:+15034905874'
                                    className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition-colors group'
                                >
                                    <div className='w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center group-hover:bg-gray-600 transition-colors'>
                                        <Phone className='w-4 h-4 text-gray-300' />
                                    </div>
                                    <span className='text-gray-300'>Call Me</span>
                                </Link>
                                <Link
                                    href='/Cole-Resume.pdf'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition-colors group'
                                >
                                    <div className='w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center group-hover:bg-gray-600 transition-colors'>
                                        <FileText className='w-4 h-4 text-gray-300' />
                                    </div>
                                    <span className='text-gray-300'>View Resume</span>
                                </Link>
                            </div>
                        </section>

                        {/* Achievement Stats Section */}
                        <section className='bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700'>
                            <div className='space-y-6'>
                                <div>
                                    <h3 className='text-3xl font-bold text-white mb-1'>2K+</h3>
                                    <p className='text-gray-400 text-sm'>LinkedIn Followers Grown</p>
                                </div>
                                <div>
                                    <h3 className='text-3xl font-bold text-white mb-1'>120K+</h3>
                                    <p className='text-gray-400 text-sm'>Organic Impressions</p>
                                </div>
                                <div>
                                    <h3 className='text-3xl font-bold text-white mb-1'>40%</h3>
                                    <p className='text-gray-400 text-sm'>Fan Engagement Increase</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
