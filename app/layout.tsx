import type { Metadata } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'
import './globals.css'

const ui = Inter({ subsets: ['latin'], variable: '--font-ui', display: 'swap' })
const display = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-display', display: 'swap' })

export const metadata: Metadata = {
    title: {
        default: 'Cole Hardister - Digital Marketing, SEO & Sports Marketing',
        template: '%s | Cole Hardister',
    },
    description:
        'Digital marketer, SEO specialist, and sports marketer. Grew CLEATUS on LinkedIn from 0 to 3,000+ followers and 120K+ organic impressions. SEO and Content Manager at SearchX.',
    keywords: [
        'digital marketing',
        'marketing strategy',
        'go-to-market',
        'LinkedIn growth',
        'social media marketing',
        'content strategy',
        'Charleston marketing',
        'Cole Hardister',
        'CLEATUS',
        'sports marketing',
        'College of Charleston',
    ],
    authors: [{ name: 'Cole Hardister' }],
    creator: 'Cole Hardister',
    publisher: 'Cole Hardister',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://colehardister.com'), // Update with actual domain
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://colehardister.com', // Update with actual domain
        title: 'Cole Hardister - Digital Marketing, SEO & Sports Marketing',
        description:
            'Digital marketer, SEO specialist, and sports marketer. Grew CLEATUS on LinkedIn from 0 to 3,000+ followers and 120K+ organic impressions.',
        siteName: 'Cole Hardister Portfolio',
        images: [
            {
                url: '/images/cole-profile.JPEG',
                width: 1200,
                height: 630,
                alt: 'Cole Hardister - Digital Marketing Expert',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cole Hardister - Digital Marketing, SEO & Sports Marketing',
        description: 'Digital marketer, SEO specialist, and sports marketer. Former Head of Marketing and Communications at CLEATUS.',
        images: ['/images/cole-profile.JPEG'],
        creator: '@colehardister', // Update with actual Twitter handle
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        // Add verification codes when available
        // google: 'google-verification-code',
        // yandex: 'yandex-verification-code',
        // yahoo: 'yahoo-verification-code',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang='en'
            className={`${ui.variable} ${display.variable}`}
        >
            <head>
                <link
                    rel='icon'
                    href='/favicon.ico'
                    sizes='any'
                />
                <link
                    rel='icon'
                    href='/icon.svg'
                    type='image/svg+xml'
                />
                <link
                    rel='apple-touch-icon'
                    href='/apple-icon.png'
                />
                <link
                    rel='manifest'
                    href='/manifest.json'
                />
                <meta
                    name='theme-color'
                    content='#fafaf7'
                />
            </head>
            <body>{children}</body>
        </html>
    )
}
