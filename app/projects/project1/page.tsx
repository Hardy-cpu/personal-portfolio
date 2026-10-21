import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, FileText } from 'lucide-react'
import { SiteShell } from '@/components/site/shell'
import { CaseHero, CaseSection, Cards } from '@/components/site/case-study'
import { ARTICLES, COMMUNITY_POSTS, CONTENT_COUNTS, PRODUCT_POSTS, PROOF_POSTS, findArticle, type ContentItem } from '@/lib/cleatus-content'

export const metadata: Metadata = {
    title: 'CLEATUS: LinkedIn Growth Case Study',
    description: 'How I grew CLEATUS on LinkedIn from zero to 3,000+ followers and nearly 120K impressions, creating a reliable customer acquisition channel.',
}

const FEATURED_ARTICLES = [
    {
        src: '/images/article-1.png',
        ...findArticle('Agentic AI is the future for GovCon Business Owners'),
        title: 'Agentic AI in Government Contracting: How Small Businesses Can Compete with Industry Giants in 2025',
    },
    { src: '/images/article-2.png', ...findArticle('Federal Acquisition Regulation'), title: 'Federal Acquisition Reform: A New Era for Small Business Contractors' },
    { src: '/images/article-3.png', ...findArticle('Understanding DRP'), title: 'Understanding the Federal Deferred Resignation Program for GovCon Business Owners' },
    { src: '/images/article-4.png', ...findArticle('8(a) Certifications'), title: 'Navigating SBA 8(a) Recertification Changes: Compliance and Growth Strategies' },
    { src: '/images/article-5.png', ...findArticle('Federal Contract Analysis'), title: 'Revolutionizing Federal Contract Analysis for Small Businesses: Making UCF Work Smarter' },
]

const TOOLS = [
    { name: 'Cursor', href: 'https://www.cursor.com/', use: 'A repository of written content and visuals' },
    { name: 'Perplexity', href: 'https://www.perplexity.ai/', use: 'Industry research with full sourcing' },
    { name: 'v0', href: 'https://v0.dev/', use: 'Mock-ups, infographics, and dynamic charts' },
    { name: 'Figma', href: 'https://www.figma.com/', use: 'Ads, thumbnails, logo iterations, brand visuals' },
    { name: 'GitHub', href: 'https://github.com/', use: 'Codebase management and website content updates' },
]

