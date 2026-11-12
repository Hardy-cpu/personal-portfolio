'use client'

import { useEffect, useState } from 'react'

type RotatorProps = {
    slides: React.ReactNode[]
    /** Milliseconds each slide stays up */
    interval?: number
    /** Clickable dots (don't use inside a link) */
    controls?: boolean
    label: string
    className?: string
}

// Crossfading carousel. Pauses on hover/focus and doesn't autoplay for people who prefer reduced motion.
export function Rotator({ slides, interval = 5000, controls = false, label, className = '' }: RotatorProps) {
    const [index, setIndex] = useState(0)
    const [paused, setPaused] = useState(false)
    const [reduceMotion, setReduceMotion] = useState(false)

    useEffect(() => {
        const query = window.matchMedia('(prefers-reduced-motion: reduce)')
        setReduceMotion(query.matches)
        const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches)
        query.addEventListener('change', onChange)
        return () => query.removeEventListener('change', onChange)
    }, [])

    useEffect(() => {
        if (paused || reduceMotion || slides.length < 2) return
        const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval)
        return () => clearInterval(timer)
    }, [paused, reduceMotion, slides.length, interval])

    return (
        <div
            role='group'
            aria-roledescription='carousel'
            aria-label={label}
            className={`overflow-hidden ${className}`}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
        >
            {slides.map((slide, i) => (
                <div
                    key={i}
                    aria-hidden={i !== index}
                    className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
                >
                    {slide}
                </div>
            ))}
            {slides.length > 1 && (
                <div className='absolute inset-x-0 bottom-3 flex justify-center gap-1.5'>
                    {slides.map((_, i) =>
                        controls ? (
                            <button
                                key={i}
                                type='button'
                                aria-label={`Show slide ${i + 1} of ${slides.length}`}
                                aria-current={i === index}
                                onClick={() => setIndex(i)}
                                className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-neutral-900/70' : 'w-1.5 bg-neutral-900/25 hover:bg-neutral-900/50'}`}
                            />
                        ) : (
                            <span
                                key={i}
                                aria-hidden
                                className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-neutral-900/70' : 'w-1.5 bg-neutral-900/25'}`}
                            />
                        )
                    )}
                </div>
            )}
        </div>
    )
}
