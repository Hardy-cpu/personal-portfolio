import Image from 'next/image'
import { Rotator } from '@/components/site/rotator'

const SEARCHX_TOOLS = [
    { name: 'SEMrush', src: '/images/semrush.png' },
    { name: 'GSC' },
    { name: 'GA4' },
]

function Chip({ children }: { children: React.ReactNode }) {
    return <span className='flex h-9 items-center rounded-lg border border-neutral-200 bg-white px-2.5 text-xs font-semibold text-neutral-600'>{children}</span>
}

function LinkedInSlide() {
    return (
        <div className='flex h-full flex-col justify-between bg-gradient-to-br from-[#eaf2fb] to-[#f7f9fc] p-6 pb-9'>
            <span className='flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white p-1.5'>
                <Image
                    src='/images/LinkedIn.png'
                    alt=''
                    width={24}
                    height={24}
                    className='h-full w-full object-contain'
                />
            </span>
            <div>
                <p className='font-display text-6xl leading-none tracking-tight text-[#0a66c2]'>~120K</p>
                <p className='mt-2 text-sm text-neutral-600'>LinkedIn impressions at CLEATUS</p>
            </div>
        </div>
    )
}

function SearchXSlide() {
    return (
        <div className='flex h-full flex-col justify-between bg-gradient-to-br from-[#fff1ea] to-[#fafaf7] p-6 pb-9'>
            <div className='flex items-center justify-between gap-3'>
                <Image
                    src='/images/searchx.png'
                    alt='SearchX'
                    width={720}
                    height={218}
                    className='h-9 w-auto'
                />
                <div className='flex items-center gap-2'>
                    {SEARCHX_TOOLS.map((t) =>
                        t.src ? (
                            <span
                                key={t.name}
                                className='flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white p-1.5'
                            >
                                <Image
                                    src={t.src}
                                    alt=''
                                    width={24}
                                    height={24}
                                    className='h-full w-full object-contain'
                                />
                            </span>
                        ) : (
                            <Chip key={t.name}>{t.name}</Chip>
                        )
                    )}
                </div>
            </div>
            <div>
                <p className='font-display text-6xl leading-none tracking-tight text-[#e8541e]'>30+</p>
                <p className='mt-2 text-sm text-neutral-600'>SEO and content clients, reported month over month</p>
            </div>
        </div>
    )
}

export function AnalyticsThumb() {
    return (
        <Rotator
            label='LinkedIn and SearchX analytics'
            className='relative aspect-[16/9] border-b border-neutral-200'
            interval={5500}
            slides={[<LinkedInSlide key='li' />, <SearchXSlide key='sx' />]}
        />
    )
}