export default function Project1Page() {
    return (
        <SiteShell>
            <CaseHero
                eyebrow='Case study · Marketing & Communications'
                accent='text-[#243665]'
                title='Building CLEATUS a LinkedIn growth engine.'
                summary='CLEATUS is an AI-powered platform that streamlines government contracting, from bid to award. As Head of Marketing and Communications, I led content and brand to turn LinkedIn into a dependable source of new customers.'
                meta={[
                    { label: 'Company', value: 'CLEATUS' },
                    { label: 'Role', value: 'Head of Marketing & Communications' },
                    { label: 'Channel', value: 'LinkedIn' },
                    { label: 'Tenure', value: 'Aug 2024 – 2025' },
                ]}
                stats={[
                    { value: '3,000+', label: 'New LinkedIn followers, from zero' },
                    { value: '~120K', label: 'Impressions across content' },
                    { value: `${CONTENT_COUNTS.articles}`, label: 'Articles written' },
                    { value: `${CONTENT_COUNTS.posts}`, label: 'LinkedIn posts written' },
                ]}
            />

            <div className='mx-auto max-w-6xl px-6 pb-16'>
                <div className='relative aspect-[1.91/1] overflow-hidden rounded-3xl border border-neutral-200 bg-white'>
                    <Image
                        src='/images/cover.png'
                        alt='CLEATUS: Find. Bid. Win! Government contracts with AI'
                        fill
                        className='object-cover'
                        sizes='(max-width: 1152px) 100vw, 1152px'
                        priority
                    />
                </div>
            </div>

            <CaseSection
                label='The challenge'
                title='Little brand presence, and one channel for leads.'
            >
                <p>
                    CLEATUS had little to no marketing presence and relied primarily on targeted Google Ads to generate leads. They needed a strong brand and a reliable channel
                    for acquiring new customers.
                </p>
            </CaseSection>

            <CaseSection
                label='The approach'
                title='Meet government contractors where they already read.'
            >
                <p>
                    After industry-specific research into the target audience, media trends, and market trends, we concluded that LinkedIn was the best place to publish
                    valuable content, post feature updates, and connect with potential customers.
                </p>
                <Cards
                    items={[
                        { title: 'Content strategy', body: 'Developed topic ideas for both long-form and short-form content.' },
                        { title: 'Creation & editing', body: 'Created and edited the articles, posts, and visuals.' },
                        { title: 'Messaging & identity', body: 'Sharpened company messaging and strengthened the CLEATUS brand identity.' },
                        { title: 'Long-term goals', body: 'Worked with the CLEATUS team to set goals that go beyond the next post.' },
                    ]}
                />
            </CaseSection>

            <CaseSection
                label='Articles'
                title='Timely, useful articles for small-business contractors.'
                wide
            >
                <p className='max-w-2xl'>
                    {CONTENT_COUNTS.articles} long-form articles published on the CLEATUS LinkedIn page, each focused on a development small-business contractors need to
                    understand. A few favorites are below, and every article links to the live post.
                </p>
                <div className='!mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                    {FEATURED_ARTICLES.map((a) => (
                        <Link
                            key={a.src}
                            href={a.href}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-shadow hover:shadow-xl hover:shadow-neutral-900/5'
                        >
                            <div className='relative aspect-[4/3] overflow-hidden border-b border-neutral-200 bg-neutral-50'>
                                <Image
                                    src={a.src}
                                    alt={a.title}
                                    fill
                                    className='object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]'
                                    sizes='(max-width: 640px) 100vw, 360px'
                                />
                            </div>
                            <div className='p-4'>
                                <p className='text-sm font-medium leading-snug text-neutral-900'>{a.title}</p>
                                <p className='mt-2 flex items-center justify-between text-xs text-neutral-400'>
                                    {a.date} <ArrowUpRight className='h-4 w-4 opacity-50 transition-opacity group-hover:opacity-100' />
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
                <details className='group !mt-8 rounded-2xl border border-neutral-200 bg-white'>
                    <summary className='flex cursor-pointer list-none items-center justify-between p-5 text-sm font-medium text-neutral-900'>
                        All {CONTENT_COUNTS.articles} articles
                        <span className='text-neutral-400 transition-transform group-open:rotate-45'>+</span>
                    </summary>
                    <LinkList
                        items={ARTICLES}
                        className='border-t border-neutral-200 px-5 pb-2 md:columns-2 md:gap-10'
                    />
                </details>
            </CaseSection>

            <CaseSection
                label='Short-form & more'
                title='Posts built for the feed: proof, community, and perspective.'
                wide
            >
                <p className='max-w-2xl'>
                    Beyond articles, I wrote {CONTENT_COUNTS.posts} LinkedIn posts that mix customer proof, product launches, and community moments, so the page felt like a
                    company worth following, not just a feed of announcements.
                </p>
                <div className='!mt-8 grid gap-5 md:grid-cols-2'>
                    <ContentGroup
                        title='Customer proof'
                        blurb='Testimonials and partner spotlights.'
                        items={PROOF_POSTS}
                    />
                    <ContentGroup
                        title='Perspective & community'
                        blurb='Guides, offers, and moments with the GovCon community.'
                        items={COMMUNITY_POSTS}
                    />
                </div>
            </CaseSection>

            <CaseSection
                label='Product & demo'
                title='Showing the product in action.'
                wide
            >
                <p className='max-w-2xl'>
                    Feature launches, walkthroughs, and product-marketing posts that explained what CLEATUS does and why it matters to a contractor racing a deadline.
                </p>
                <div className='!mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
                    {PRODUCT_POSTS.map((p) => (
                        <ProductCard
                            key={p.href + p.title}
                            item={p}
                        />
                    ))}
                </div>
            </CaseSection>

            <CaseSection
                label='The stack'
                title='AI-assisted workflow, so a small team ships more.'
            >
                <ul className='!mt-2 divide-y divide-neutral-200 border-y border-neutral-200'>
                    {TOOLS.map((t) => (
                        <li
                            key={t.name}
                            className='flex items-baseline justify-between gap-6 py-4'
                        >
                            <Link
                                href={t.href}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='font-medium text-neutral-900 underline-offset-4 hover:underline'
                            >
                                {t.name}
                            </Link>
                            <span className='text-right text-[15px]'>{t.use}</span>
                        </li>
                    ))}
                </ul>
            </CaseSection>

            <CaseSection
                label='The results'
                title='A reliable channel for new customers.'
            >
                <p>Between October 2024 and May 2025, the CLEATUS LinkedIn campaign produced significant gains in brand visibility and engagement:</p>
                <ul className='list-disc space-y-2 pl-5 marker:text-neutral-300'>
                    <li>
                        <strong className='text-neutral-900'>3,000+</strong> new LinkedIn followers, starting from zero.
                    </li>
                    <li>
                        Thousands in <strong className='text-neutral-900'>MRR</strong> driven through LinkedIn engagement.
                    </li>
                    <li>
                        Nearly <strong className='text-neutral-900'>120,000</strong> impressions across content.
                    </li>
                    <li>
                        <strong className='text-neutral-900'>{CONTENT_COUNTS.articles + CONTENT_COUNTS.posts} pieces</strong> of content published: {CONTENT_COUNTS.articles} articles and {CONTENT_COUNTS.posts} posts.
                    </li>
                    <li>A reliable channel for new customer acquisition, where there had been none.</li>
                </ul>
                <Link
                    href='/CLEATUS-InsightsReport.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='!mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700'
                >
                    <FileText className='h-4 w-4' /> Read the CLEATUS Insights Report <ArrowUpRight className='h-4 w-4' />
                </Link>
            </CaseSection>
        </SiteShell>
    )
}

