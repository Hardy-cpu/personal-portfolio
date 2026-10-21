import Image from 'next/image'

const TOOLS = [
    { name: 'LinkedIn', src: '/images/LinkedIn.png' },
    { name: 'SEMrush', src: '/images/semrush.png' },
]

const SEARCH_TOOLS = ['GSC', 'GA4']

export function AnalyticsThumb() {
    return (
        <div className='relative flex aspect-[16/9] flex-col justify-between overflow-hidden border-b border-neutral-200 bg-gradient-to-br from-[#eaf2fb] to-[#f7f9fc] p-6'>
            <div className='flex items-center gap-2'>
                {TOOLS.map((t) => (
                    <span
                        key={t.name}
                        className='flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white p-1.5'
                    >
                        <Image
                            src={t.src}
                            alt={t.name}
                            width={24}
                            height={24}
                            className='h-full w-full object-contain'
                        />
                    </span>
                ))}
                {SEARCH_TOOLS.map((t) => (
                    <span
                        key={t}
                        className='flex h-9 items-center rounded-lg border border-neutral-200 bg-white px-2.5 text-xs font-semibold text-neutral-600'
                    >
                        {t}
                    </span>
                ))}
            </div>
            <div>
                <p className='font-display text-6xl leading-none tracking-tight text-[#0a66c2] origin-left transition-transform duration-500 group-hover:scale-[1.03]'>119,624</p>
                <p className='mt-2 text-sm text-neutral-600'>LinkedIn impressions, tracked and reported</p>
            </div>
        </div>
    )
}
