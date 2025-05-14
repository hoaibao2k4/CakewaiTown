import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/cart', '/account/', '/payment'],
      },
    ],
    sitemap: 'https://cakewaitown.com/sitemap.xml',
  }
}