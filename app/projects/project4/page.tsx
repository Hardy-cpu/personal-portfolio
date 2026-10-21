import type { Metadata } from 'next'
import Image from 'next/image'
import { SiteShell } from '@/components/site/shell'
import { CaseHero, CaseSection, Cards } from '@/components/site/case-study'

export const metadata: Metadata = {
    title: 'LinkedIn & Agency Analytics Case Study',
    description: 'How I use LinkedIn analytics at CLEATUS and SEMrush, Google Search Console, and GA4 at SearchX to turn performance data into content decisions.',
}

export default function Project4Page() {
    return (
        <SiteShell>
            <CaseHero
                eyebrow='Case study · Analytics & reporting'
                accent='text-[#0a66c2]'
                title='Turning performance data into content decisions.'
                summary='From LinkedIn analytics at CLEATUS to organic search reporting across 30+ clients at SearchX, I use data to decide what to write next and to show what worked.'
                meta={[
                    { label: 'Roles', value: 'CLEATUS · SearchX' },
                    { label: 'Tools', value: 'LinkedIn Analytics, SEMrush, GSC, GA4' },
                    { label: 'LinkedIn period shown', value: 'Oct – Apr' },
                ]}
                stats={[
                    { value: '119,624', label: 'LinkedIn impressions tracked at CLEATUS' },
                    { value: '30+', label: 'SEO clients reported on at SearchX' },
                    { value: '100+', label: 'Content pieces a month, guided by the data' },
                ]}
            />

            <div className='mx-auto max-w-6xl px-6 pb-16'>
                <figure>
                    <div className='relative aspect-[1768/1088] overflow-hidden rounded-3xl border border-neutral-200 bg-white'>
                        <Image
                            src='/images/linkedin-analytics.png'
                            alt='LinkedIn analytics: 119,624 impressions, 830 reactions, 84 comments, 89 reposts, with monthly impressions chart from October to April'
                            fill
                            className='object-contain'
                            sizes='(max-width: 1152px) 100vw, 1152px'
                            priority
                        />
                    </div>
                    <figcaption className='mt-3 text-sm text-neutral-400'>CLEATUS LinkedIn analytics, October through April.</figcaption>
                </figure>
            </div>

            <CaseSection
                label='LinkedIn at CLEATUS'
                title='Measure every post, then double down on what works.'
            >
                <p>
                    At CLEATUS I tracked campaign performance and ran data-driven marketing analysis on every post and article. Impressions, reactions, comments, and reposts
                    showed which topics earned attention from government contractors, and that shaped the next month&rsquo;s editorial calendar.
                </p>
            </CaseSection>

            <CaseSection
                label='Search at SearchX'
                title='Organic data across 30+ clients.'
            >
                <Cards
                    items={[
                        { title: 'Ranking opportunities', body: 'Analyze organic performance in SEMrush, Google Search Console, and GA4 to surface keywords worth chasing.' },
                        { title: 'Content gaps', body: 'Identify the pages and topics each client is missing, then turn them into briefs.' },
                        { title: 'Growth reporting', body: 'Report on month-over-month keyword and traffic growth for clients in home services, healthcare, wellness, real estate, and food & beverage.' },
                        { title: 'Efficiency with AI', body: 'Implement AI tools to speed up my own workflows and the business as a whole.' },
                    ]}
                />
            </CaseSection>
        </SiteShell>
    )
}
