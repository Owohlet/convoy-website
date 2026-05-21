import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Enterprise Self-Hosted Webhooks Gateway | Convoy',
	description:
		'Deploy Convoy Enterprise on your own infrastructure. SAML SSO, RBAC, VPC peering, SOC 2 Type II, 99.999% SLA, and direct founder support. No vendor lock-in.',
	openGraph: {
		title: 'Enterprise Self-Hosted Webhooks Gateway | Convoy',
		description:
			'Webhook infrastructure your security team will approve. SAML SSO, RBAC, VPC peering, SOC 2 Type II, and 99.999% uptime SLA. Talk to the founder.',
		url: 'https://www.getconvoy.io/self-hosted',
		siteName: 'Convoy',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Enterprise Self-Hosted Webhooks Gateway | Convoy',
		description:
			'Webhook infrastructure your security team will approve. SAML SSO, RBAC, VPC peering, SOC 2 Type II, and 99.999% uptime SLA. Talk to the founder.',
	},
	alternates: {
		canonical: '/self-hosted',
	},
	keywords:
		'enterprise webhooks gateway, self-hosted webhooks, webhook infrastructure, SAML SSO webhooks, HIPAA webhooks, SOC 2 webhooks, convoy enterprise',
};

export default function SelfHostedLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
