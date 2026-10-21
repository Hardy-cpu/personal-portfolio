import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const CONTACT = {
    email: 'Chardister7@gmail.com',
    phone: '+1 (503) 490-5874',
    phoneHref: 'tel:+15034905874',
    linkedin: 'https://linkedin.com/in/colehardister',
    resume: '/Cole-Resume.pdf',
}

const NAV = [
    { label: 'Work', href: '/#work' },
    { label: 'Résumé', href: CONTACT.resume, external: true },
]

export function SiteShell({ children }: { children: React.ReactNode }) {
    return (
        <div className='min-h-screen bg-[#fafaf7] font-ui text-neutral-900 antialiased selection:bg-neutral-900 selection:text-white'>
            <header className='sticky top-0 z-30 border-b border-neutral-200/70 bg-[#fafaf7]/85 backdrop-blur'>
                <div className='mx-auto flex h-16 max-w-6xl items-center justify-between px-6'>
                    <Link
                        href='/'
                        className='text-[15px] font-semibold tracking-tight'
                    >
                        Cole Hardister
                    </Link>
                    <nav className='flex items-center gap-6 text-sm text-neutral-600'>
                        {NAV.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                className='transition-colors hover:text-neutral-900'
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href={`mailto:${CONTACT.email}`}
                            className='hidden rounded-full bg-neutral-900 px-4 py-2 font-medium text-white transition-colors hover:bg-neutral-700 sm:inline-block'
                        >
                            Get in touch
                        </Link>
                    </nav>
                </div>
            </header>
            <main>{children}</main>
            <footer
                id='contact'
                className='border-t border-neutral-200 bg-white'
            >
                <div className='mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr]'>
                    <div>
                        <p className='font-display text-4xl leading-tight md:text-5xl'>Let&rsquo;s work together.</p>
                        <p className='mt-4 max-w-md text-neutral-600'>
                            Open to marketing, content, SEO, and sports roles, especially in soccer and tech. The fastest way to reach me is email.
                        </p>
                    </div>
                    <ul className='space-y-3 text-sm'>
                        {[
                            { label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
                            { label: 'Phone', value: CONTACT.phone, href: CONTACT.phoneHref },
                            { label: 'LinkedIn', value: 'linkedin.com/in/colehardister', href: CONTACT.linkedin },
                            { label: 'Résumé', value: 'Download PDF', href: CONTACT.resume },
                        ].map((row) => (
                            <li key={row.label}>
                                <Link
                                    href={row.href}
                                    {...(row.href.startsWith('http') || row.href.endsWith('.pdf') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                    className='group flex items-center justify-between border-b border-neutral-200 pb-3 transition-colors hover:border-neutral-900'
                                >
                                    <span className='text-neutral-500'>{row.label}</span>
                                    <span className='flex items-center gap-1 font-medium'>
                                        {row.value}
                                        <ArrowUpRight className='h-4 w-4 opacity-40 transition-opacity group-hover:opacity-100' />
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='mx-auto max-w-6xl px-6 pb-10 text-xs text-neutral-400'>&copy; {new Date().getFullYear()} Cole Hardister</div>
            </footer>
        </div>
    )
}

export function Eyebrow({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${className}`}>{children}</p>
}

export function Stat({ value, label, className = '' }: { value: string; label: string; className?: string }) {
    return (
        <div className={className}>
            <p className='font-display text-5xl leading-none tracking-tight md:text-6xl'>{value}</p>
            <p className='mt-2 text-sm text-neutral-500'>{label}</p>
        </div>
    )
}

export function BackLink() {
    return (
        <Link
            href='/#work'
            className='inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-900'
        >
            <span aria-hidden>&larr;</span> All work
        </Link>
    )
}
