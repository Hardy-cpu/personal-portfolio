import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

const ROUTES = [
    { path: '', priority: 1 },
    { path: '/projects/project1', priority: 0.9 },
    { path: '/projects/project2', priority: 0.8 },
    { path: '/projects/project4', priority: 0.8 },
    { path: '/football', priority: 0.6 },
]

export default function sitemap(): MetadataRoute.Sitemap {
    return ROUTES.map(({ path, priority }) => ({
        url: `${SITE_URL}${path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority,
    }))
}
