import type { Metadata } from 'next'
import Image from 'next/image'
import { SiteShell } from '@/components/site/shell'
import { CaseHero, CaseSection, Cards } from '@/components/site/case-study'

export const metadata: Metadata = {
    title: 'College of Charleston Sports Marketing Case Study',
    description:
        'Sports marketing intern for College of Charleston Athletics: multi-channel campaigns, matchday events, sponsorship fulfillment, and fan storytelling for Men’s Soccer, Baseball, and Basketball.',
}

export default function Project2Page() {
    return (
        <SiteShell>
            <CaseHero
                eyebrow='Case study · Sports marketing'
                accent='text-[#7a1f2b]'
                title='Bringing more fans to Cougar athletics.'
                summary='As a Sports Marketing Intern for Fan Experience and Event Marketing at the College of Charleston, I helped fill the stands and tell the stories of Division I student-athletes, with a view from the inside as a former player.'
                meta={[
                    { label: 'Client', value: 'College of Charleston Athletic Department' },
                    { label: 'Role', value: 'Sports Marketing Intern, Fan Experience & Events' },
                    { label: 'Period', value: 'Aug 2024 – 2025' },
                ]}
                stats={[
                    { value: '3', label: 'Programs: Men’s Soccer, Baseball, Basketball' },
                    { value: 'D-I', label: 'Former Men’s Soccer student-athlete (2023–24)' },
                ]}
            />

            <div className='mx-auto max-w-6xl px-6 pb-16'>
                <div className='grid gap-4 md:grid-cols-[3fr_2fr]'>
                    <div className='relative aspect-[4/3] overflow-hidden rounded-3xl border border-neutral-200 md:aspect-auto md:min-h-[420px]'>
                        <Image
                            src='/images/collegeathletics.jpeg'
                            alt='College of Charleston Cougars logo'
                            fill
                            className='object-cover'
                            sizes='(max-width: 768px) 100vw, 690px'
                            priority
                        />
                    </div>
                    <div className='relative aspect-[4/3] overflow-hidden rounded-3xl border border-neutral-200 md:aspect-auto'>
                        <Image
                            src='/images/cofc-soccer.jpeg'
                            alt='College of Charleston men’s soccer stadium on match night'
                            fill
                            className='object-cover'
                            sizes='(max-width: 768px) 100vw, 460px'
                        />
                    </div>
                </div>
            </div>

            <CaseSection
                label='The challenge'
                title='Give fans more reasons to show up.'
            >
                <p>
                    College athletics compete for attention with everything else on campus and in Charleston. The goal was to increase fan engagement and build stronger community
                    connections for Cougar athletics, from the first post to the last whistle.
                </p>
            </CaseSection>

            <CaseSection
                label='The approach'
                title='Four pillars, one consistent brand.'
            >
                <Cards
                    items={[
                        { title: 'Multi-channel campaigns', body: 'Executed campaigns for Men’s Soccer, Baseball, and Basketball across digital and in-venue channels.' },
                        { title: 'Matchday events', body: 'Managed promotional events and sponsorship fulfillment so partner deliverables were met on matchdays.' },
                        { title: 'Performance tracking', body: 'Used analytics to track campaign performance and attendance metrics.' },
                        { title: 'Fan storytelling', body: 'Led initiatives connecting fans with student-athletes to build community and loyalty.' },
                    ]}
                />
            </CaseSection>

            <CaseSection
                label='The edge'
                title='I’ve been on both sides of the fence.'
            >
                <p>
                    Before moving into the marketing office, I played Division I Men’s Soccer at the College of Charleston as a preferred walk-on (2023–24). That perspective shaped
                    how I approached matchday experience and athlete storytelling: I knew what the players wanted fans to feel, and what fans needed to feel welcome.
                </p>
            </CaseSection>
        </SiteShell>
    )
}
