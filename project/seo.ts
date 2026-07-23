import { BRAND } from '@/data/brand';

export function getSEO() {
  return {
    title: `${BRAND.name} — ${BRAND.tagline}`,
    description: BRAND.description,
    canonical: 'https://retainly.app',
    ogImage: 'https://retainly.app/og-image.png',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: BRAND.name,
      applicationCategory: 'EducationApplication',
      operatingSystem: 'Android',
      description: BRAND.description,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'PKR',
      },
    },
  };
}
