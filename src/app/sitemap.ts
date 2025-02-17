import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = new URL(process.env["HOST"] ?? "https://eoinobrien.ie");

  return [
    {
      url: siteUrl.href,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: new URL('about', siteUrl).href,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: new URL('posts', siteUrl).href,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}

export const dynamic = "force-static";
export const revalidate = 86400; // revalidate once a day (60 secs * 60 mins * 24 hrs)