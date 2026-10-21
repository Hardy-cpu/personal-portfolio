import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { CONTACT, Eyebrow, SiteShell, Stat } from '@/components/site/shell'
import { AnalyticsThumb } from '@/components/site/analytics-thumb'

const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Cole Hardister',
    jobTitle: 'SEO & Content Manager',
    description: 'SEO and content marketer. Former Head of Marketing and Communications at CLEATUS, where LinkedIn grew from zero to 3,000+ followers.',
    url: 'https://colehardister.com',
    image: 'https://colehardister.com/images/cole-profile.JPEG',
    email: CONTACT.email,
    telephone: '+15034905874',
    worksFor: {
        '@type': 'Organization',
        name: 'SearchX',
    },
    alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'College of Charleston',
    },
    knowsAbout: ['SEO', 'Content Strategy', 'LinkedIn Growth', 'B2B Marketing', 'Sports Marketing', 'Analytics', 'Go-to-Market Strategy'],
    hasOccupation: {
        '@type': 'Occupation',
        name: 'SEO & Content Manager',
        description: 'Manages SEO strategy and content production for 30+ clients, with a background in B2B startup marketing and sports marketing',
    },
    sameAs: [CONTACT.linkedin, 'https://twitter.com/colehardister'],
}

export default function Portfolio() {
    return (
        <SiteShell>
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            {/* Hero */}
            <section className='mx-auto max-w-6xl px-6 pb-20 pt-20 md:pt-28'>
                <div className='flex items-center gap-4'>
                    <Image
                        src='/images/cole-profile.JPEG'
                        alt='Cole Hardister'
                        width={56}
                        height={56}
                        className='h-14 w-14 rounded-full object-cover'
                        priority
                    />
                    <Eyebrow className='text-neutral-500'>Digital marketing &middot; SEO &middot; Sports marketing</Eyebrow>
                </div>
                <h1 className='mt-8 max-w-4xl font-display text-5xl leading-[1.05] tracking-tight md:text-7xl'>
                    Digital marketer and SEO specialist with a <em className='text-[#243665]'>sports marketing</em> edge.
                </h1>
                <p className='mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600'>
                    I&rsquo;m Cole Hardister. At SearchX I manage SEO and content for 30+ clients. As Head of Marketing and Communications at CLEATUS, I grew LinkedIn from zero to
                    3,000+ followers. Before that, I ran campaigns and matchday marketing for Division I athletics at the College of Charleston.
                </p>
                <div className='mt-10 flex flex-wrap items-center gap-3'>
                    <Link
                        href='/projects/project1'
                        className='inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700'
                    >
                        See my CLEATUS work <ArrowRight className='h-4 w-4' />
                    </Link>
                    <Link
                        href={CONTACT.resume}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium transition-colors hover:border-neutral-900'
                    >
                        Résumé <ArrowUpRight className='h-4 w-4' />
                    </Link>
                </div>
            </section>

            {/* Results strip */}
            <section className='border-y border-neutral-200 bg-white'>
                <div className='mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 py-14 md:grid-cols-4'>
                    <Stat
                        value='3,000+'
                        label='LinkedIn followers at CLEATUS, from zero'
                    />
                    <Stat
                        value='120K'
                        label='Organic impressions in under a year'
                    />
                    <Stat
                        value='70'
                        label='Articles and posts written for CLEATUS'
                    />
                    <Stat
                        value='30+'
                        label='SEO clients managed at SearchX'
                    />
                </div>
            </section>

            {/* Work */}
            <section
                id='work'
                className='mx-auto max-w-6xl scroll-mt-20 px-6 py-24'
            >
                <Eyebrow className='text-neutral-500'>Selected work</Eyebrow>
                <h2 className='mt-3 font-display text-4xl tracking-tight md:text-5xl'>Three projects that show how I work.</h2>

                {/* Featured: CLEATUS */}
                <Link
                    href='/projects/project1'
                    className='group mt-12 grid overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-shadow hover:shadow-xl hover:shadow-neutral-900/5 md:grid-cols-[1fr_1.15fr]'
                >
                    <div className='flex flex-col justify-between p-8 md:p-12'>
                        <div>
                            <Eyebrow className='text-[#243665]'>Featured &middot; Marketing &amp; Communications</Eyebrow>
                            <h3 className='mt-4 font-display text-4xl tracking-tight md:text-5xl'>CLEATUS</h3>
                            <p className='mt-4 leading-relaxed text-neutral-600'>
                                An AI platform for government contracting had almost no marketing presence. I built a LinkedIn content engine that became a reliable customer
                                acquisition channel.
                            </p>
                        </div>
                        <div className='mt-10 flex items-end justify-between gap-6'>
                            <div className='flex gap-8'>
                                <div>
                                    <p className='font-display text-3xl'>3,000+</p>
                                    <p className='text-xs text-neutral-500'>followers</p>
                                </div>
                                <div>
                                    <p className='font-display text-3xl'>70</p>
                                    <p className='text-xs text-neutral-500'>pieces of content</p>
                                </div>
                            </div>
                            <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white transition-transform group-hover:translate-x-1'>
                                <ArrowRight className='h-5 w-5' />
                            </span>
                        </div>
                    </div>
                    <div className='relative min-h-[260px] border-t border-neutral-200 bg-white md:border-l md:border-t-0'>
                        <Image
                            src='/images/cover.png'
                            alt='CLEATUS: Find. Bid. Win! Government contracts with AI'
                            fill
                            className='object-cover transition-transform duration-500 group-hover:scale-[1.03]'
                            sizes='(max-width: 768px) 100vw, 600px'
                        />
                    </div>
                </Link>

                <div className='mt-6 grid gap-6 md:grid-cols-2'>
                    <Link
                        href='/projects/project2'
                        className='group overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-shadow hover:shadow-xl hover:shadow-neutral-900/5'
                    >
                        <div className='grid aspect-[16/9] grid-cols-2 overflow-hidden border-b border-neutral-200'>
                            <div className='relative overflow-hidden'>
                                <Image
                                    src='/images/collegeathletics.jpeg'
                                    alt='College of Charleston Cougars logo'
                                    fill
                                    className='object-cover transition-transform duration-500 group-hover:scale-[1.03]'
                                    sizes='(max-width: 768px) 50vw, 280px'
                                />
                            </div>
                            <div className='relative overflow-hidden'>
                                <Image
                                    src='/images/cofc-soccer.jpeg'
                                    alt='College of Charleston men&rsquo;s soccer stadium on match night'
                                    fill
                                    className='object-cover transition-transform duration-500 group-hover:scale-[1.03]'
                                    sizes='(max-width: 768px) 50vw, 280px'
                                />
                            </div>
                        </div>
                        <div className='p-8'>
                            <Eyebrow className='text-[#7a1f2b]'>Sports marketing</Eyebrow>
                            <h3 className='mt-3 font-display text-3xl tracking-tight'>College of Charleston Athletics</h3>
                            <p className='mt-3 text-sm leading-relaxed text-neutral-600'>Campaigns, matchday events, and sponsorship fulfillment for Men&rsquo;s Soccer, Baseball, and Basketball.</p>
                            <p className='mt-6 inline-flex items-center gap-1 text-sm font-medium'>
                                Learn more <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                            </p>
                        </div>
                    </Link>

                    <Link
                        href='/projects/project4'
                        className='group overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-shadow hover:shadow-xl hover:shadow-neutral-900/5'
                    >
                        <AnalyticsThumb />
                        <div className='p-8'>
                            <Eyebrow className='text-[#0a66c2]'>Analytics &amp; reporting</Eyebrow>
                            <h3 className='mt-3 font-display text-3xl tracking-tight'>LinkedIn &amp; Agency Analytics</h3>
                            <p className='mt-3 text-sm leading-relaxed text-neutral-600'>Turning LinkedIn and organic search data into content decisions, across CLEATUS and 30+ SearchX clients.</p>
                            <p className='mt-6 inline-flex items-center gap-1 text-sm font-medium'>
                                Learn more <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                            </p>
                        </div>
                    </Link>
                </div>

                <p className='mt-8 text-sm text-neutral-500'>
                    Also:{' '}
                    <Link
                        href='/projects/project3'
                        className='font-medium text-neutral-900 underline underline-offset-4'
                    >
                        Social media management
                    </Link>
                    {' · '}
                    <Link
                        href='/tools'
                        className='font-medium text-neutral-900 underline underline-offset-4'
                    >
                        Tools &amp; workflow
                    </Link>
                </p>
            </section>
        </SiteShell>
    )
}