function LinkList({ items, className = '' }: { items: ContentItem[]; className?: string }) {
    return (
        <ul className={className}>
            {items.map((item) => (
                <li
                    key={item.href + item.title}
                    className='break-inside-avoid'
                >
                    <Link
                        href={item.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group flex items-baseline justify-between gap-4 border-b border-neutral-100 py-3 text-[15px] text-neutral-900 transition-colors hover:text-[#243665]'
                    >
                        <span className='underline-offset-4 group-hover:underline'>{item.title}</span>
                        <span className='shrink-0 text-xs text-neutral-400'>{item.date}</span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

function ContentGroup({ title, blurb, items }: { title: string; blurb: string; items: ContentItem[] }) {
    return (
        <div className='rounded-2xl border border-neutral-200 bg-white p-6'>
            <div className='flex items-baseline justify-between'>
                <h3 className='font-semibold text-neutral-900'>{title}</h3>
                <span className='text-xs text-neutral-400'>{items.length} posts</span>
            </div>
            <p className='mt-1 text-sm text-neutral-500'>{blurb}</p>
            <LinkList
                items={items}
                className='mt-4'
            />
        </div>
    )
}

function ProductCard({ item }: { item: ContentItem }) {
    if (item.embed) {
        return (
            <div className='overflow-hidden rounded-2xl border border-neutral-200 bg-white'>
                <div className='aspect-video'>
                    <iframe
                        src={item.embed}
                        title={item.title}
                        className='h-full w-full'
                        allow='fullscreen; picture-in-picture'
                        loading='lazy'
                    />
                </div>
                <div className='p-4'>
                    <p className='text-sm font-medium text-neutral-900'>{item.title}</p>
                    <p className='mt-1 text-xs text-neutral-400'>{item.date}</p>
                </div>
            </div>
        )
    }
    return (
        <Link
            href={item.href}
            target='_blank'
            rel='noopener noreferrer'
            className='group flex items-center justify-between gap-4 rounded-2xl border border-neutral-200 bg-white p-5 transition-shadow hover:shadow-xl hover:shadow-neutral-900/5'
        >
            <div>
                <p className='text-sm font-medium text-neutral-900'>{item.title}</p>
                <p className='mt-1 text-xs text-neutral-400'>{item.date}</p>
            </div>
            <ArrowUpRight className='h-4 w-4 shrink-0 text-neutral-400 transition-colors group-hover:text-neutral-900' />
        </Link>
    )
}
