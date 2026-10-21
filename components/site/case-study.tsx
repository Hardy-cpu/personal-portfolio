import { BackLink, Eyebrow, Stat } from '@/components/site/shell'

export function CaseHero({
    eyebrow,
    accent,
    title,
    summary,
    meta,
    stats,
}: {
    eyebrow: string
    accent: string
    title: string
    summary: string
    meta: { label: string; value: string }[]
    stats: { value: string; label: string }[]
}) {
    return (
        <section className='mx-auto max-w-6xl px-6 pb-16 pt-12 md:pt-16'>
            <BackLink />
            <Eyebrow className={`mt-10 ${accent}`}>{eyebrow}</Eyebrow>
            <h1 className='mt-4 max-w-4xl font-display text-5xl leading-[1.05] tracking-tight md:text-7xl'>{title}</h1>
            <p className='mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600'>{summary}</p>
            <dl className='mt-10 flex flex-wrap gap-x-12 gap-y-4 text-sm'>
                {meta.map((m) => (
                    <div key={m.label}>
                        <dt className='text-neutral-400'>{m.label}</dt>
                        <dd className='mt-1 font-medium'>{m.value}</dd>
                    </div>
                ))}
            </dl>
            <div className='mt-14 grid grid-cols-2 gap-10 border-t border-neutral-200 pt-10 md:grid-cols-4'>
                {stats.map((s) => (
                    <Stat
                        key={s.label}
                        {...s}
                    />
                ))}
            </div>
        </section>
    )
}

export function CaseSection({ label, title, children, wide = false }: { label: string; title?: string; children: React.ReactNode; wide?: boolean }) {
    return (
        <section className='border-t border-neutral-200'>
            <div className={`mx-auto grid max-w-6xl gap-8 px-6 py-16 md:py-20 ${wide ? '' : 'md:grid-cols-[1fr_2.2fr]'}`}>
                <Eyebrow className='pt-2 text-neutral-400'>{label}</Eyebrow>
                <div>
                    {title && <h2 className='mb-6 max-w-2xl font-display text-3xl leading-tight tracking-tight md:text-4xl'>{title}</h2>}
                    <div className={`space-y-5 text-[17px] leading-relaxed text-neutral-600 ${wide ? '' : 'max-w-2xl'}`}>{children}</div>
                </div>
            </div>
        </section>
    )
}

export function Cards({ items, cols = 2 }: { items: { title: string; body: string }[]; cols?: 2 | 3 }) {
    return (
        <div className={`!mt-8 grid max-w-none gap-4 ${cols === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
            {items.map((item) => (
                <div
                    key={item.title}
                    className='rounded-2xl border border-neutral-200 bg-white p-6'
                >
                    <h3 className='font-semibold text-neutral-900'>{item.title}</h3>
                    <p className='mt-2 text-[15px] leading-relaxed text-neutral-600'>{item.body}</p>
                </div>
            ))}
        </div>
    )
}
