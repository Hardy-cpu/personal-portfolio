import Image from 'next/image'
import { Rotator } from '@/components/site/rotator'

const SLIDES = [
    { src: '/images/cover.png', alt: 'CLEATUS: Find. Bid. Win! Government contracts with AI' },
    { src: '/images/cleatus-banner-1.webp', alt: 'CLEATUS article graphic: Agentic AI in Government Contracting' },
    { src: '/images/cleatus-banner-2.webp', alt: 'CLEATUS article graphic: Federal Acquisition Reform' },
    { src: '/images/cleatus-banner-3.webp', alt: 'CLEATUS article graphic: Federal Deferred Resignation Program' },
    { src: '/images/cleatus-banner-4.webp', alt: 'CLEATUS article graphic: SBA 8(a) Recertification Changes' },
    { src: '/images/cleatus-banner-5.webp', alt: 'CLEATUS article graphic: Making UCF Work Smarter' },
]

export function CleatusRotator({ className = '', controls = false, sizes }: { className?: string; controls?: boolean; sizes: string }) {
    return (
        <Rotator
            label='CLEATUS graphics and articles'
            className={`bg-white ${className}`}
            controls={controls}
            slides={SLIDES.map((slide, i) => (
                <Image
                    key={slide.src}
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className='object-contain'
                    sizes={sizes}
                    priority={i === 0 && controls}
                />
            ))}
        />
    )
}
