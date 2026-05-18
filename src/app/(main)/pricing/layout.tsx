import type { Metadata } from 'next';
import { CLOUD_PLANS, SELF_HOSTED_PLANS } from '@/app/data/pricing';

export const metadata: Metadata = {
	title: 'Convoy Pricing | Webhooks Gateway - Cloud & Self-Hosted',
	description:
		"Simple, transparent pricing for Convoy's webhook gateway. Start free, scale to billions. Cloud plans from $0. Self-hosted from $249/mo.",
	openGraph: {
		title: 'Convoy Pricing | Webhooks Gateway',
		description: "Simple, transparent pricing for Convoy's webhook gateway. Start free, scale to billions.",
		type: 'website',
		images: [{ url: '/static/Pricing-OG.png', width: 1200, height: 630, alt: 'Convoy Pricing' }],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Convoy Pricing | Webhooks Gateway',
		description: "Simple, transparent pricing for Convoy's webhook gateway. Start free, scale to billions.",
		images: ['/static/Pricing-OG.png'],
	},
	alternates: { canonical: '/pricing' },
	keywords: 'webhook gateway pricing, webhook infrastructure pricing, convoy pricing, svix alternative',
};

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Product',
	name: 'Convoy',
	description: 'High-performance webhooks gateway, cloud and self-hosted.',
	offers: {
		'@type': 'AggregateOffer',
		priceCurrency: 'USD',
		offers: [
			...CLOUD_PLANS.map(p => ({
				'@type': 'Offer',
				name: p.name,
				price: String(p.monthlyPrice),
				priceCurrency: 'USD',
			})),
			...SELF_HOSTED_PLANS.map(p => ({
				'@type': 'Offer',
				name: `Self-Hosted ${p.name}`,
				price: String(p.monthlyPrice),
				priceCurrency: 'USD',
			})),
		],
	},
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			{children}
		</div>
	);
}
