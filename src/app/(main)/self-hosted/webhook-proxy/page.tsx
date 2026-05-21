import type { Metadata } from 'next';
import { OptimizedImage } from '@/app/components/OptimizedImaged';
import HeroSection from './HeroSection';

export const metadata: Metadata = {
	title: 'Webhook Proxy for Enterprise | Convoy Self-Hosted',
	description:
		'Stop external webhooks hitting your internal services directly. Convoy sits between the internet and your infrastructure — inspect, route, and transform every inbound event before it reaches your network.',
	alternates: { canonical: '/self-hosted/webhook-proxy' },
};

const ChevronRight = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
		<path d="M9.8803 9.50052L6.16797 5.7882L7.22863 4.72754L12.0016 9.50052L7.22863 14.2734L6.16797 13.2128L9.8803 9.50052Z" fill="currentColor" />
	</svg>
);

const capabilities = [
	{
		icon: '/svg/hmac.svg',
		title: 'Payload Authentication',
		description:
			'Verify HMAC signatures from every external provider before a single byte reaches your internal services. Reject forged or replayed requests at the gate.',
	},
	{
		icon: '/svg/fine-grained.svg',
		title: 'Fine-Grained Routing',
		description:
			'Route inbound events by type, source, or payload structure to the exact internal service that needs them. No fan-out noise.',
	},
	{
		icon: '/svg/retries.svg',
		title: 'Payload Transformation',
		description:
			'Normalise, redact, or enrich payloads before routing. Strip sensitive fields before they hit downstream services.',
	},
	{
		icon: '/svg/telemetry.svg',
		title: 'Full Observability',
		description:
			'Every inbound event is logged, inspectable, and replayable. Debug any incident without touching internal service logs.',
	},
	{
		icon: '/svg/circuit.svg',
		title: 'Rate Limiting & Circuit Breaking',
		description:
			'Protect internal services from traffic spikes and cascading failures. Convoy absorbs the burst; your services stay stable.',
	},
];

type SourceTile = { name: string; logo?: string };

const sourceTiles: SourceTile[] = [
	{ name: 'GitHub', logo: '/svg/github-new.svg' },
	{ name: 'GitLab' },
	{ name: 'Bitbucket' },
	{ name: 'Stripe', logo: '/svg/stripe.svg' },
	{ name: 'Adyen' },
	{ name: 'Braintree' },
	{ name: 'PagerDuty', logo: '/svg/pagerduty.svg' },
	{ name: 'Datadog' },
	{ name: 'Sentry' },
	{ name: 'CircleCI' },
	{ name: 'GitHub Actions' },
	{ name: 'Jenkins' },
	{ name: 'AWS EventBridge' },
	{ name: 'GCP Pub/Sub' },
	{ name: 'Twilio' },
];

const deploymentColumns = [
	{
		title: 'Any cloud or on-prem',
		body: 'Deploy to AWS, GCP, Azure, or bare metal. Convoy runs wherever your infrastructure runs. No external dependencies.',
	},
	{
		title: 'Docker or Helm',
		body: 'One command to deploy. Convoy fits into your existing container orchestration without custom tooling or professional services.',
	},
	{
		title: 'Language agnostic',
		body: 'Your internal services stay exactly as they are. Convoy integrates via standard HTTP. No SDK required on the receiving end.',
	},
];

const routingSnippet = `{
  "source": "github",
  "match": {
    "event_type": "push",
    "payload.ref": "refs/heads/main"
  },
  "destination": "ci-pipeline-service",
  "transform": {
    "redact": [
      "sender.email",
      "pusher.email"
    ]
  }
}`;

