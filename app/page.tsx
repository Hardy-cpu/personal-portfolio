'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu, Twitter, Linkedin, Youtube, ArrowRight, Mail, Phone, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Portfolio() {
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
                    <div className='space-y-6'>
                        <p className='text-gray-300 text-lg leading-relaxed'>
                            I've combined years of writing experience with my passion for branding, business, and technology. I am obsessed with creating valuable content within
                            any industry, for any business, and based on any guidelines. I see myself as someone who could come into a brand new business and quickly create
                            marketing plans, strategize re-branding, edit existing content, create new content, and assist with the necessary sourcing of important jobs.
                        </p>
                        <p className='text-gray-300 text-lg leading-relaxed'>
                            Giving me an opportunity to create, edit, or improve something, is almost always a profitable investment.
                        </p>
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
                                View Resume
                            </Link>
                        </Button>
                    </div>

                    {/* Contact Information */}
                    <div className='space-y-4'>
                        <div className='flex items-center gap-3'>
                            <Mail className='w-5 h-5 text-blue-400' />
                            <Link
                                href='mailto:hardisterw@g.cofc.edu'
                                className='text-gray-300 hover:text-white'
                            >
                                hardisterw@g.cofc.edu
                            </Link>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Phone className='w-5 h-5 text-green-400' />
                            <Link
                                href='tel:+15034905874'
                                className='text-gray-300 hover:text-white'
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

                    {/* Contact and Clients Sections */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {/* Contact Section */}
                        <section className='relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6'>
                            <h2 className='text-2xl font-mono mb-4'>Contact</h2>
                            <div className='space-y-4'>
                                <Link
                                    href='mailto:hardisterw@g.cofc.edu'
                                    className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition-colors'
                                >
                                    <Mail className='w-5 h-5 text-blue-400' />
                                    <span>Email Me</span>
                                </Link>
                                <Link
                                    href='tel:+15034905874'
                                    className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition-colors'
                                >
                                    <Phone className='w-5 h-5 text-green-400' />
                                    <span>Call Me</span>
                                </Link>
                                <Link
                                    href='/Cole-Resume.pdf'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition-colors'
                                >
                                    <FileText className='w-5 h-5 text-purple-400' />
                                    <span>View Resume</span>
                                </Link>
                            </div>
                        </section>

                        {/* Experience Section */}
                        <section className='bg-gray-900 rounded-xl p-6'>
                            <div className='flex items-center gap-2 mb-2'>
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className='w-5 h-5 text-yellow-400 fill-current'
                                        viewBox='0 0 20 20'
                                    >
                                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                                    </svg>
                                ))}
                            </div>
                            <h3 className='text-4xl font-bold mb-4'>3+</h3>
                            <p className='text-gray-400'>Years Experience</p>
                            <p className='text-sm text-gray-500 mt-2'>Digital Marketing & Communications</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
