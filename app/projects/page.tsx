import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BackLink, Eyebrow, SiteShell } from '@/components/site/shell'

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Marketing projects by Cole Hardister: CLEATUS, College of Charleston athletics, social media management, and agency analytics.',
}

const PROJECTS = [
    {
        href: '/projects/project1',
        tag: 'Marketing & Communications',
        title: 'CLEATUS',
        body: 'Head of Marketing & Communications. Grew LinkedIn from zero to 3,000+ followers with 70 articles and posts.',
    },
    {
        href: '/projects/project2',
        tag: 'Sports marketing',
        title: 'College of Charleston Athletics',
        body: 'Matchday campaigns, sponsorships, and storytelling for Men\'s Soccer, Baseball, and Basketball.',
    },
    {
        href: '/projects/project4',
        tag: 'Analytics & reporting',
        title: 'LinkedIn & Agency Analytics',
        body: 'LinkedIn performance and SEO reporting across CLEATUS and 30+ SearchX clients.',
    },
    {
        href: '/projects/project3',
        tag: 'Social media',
        title: 'Social Media Management',
        body: 'Building brand presence across platforms with strategic content.',
    },
]

export default function ProjectsPage() {
    return (
        <SiteShell>
            <div className='mx-auto max-w-6xl px-6 py-16'>
                <BackLink />
                <h1 className='mt-10 font-display text-5xl tracking-tight md:text-6xl'>Projects</h1>
                <ul className='mt-12 divide-y divide-neutral-200 border-y border-neutral-200'>
                    {PROJECTS.map((p) => (
                        <li key={p.href}>
                            <Link
                                href={p.href}
                                className='group grid items-center gap-2 py-8 md:grid-cols-[1fr_2fr_auto] md:gap-8'
                            >
                                <div>
                                    <Eyebrow className='text-neutral-400'>{p.tag}</Eyebrow>
                                    <h2 className='mt-2 font-display text-3xl'>{p.title}</h2>
                                </div>
                                <p className='text-neutral-600'>{p.body}</p>
                                <ArrowRight className='hidden h-5 w-5 transition-transform group-hover:translate-x-1 md:block' />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </SiteShell>
    )
}