export default function WebhookProxy() {
	return (
		<main className="bg-white-100">

			{/* Section 1: Hero (client component for entrance animation) */}
			<HeroSection />

			{/* Section 2: Trust Bar */}
			<section className="py-24px px-20px border-b border-[#e7e7e7] bg-[#fafafa]">
				<div className="max-w-[1280px] mx-auto flex flex-col sm-old:flex-row items-center justify-center gap-20px sm-old:gap-40px flex-wrap">
					<p className="text-12 text-[#999] font-medium whitespace-nowrap">Protecting internal infrastructure at</p>
					<div className="flex items-center gap-32px flex-wrap justify-center">
						{['AT&T', 'Mercedes-Benz', 'DreamWorks'].map(company => (
							<span key={company} className="text-12 font-semibold text-[#bbb] tracking-[0.08em] uppercase">
								{company}
							</span>
						))}
					</div>
				</div>
			</section>

			{/* Section 3: The Problem */}
			<section className="py-80px desktop:py-120px px-20px bg-white-100">
				<div className="max-w-[780px] mx-auto">
					<span className="text-12 font-semibold uppercase tracking-[0.1em] text-[#666] mb-16px block">The risk you already know about</span>
					<h2 className="text-28 desktop:text-[40px] desktop:leading-[1.2] font-semibold text-[#000] mb-28px">
						Every external webhook is an unauthenticated request hitting your network directly.
					</h2>
					<div className="flex flex-col gap-20px text-15 desktop:text-16 text-[#555] leading-[175%]">
						<p>
							When GitHub sends a push event, when Stripe fires a payment webhook, when PagerDuty triggers an incident alert — that traffic lands directly on an internal API endpoint. Your services are exposed to the public internet to receive it. One misconfigured endpoint, one forged payload, one replay attack and you have a problem.
						</p>
						<p>
							Large engineering teams solve this by building a webhook proxy layer: a single controlled ingress point that authenticates, validates, and routes all inbound events before they reach anything internal. Convoy is that layer, deployed on your infrastructure, under your control.
						</p>
					</div>
				</div>
			</section>

			{/* Section 4: How Convoy Solves It */}
			<section className="py-80px desktop:py-120px px-20px bg-[#fafafa] border-y border-[#e7e7e7]">
				<div className="max-w-[1280px] mx-auto">
					<div className="mb-48px">
						<span className="text-12 font-semibold uppercase tracking-[0.1em] text-[#666] mb-16px block">What Convoy does at the edge</span>
						<h2 className="text-28 desktop:text-[40px] desktop:leading-[1.15] font-semibold text-[#000]">
							One ingress point.
							<br />
							Complete control.
						</h2>
					</div>

					<div className="desktop:grid desktop:grid-cols-2 desktop:gap-16 items-start">
						{/* Capability cards */}
						<div className="flex flex-col gap-4 mb-12 desktop:mb-0">
							{capabilities.map(cap => (
								<div key={cap.title} className="bg-white-100 rounded-12px border border-[#e7e7e7] p-24px flex gap-16px">
									<OptimizedImage
										src={cap.icon}
										height={36}
										width={36}
										alt={cap.title}
										className="w-36px h-36px flex-shrink-0 mt-2px"
									/>
									<div>
										<h4 className="font-semibold text-15 text-[#000] mb-6px">{cap.title}</h4>
										<p className="text-13 text-[#666] leading-[165%]">{cap.description}</p>
									</div>
								</div>
							))}
						</div>

						{/* Code snippet */}
						<div className="rounded-12px border border-[#30363d] overflow-hidden bg-[#0d1117] text-white-100">
							<div className="flex items-center justify-between px-16px py-10px border-b border-[#30363d]">
								<div className="flex items-center gap-2">
									<span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
									<span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
									<span className="w-3 h-3 rounded-full bg-[#27c93f]" />
								</div>
								<span className="text-12 text-[#8b949e]">convoy-routing-rule.json</span>
							</div>
							<pre className="p-24px text-13 leading-loose overflow-x-auto font-mono whitespace-pre text-[#e6edf3]">
								<code>{routingSnippet}</code>
							</pre>
							<div className="border-t border-[#30363d] px-16px py-10px">
								<p className="text-12 text-[#8b949e] leading-[160%]">
									Routing rules are declarative JSON. Define source, match conditions, destination, and transform in one place.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Section 5: Source Grid */}
			<section className="py-80px desktop:py-120px px-20px">
				<div className="max-w-[1280px] mx-auto">
					<div className="mb-48px">
						<span className="text-12 font-semibold uppercase tracking-[0.1em] text-[#666] mb-16px block">Works with every external webhook source</span>
						<h2 className="text-28 desktop:text-[40px] font-semibold text-[#000]">If it sends webhooks, Convoy can proxy it.</h2>
					</div>

					<div className="grid grid-cols-2 desktop:grid-cols-5 gap-3">
						{sourceTiles.map(tile => (
							<div
								key={tile.name}
								className="rounded-8px border border-[#e7e7e7] bg-[#fafafa] px-16px py-14px flex items-center gap-10px">
								{tile.logo && (
									<OptimizedImage
										src={tile.logo}
										height={18}
										width={18}
										alt={tile.name}
										className="w-18px h-18px flex-shrink-0 opacity-50 grayscale"
									/>
								)}
								<span className="text-13 font-medium text-[#555]">{tile.name}</span>
							</div>
						))}
						<div className="rounded-8px border border-dashed border-[#d4d4d4] bg-transparent px-16px py-14px flex items-center col-span-2 desktop:col-span-1">
							<span className="text-13 text-[#aaa]">+ Any service that sends webhooks</span>
						</div>
					</div>
				</div>
			</section>

			{/* Section 6: Deployment */}
			<section className="py-80px desktop:py-120px px-20px bg-[#fafafa] border-y border-[#e7e7e7]">
				<div className="max-w-[1280px] mx-auto">
					<div className="mb-56px max-w-[560px]">
						<span className="text-12 font-semibold uppercase tracking-[0.1em] text-[#666] mb-16px block">Deployment</span>
						<h2 className="text-28 desktop:text-[40px] desktop:leading-[1.2] font-semibold text-[#000]">
							Runs on your infrastructure.
							<br />
							No data leaves your network.
						</h2>
					</div>

					<div className="grid grid-cols-1 desktop:grid-cols-3 gap-6">
						{deploymentColumns.map(col => (
							<div key={col.title} className="bg-white-100 rounded-12px border border-[#e7e7e7] p-28px">
								<h4 className="font-semibold text-16 text-[#000] mb-12px">{col.title}</h4>
								<p className="text-14 text-[#666] leading-[170%]">{col.body}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Section 7: Final CTA */}
			<section className="px-20px py-80px desktop:py-100px">
				<div className="max-w-[1000px] w-full mx-auto bg-[#0a0f1e] rounded-16px py-64px px-20px desktop:px-80px relative overflow-hidden">
					<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
					<div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-[#2780F1] opacity-10 blur-3xl pointer-events-none" />
					<div className="relative z-10 text-center">
						<h2 className="text-28 desktop:text-[40px] desktop:leading-[1.15] text-white-100 font-semibold mb-16px max-w-[560px] mx-auto">
							Ready to stop external webhooks hitting your internal services directly?
						</h2>
						<p className="text-14 text-[#8b9ab5] max-w-[440px] mx-auto leading-[170%] mb-40px">
							Most enterprise teams are running within two weeks. We'll walk you through the architecture on a call.
						</p>
						<div className="flex flex-col sm-old:flex-row items-center justify-center gap-16px">
							<a
								href="https://cal.com/subomi/30min"
								target="_blank"
								rel="noreferrer"
								className="bg-[#2780F1] text-white-100 text-14 font-semibold flex items-center py-14px px-28px rounded-8px hover:bg-[#1f66c1] transition-all duration-300 gap-2 whitespace-nowrap">
								Book a demo
								<ChevronRight />
							</a>
							<a
								href="https://docs.getconvoy.io/self-hosted/deploy"
								target="_blank"
								rel="noreferrer"
								className="text-white-100 text-14 font-semibold flex items-center py-14px px-24px rounded-8px border border-[#ffffff20] hover:bg-[#ffffff10] transition-all duration-300 whitespace-nowrap">
								Deploy self-hosted
							</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
