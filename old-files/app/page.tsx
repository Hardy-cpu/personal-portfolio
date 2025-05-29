'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu, Twitter, Linkedin, Youtube, ArrowRight, Mail, Phone, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Portfolio() {
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
                            any industry, for any business, and based on any guidelines.
                        </p>
                        <p className='text-gray-300 text-lg leading-relaxed'>
                            I see myself as someone who could come into a brand new business and quickly create marketing plans, strategize re-branding, edit existing content,
                            create new content, and assist with the necessary sourcing of important jobs.
                        </p>
                        <p className='text-gray-300 text-lg leading-relaxed'>
                            Giving me an opportunity to create, edit, or improve something, is almost always a profitable investment.
                        </p>
                        <Button
                            variant='outline'
                            className='rounded-full hover:bg-white hover:text-black transition-colors'
                        >
                            More about Me
                        </Button>
                    </div>

                    {/* Social Links */}
                    <div className='space-y-4'>
                        <div className='flex gap-4'>
                            <Button
                                variant='ghost'
                                size='icon'
                                asChild
                            >
                                <Link
                                    href='https://twitter.com/your-handle'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Twitter className='w-5 h-5' />
                                </Link>
                            </Button>
                            <Button
                                variant='ghost'
                                size='icon'
                                asChild
                            >
                                <Link
                                    href='https://www.linkedin.com/in/colehardister'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Linkedin className='w-5 h-5' />
                                </Link>
                            </Button>
                            <Button
                                variant='ghost'
                                size='icon'
                                asChild
                            >
                                <Link
                                    href='https://youtube.com/your-channel'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Youtube className='w-5 h-5' />
                                </Link>
                            </Button>
                        </div>
                        <div className='text-gray-400 text-sm'>
                            <p>© 2024 Cole Hardister</p>
                            <div className='flex gap-4'>
                                <Link
                                    href='/contact'
                                    className='hover:text-white'
                                >
                                    Contact
                                </Link>
                                <Link
                                    href='/privacy'
                                    className='hover:text-white'
                                >
                                    Privacy
                                </Link>
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

                    {/* Projects Section */}
                    <section>
                        <div className='flex justify-between items-center mb-4'>
                            <h2 className='text-2xl font-mono'>My Projects</h2>
                            <Button
                                variant='ghost'
                                size='icon'
                            >
                                <ArrowRight className='w-5 h-5' />
                                <span className='sr-only'>View all projects</span>
                            </Button>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                            <Link
                                href='/projects/project1'
                                className='block'
                            >
                                <div className='relative aspect-square bg-gray-900 rounded-lg overflow-hidden group transition-all duration-300'>
                                    <Image
                                        src='/images/cover.png'
                                        alt='CLEATUS Project'
                                        fill
                                        className='object-cover group-hover:scale-105 transition-transform duration-300'
                                    />
                                    <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                                        <span className='text-white font-bold'>CLEATUS</span>
                                    </div>
                                </div>
                            </Link>
                            <Link
                                href='/projects/project2'
                                className='block'
                            >
                                <div className='relative aspect-square bg-gray-900 rounded-lg overflow-hidden group transition-all duration-300'>
                                    <Image
                                        src='/images/collegeathletics.jpeg'
                                        alt='College of Charleston'
                                        fill
                                        className='object-cover group-hover:scale-105 transition-transform duration-300'
                                    />
                                    <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                                        <span className='text-white font-bold'>College of Charleston</span>
                                    </div>
                                </div>
                            </Link>
                            <Link
                                href='/projects/project3'
                                className='block'
                            >
                                <div className='relative aspect-square bg-gray-900 rounded-lg overflow-hidden group transition-all duration-300'>
                                    <Image
                                        src='/images/twitter-header.png'
                                        alt='Social Media Management'
                                        fill
                                        className='object-cover group-hover:scale-105 transition-transform duration-300'
                                    />
                                    <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                                        <span className='text-white font-bold'>Social Media</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </section>

                    {/* Tools/Skills Section */}
                    <section className='bg-blue-600 rounded-xl p-6'>
                        <div className='flex justify-between items-center mb-4'>
                            <h2 className='text-2xl font-mono'>My Tools</h2>
                            <Button
                                variant='ghost'
                                size='icon'
                                className='text-white'
                                asChild
                            >
                                <Link href='/tools'>
                                    <ArrowRight className='w-5 h-5' />
                                    <span className='sr-only'>View all tools</span>
                                </Link>
                            </Button>
                        </div>
                        <div className='flex gap-4 flex-wrap'>
                            <div className='w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2'>
                                <Image
                                    src='/images/Figma.png'
                                    alt='Figma'
                                    width={32}
                                    height={32}
                                    className='object-contain'
                                />
                            </div>
                            <div className='w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2'>
                                <Image
                                    src='/images/Twitter-logo.png'
                                    alt='Twitter'
                                    width={32}
                                    height={32}
                                    className='object-contain'
                                />
                            </div>
                            <div className='w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2'>
                                <Image
                                    src='/images/LinkedIn.png'
                                    alt='LinkedIn'
                                    width={32}
                                    height={32}
                                    className='object-contain'
                                />
                            </div>
                            <div className='w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2'>
                                <Image
                                    src='/images/cursor-logo.jpeg'
                                    alt='Cursor'
                                    width={32}
                                    height={32}
                                    className='object-contain'
                                />
                            </div>
                            <div className='w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2'>
                                <Image
                                    src='/images/semrush.png'
                                    alt='SEMrush'
                                    width={32}
                                    height={32}
                                    className='object-contain'
                                />
                            </div>
                        </div>
                    </section>

                    {/* Contact and Resume Sections */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {/* Contact Section */}
                        <section className='relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6'>
                            <h2 className='text-2xl font-mono mb-4'>Contact</h2>
                            <div className='space-y-3'>
                                <Button
                                    variant='ghost'
                                    className='w-full justify-start gap-3 text-left'
                                    asChild
                                >
                                    <Link href='mailto:hardisterw@g.cofc.edu'>
                                        <Mail className='w-5 h-5' />
                                        <span>Email Me</span>
                                    </Link>
                                </Button>
                                <Button
                                    variant='ghost'
                                    className='w-full justify-start gap-3 text-left'
                                    asChild
                                >
                                    <Link href='tel:+15034905874'>
                                        <Phone className='w-5 h-5' />
                                        <span>Call Me</span>
                                    </Link>
                                </Button>
                            </div>
                        </section>

                        {/* Resume Section */}
                        <section className='bg-gray-900 rounded-xl p-6'>
                            <h3 className='text-2xl font-bold mb-4'>Resume</h3>
                            <p className='text-gray-400 mb-4'>Download my latest resume</p>
                            <Button
                                variant='ghost'
                                className='w-full justify-start gap-3'
                                asChild
                            >
                                <Link
                                    href='/Cole-Resume.pdf'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <FileText className='w-5 h-5' />
                                    <span>View Resume</span>
                                </Link>
                            </Button>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
