import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteShell } from '@/components/site/shell'
import { CaseHero, CaseSection } from '@/components/site/case-study'
import { FOOTBALL_HANDLE, FOOTBALL_POSTS, FOOTBALL_URL } from '@/lib/football-content'

export const metadata: Metadata = {
    title: `Football Writing on X (@${FOOTBALL_HANDLE})`,
    description: 'Creative writing and football analysis on European football and Manchester United, published on X as @HardyFootball.',
}

export default function Project3Page() {
    return (
        <SiteShell>
            <CaseHero
                eyebrow='Beyond work · Football writing'
                accent='text-[#c8102e]'
                title='Writing about the game I love.'
                summary='Outside of work, I write about European football and Manchester United on X as a creative writer and football analyst. It is where I practice voice, speed, and building an audience around a topic I care about.'
                meta={[
                    { label: 'Account', value: `@${FOOTBALL_HANDLE}` },
                    { label: 'Platform', value: 'X (Twitter)' },
                    { label: 'Focus', value: 'European football, Manchester United' },
                ]}
                stats={[{ value: '959', label: 'Posts on X' }]}
            />

            <div className='mx-auto max-w-6xl px-6 pb-16'>
                <div className='relative aspect-[16/5] overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100'>
                    <Image
                        src='/images/hardyfootball-banner.png'
                        alt='The @HardyFootball profile banner on X'
                        fill
                        className='object-cover'
                        sizes='(max-width: 1152px) 100vw, 1152px'
                        priority
                    />
                </div>
                <Link
                    href={FOOTBALL_URL}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700'
                >
                    Follow @{FOOTBALL_HANDLE} on X <ArrowUpRight className='h-4 w-4' />
                </Link>
            </div>

            <CaseSection
                label='The account'
                title='Creative writer, football analyst, die-hard United fan.'
            >
                <p>
                    @{FOOTBALL_HANDLE} is my home for football takes, analysis, and writing, with a lot of Manchester United along the way. Writing for a real audience keeps my
                    voice sharp and shows me what people respond to, which carries over into my professional content work.
                </p>
            </CaseSection>

            {FOOTBALL_POSTS.length > 0 && (
                <CaseSection
                    label='Selected posts'
                    title='A few I’m proud of.'
                    wide
                >
                    <ul className='grid gap-3 sm:grid-cols-2'>
                        {FOOTBALL_POSTS.map((post) => (
                            <li key={post.href}>
                                <Link
                                    href={post.href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='group flex h-full items-start justify-between gap-4 rounded-2xl border border-neutral-200 bg-white p-5 transition-shadow hover:shadow-xl hover:shadow-neutral-900/5'
                                >
                                    <div>
                                        <p className='font-medium text-neutral-900'>{post.title}</p>
                                        {post.note && <p className='mt-1 text-sm text-neutral-500'>{post.note}</p>}
                                        <p className='mt-2 text-xs text-neutral-400'>{post.date}</p>
                                    </div>
                                    <ArrowUpRight className='h-4 w-4 shrink-0 text-neutral-400 transition-colors group-hover:text-neutral-900' />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </CaseSection>
            )}
        </SiteShell>
    )
}
