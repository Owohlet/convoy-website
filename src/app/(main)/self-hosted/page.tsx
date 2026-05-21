'use client';
import { motion } from 'framer-motion';
import { OptimizedImage } from '@/app/components/OptimizedImaged';

const ChevronRight = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
		<path d="M9.8803 9.50052L6.16797 5.7882L7.22863 4.72754L12.0016 9.50052L7.22863 14.2734L6.16797 13.2128L9.8803 9.50052Z" fill="currentColor" />
	</svg>
);

const ArrowRight = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
		<path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);

const CheckIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
		<path d="M3 8L6.5 11.5L13 4.5" stroke="#2780F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);

const costItems = [
	{
		stat: '12–16 wks',
		label: 'to build a production-grade webhook system',
		sub: 'Retries, routing, signing, rate limiting, dashboards — none of it is trivial.',
	},
	{
		stat: '$400k+',
		label: 'in year-one engineering cost',
		sub: 'Two senior engineers for six months. Then ongoing maintenance, forever.',
	},
	{
		stat: '0 SLAs',
		label: 'on the infra you built yourself',
		sub: 'When it breaks at 2am, there is no vendor to call. Just your on-call engineer.',
	},
	{
		stat: 'Every quarter',
		label: 'new compliance requirement hits your homegrown system',
		sub: 'HIPAA, SOC 2, SAML SSO, audit logs — retrofitting compliance is expensive.',
	},
];

const enterpriseFeatures = [
	{
		icon: '/svg/ssl.svg',
		title: 'SAML / Enterprise SSO',
		description: 'Deep SAML integration with your identity provider. Okta, Azure AD, Google Workspace. Centralised access control your security team controls.',
	},
	{
		icon: '/svg/fine-grained.svg',
		title: 'Role-Based Access Control',
		description: 'Granular permissions across teams, projects, and endpoints. Enforce least-privilege access at every layer of the system.',
	},
	{
		icon: '/svg/circuit.svg',
		title: 'Circuit Breaking & Resilience',
		description: 'Automatic circuit breaking prevents cascading failures. Your upstream services stay healthy when downstream endpoints degrade.',
	},
	{
		icon: '/svg/prometheus.svg',
		title: 'Prometheus & OpenTelemetry',
		description: 'First-class observability. Export metrics to your existing Grafana, Datadog, or any OpenTelemetry-compatible backend.',
	},
	{
		icon: '/svg/static-ips.svg',
		title: 'Static IPs & VPC Peering',
		description: 'Predictable egress IPs for firewall allowlisting. Private networking via VPC peering for zero-public-internet data paths.',
	},
	{
		icon: '/svg/portal.svg',
		title: 'White-Label Customer Portal',
		description: 'Embed a fully branded webhook dashboard in your product. Your customers debug their own deliveries — your support load drops.',
	},
	{
		icon: '/svg/archiving.svg',
		title: 'Custom Event Retention',
		description: 'Define exactly how long events are retained. Full audit trails for compliance. No forced data deletion on a vendor-set schedule.',
	},
	{
		icon: '/svg/soc-stamp.svg',
		title: 'SOC 2 Type II & HIPAA',
		description: "Convoy is SOC 2 Type II certified. HIPAA BAA available. Your compliance team gets the documentation they need to sign off.",
	},
];

const compliancePoints = [
	'Data never leaves your VPC or data center',
	'Full control over encryption keys and secrets rotation',
	'Audit logs retained on your own storage',
	'No third-party access to event payloads',
	'Deploy in air-gapped environments',
	'Custom data residency — any region, any cloud, on-prem',
];

const supportTiers = [
	{
		icon: '/svg/slack-icon.svg',
		title: 'Dedicated Slack Channel',
		description: 'A private Slack channel with the Convoy engineering team. Not a ticket queue — a direct line to the people who built it.',
	},
	{
		icon: '/svg/support.svg',
		title: '4-Hour P1 Response SLA',
		description: 'Contractually backed response times for critical incidents. Your on-call team is not alone when it matters most.',
	},
	{
		icon: '/svg/globe.svg',
		title: 'Phone + Solutions Engineering',
		description: 'Hands-on help architecting your webhook infrastructure. Integration reviews, load testing, deployment sign-off.',
	},
	{
		icon: '/svg/y-combinator.svg',
		title: 'Founder-Direct Access',
		description: 'Book time directly with the founder. Get answers about roadmap, custom requirements, and enterprise contracts without sales layers.',
	},
];

const deploymentOptions = [
	{ name: 'AWS', detail: 'EKS, ECS, EC2' },
	{ name: 'GCP', detail: 'GKE, Cloud Run' },
	{ name: 'Azure', detail: 'AKS, Container Apps' },
	{ name: 'On-Prem', detail: 'Bare metal, VMware' },
	{ name: 'Air-Gapped', detail: 'Fully offline' },
	{ name: 'Hybrid', detail: 'Multi-region' },
];

const enterpriseIncludes = [
	'30M events/mo included ($40/M overage)',
	'Custom rate limits',
	'99.999% uptime SLA',
	'Custom event retention',
	'SAML / Enterprise SSO',
	'RBAC',
	'VPC Peering / Private Networking',
	'SOC 2 Type II',
	'4-Hour P1 Response SLA',
	'Dedicated Slack channel (add-on)',
	'Phone + Solutions Engineering (add-on)',
	'HIPAA BAA (add-on)',
	'Custom contract terms',
	'Quarterly business reviews',
];

const trustedBy = ['AT&T', 'Mercedes-Benz', 'DreamWorks'];

export default function SelfHosted() {
	return (
		<main className="bg-white-100">
			{/* Hero — dark, premium */}
			<section className="bg-[#0a0f1e] pt-[100px] desktop:pt-[137px] pb-[80px] desktop:pb-[120px] px-20px relative overflow-hidden">
				{/* subtle grid overlay */}
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
				{/* gradient fade at bottom */}
				<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0a0f1e] pointer-events-none" />

				<div className="max-w-[1280px] mx-auto relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.44, 0, 0, 1] } }}
						className="max-w-[760px]">
						<span className="inline-flex items-center gap-2 text-12 font-semibold uppercase tracking-[0.12em] text-[#2780F1] mb-20px">
							<span className="w-4 h-px bg-[#2780F1]" />
							Enterprise Self-Hosted
						</span>
						<h1 className="text-36 desktop:text-[56px] desktop:leading-[1.1] font-semibold text-white-100 mb-24px">
							Webhook infrastructure
							<br />
							your security team
							<br />
							<span className="text-[#2780F1]">will actually approve.</span>
						</h1>
						<p className="text-16 desktop:text-18 text-[#8b9ab5] leading-[170%] mb-40px max-w-[580px]">
							Convoy Enterprise runs on your infrastructure — your VPC, your data center, your rules. Full compliance posture, contractual SLAs, and direct access to the founders who built it.
						</p>
						<div className="flex flex-wrap gap-16px">
							<a
								href="https://cal.com/subomi/30min"
								target="_blank"
								rel="noreferrer"
								className="pl-24px pr-18px py-14px text-15 font-semibold rounded-8px bg-[#2780F1] hover:bg-[#1f66c1] transition-all duration-300 text-white-100 flex items-center gap-2">
								Talk to the founder
								<ChevronRight />
							</a>
							<a
								href="/pricing"
								className="px-24px py-14px text-15 font-semibold rounded-8px border border-[#ffffff20] text-white-100 hover:bg-[#ffffff10] transition-all duration-300 flex items-center gap-2">
								See pricing
								<ArrowRight />
							</a>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Trust bar */}
			<section className="py-24px px-20px border-b border-[#e7e7e7] bg-[#fafafa]">
				<div className="max-w-[1280px] mx-auto flex flex-col sm-old:flex-row items-center justify-center gap-20px sm-old:gap-40px flex-wrap">
					<p className="text-12 text-[#999] font-medium whitespace-nowrap">Trusted in production by engineering teams at</p>
					<div className="flex items-center gap-32px flex-wrap justify-center">
						{trustedBy.map(company => (
							<span key={company} className="text-12 font-semibold text-[#bbb] tracking-[0.08em] uppercase">
								{company}
							</span>
						))}
					</div>
				</div>
			</section>

			{/* The real cost of DIY */}
			<section className="py-80px desktop:py-120px px-20px">
				<div className="max-w-[1280px] mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.44, 0, 0, 1] } }}
						viewport={{ amount: 'some', once: true }}
						className="max-w-[640px] mb-56px">
						<span className="text-12 font-semibold uppercase tracking-[0.1em] text-[#666] mb-16px block">The build vs buy decision</span>
						<h2 className="text-28 desktop:text-[40px] desktop:leading-[1.2] font-semibold text-[#000] mb-24px">
							Your engineers have better things to build.
						</h2>
						<p className="text-14 desktop:text-16 text-[#666] leading-[170%]">
							Webhook infrastructure looks simple. It is not. Every team that builds it in-house discovers the same thing: retries, routing, signing, rate limiting, dead-letter queues, customer-facing dashboards, compliance controls — it adds up to months, not days.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 sm-old:grid-cols-2 desktop:grid-cols-4 gap-6">
						{costItems.map((item, i) => (
							<motion.div
								key={item.stat}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.08, ease: [0.44, 0, 0, 1] } }}
								viewport={{ amount: 'some', once: true }}
								className="rounded-12px border border-[#e7e7e7] bg-white-100 p-24px flex flex-col gap-12px">
								<span className="text-32 desktop:text-[36px] font-bold text-[#000] leading-none">{item.stat}</span>
								<p className="text-14 font-semibold text-[#000] leading-[150%]">{item.label}</p>
								<p className="text-13 text-[#888] leading-[160%]">{item.sub}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Enterprise capabilities */}
			<section className="py-80px desktop:py-120px px-20px bg-[#fafafa] border-y border-[#e7e7e7]">
				<div className="max-w-[1280px] mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.44, 0, 0, 1] } }}
						viewport={{ amount: 'some', once: true }}
						className="max-w-[640px] mb-56px">
						<span className="text-12 font-semibold uppercase tracking-[0.1em] text-[#666] mb-16px block">Enterprise capabilities</span>
						<h2 className="text-28 desktop:text-[40px] desktop:leading-[1.2] font-semibold text-[#000]">
							Everything your team needs. Nothing you have to build.
						</h2>
					</motion.div>

					<div className="grid grid-cols-1 sm-old:grid-cols-2 desktop:grid-cols-4 gap-6">
						{enterpriseFeatures.map((feat, i) => (
							<motion.div
								key={feat.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.06, ease: [0.44, 0, 0, 1] } }}
								viewport={{ amount: 'some', once: true }}
								className="bg-white-100 rounded-12px border border-[#e7e7e7] p-24px flex flex-col gap-16px">
								<OptimizedImage src={feat.icon} height={36} width={36} alt={feat.title} className="w-36px h-36px" />
								<div>
									<h4 className="font-semibold text-15 text-[#000] mb-8px">{feat.title}</h4>
									<p className="text-13 text-[#666] leading-[165%]">{feat.description}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Data sovereignty — dark section */}
			<section className="py-80px desktop:py-120px px-20px bg-[#0a0f1e] relative overflow-hidden">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
				<div className="max-w-[1280px] mx-auto relative z-10">
					<div className="desktop:grid desktop:grid-cols-2 desktop:gap-20 items-center">
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.44, 0, 0, 1] } }}
							viewport={{ amount: 'some', once: true }}>
							<span className="text-12 font-semibold uppercase tracking-[0.12em] text-[#2780F1] mb-16px block">Data sovereignty</span>
							<h2 className="text-28 desktop:text-[40px] desktop:leading-[1.2] font-semibold text-white-100 mb-20px">
								Your data never leaves your perimeter.
							</h2>
							<p className="text-14 desktop:text-16 text-[#8b9ab5] leading-[170%] mb-8">
								Regulated industries and security-first teams choose self-hosted Convoy because they cannot send customer event payloads to a third-party cloud. With Convoy Enterprise, you own the entire stack — the compute, the storage, the keys.
							</p>
							<a
								href="https://cal.com/subomi/30min"
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-2 pl-20px pr-14px py-10px text-14 font-semibold rounded-8px bg-[#2780F1] hover:bg-[#1f66c1] transition-all duration-300 text-white-100">
								Discuss your compliance requirements
								<ChevronRight />
							</a>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.15, ease: [0.44, 0, 0, 1] } }}
							viewport={{ amount: 'some', once: true }}
							className="mt-10 desktop:mt-0 rounded-12px border border-[#ffffff15] bg-[#ffffff08] p-32px">
							<ul className="flex flex-col gap-16px">
								{compliancePoints.map(point => (
									<li key={point} className="flex items-start gap-12px">
										<div className="flex-shrink-0 w-20px h-20px rounded-full bg-[#2780F1]/15 flex items-center justify-center mt-1px">
											<CheckIcon />
										</div>
										<span className="text-14 text-[#c8d4e8] leading-[160%]">{point}</span>
									</li>
								))}
							</ul>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Deployment options */}
			<section className="py-80px desktop:py-120px px-20px border-b border-[#e7e7e7]">
				<div className="max-w-[1280px] mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.44, 0, 0, 1] } }}
						viewport={{ amount: 'some', once: true }}
						className="mb-48px max-w-[580px]">
						<span className="text-12 font-semibold uppercase tracking-[0.1em] text-[#666] mb-16px block">Deployment</span>
						<h2 className="text-28 desktop:text-[40px] desktop:leading-[1.2] font-semibold text-[#000] mb-16px">
							Runs anywhere your team already operates.
						</h2>
						<p className="text-14 desktop:text-16 text-[#666] leading-[170%]">
							No infrastructure changes required. Convoy runs on Kubernetes via Helm or as Docker containers. Drop it into your existing CI/CD and deployment pipelines.
						</p>
					</motion.div>

					<div className="flex flex-wrap gap-4">
						{deploymentOptions.map((opt, i) => (
							<motion.div
								key={opt.name}
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.05, ease: [0.44, 0, 0, 1] } }}
								viewport={{ amount: 'some', once: true }}
								className="rounded-8px border border-[#e7e7e7] bg-white-100 px-20px py-16px flex flex-col gap-4px">
								<span className="text-15 font-semibold text-[#000]">{opt.name}</span>
								<span className="text-12 text-[#888]">{opt.detail}</span>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Support */}
			<section className="py-80px desktop:py-120px px-20px bg-[#fafafa] border-b border-[#e7e7e7]">
				<div className="max-w-[1280px] mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.44, 0, 0, 1] } }}
						viewport={{ amount: 'some', once: true }}
						className="max-w-[640px] mb-56px">
						<span className="text-12 font-semibold uppercase tracking-[0.1em] text-[#666] mb-16px block">Support</span>
						<h2 className="text-28 desktop:text-[40px] desktop:leading-[1.2] font-semibold text-[#000]">
							We don't just sell you software.
						</h2>
					</motion.div>

					<div className="grid grid-cols-1 sm-old:grid-cols-2 desktop:grid-cols-4 gap-6">
						{supportTiers.map((tier, i) => (
							<motion.div
								key={tier.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.08, ease: [0.44, 0, 0, 1] } }}
								viewport={{ amount: 'some', once: true }}
								className="bg-white-100 rounded-12px border border-[#e7e7e7] p-24px flex flex-col gap-16px">
								<OptimizedImage src={tier.icon} height={36} width={36} alt={tier.title} className="w-36px h-36px" />
								<div>
									<h4 className="font-semibold text-15 text-[#000] mb-8px">{tier.title}</h4>
									<p className="text-13 text-[#666] leading-[165%]">{tier.description}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Pricing anchor */}
			<section className="py-80px desktop:py-120px px-20px">
				<div className="max-w-[1280px] mx-auto desktop:grid desktop:grid-cols-2 desktop:gap-20 items-start">
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.44, 0, 0, 1] } }}
						viewport={{ amount: 'some', once: true }}>
						<span className="text-12 font-semibold uppercase tracking-[0.1em] text-[#666] mb-16px block">Pricing</span>
						<h2 className="text-28 desktop:text-[40px] desktop:leading-[1.2] font-semibold text-[#000] mb-16px">
							Starting at $1,499/mo.
						</h2>
						<p className="text-14 desktop:text-16 text-[#666] leading-[170%] mb-32px">
							Includes 30M events per month, custom SLAs, and all enterprise security controls. Volume-based pricing above 30M. Custom contracts available for large-scale deployments.
						</p>
						<div className="flex flex-wrap gap-16px">
							<a
								href="https://cal.com/subomi/30min"
								target="_blank"
								rel="noreferrer"
								className="pl-20px pr-14px py-10px text-14 font-semibold rounded-8px bg-[#2780F1] hover:bg-[#1f66c1] transition-all duration-300 text-white-100 flex items-center gap-1">
								Talk to the founder
								<ChevronRight />
							</a>
							<a
								href="/pricing"
								className="px-20px py-10px text-14 font-semibold rounded-8px border border-[#e7e7e7] text-[#000] hover:bg-[#f5f5f5] transition-all duration-300 flex items-center gap-2">
								Compare all plans
								<ArrowRight />
							</a>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.15, ease: [0.44, 0, 0, 1] } }}
						viewport={{ amount: 'some', once: true }}
						className="mt-10 desktop:mt-0 rounded-12px border border-[#e7e7e7] bg-[#fafafa] p-32px">
						<p className="text-13 font-semibold text-[#444] mb-16px uppercase tracking-[0.06em]">Enterprise plan includes</p>
						<ul className="grid grid-cols-1 sm-old:grid-cols-2 gap-10px">
							{enterpriseIncludes.map(item => (
								<li key={item} className="flex items-start gap-10px">
									<div className="flex-shrink-0 mt-2px">
										<CheckIcon />
									</div>
									<span className="text-13 text-[#444] leading-[155%]">{item}</span>
								</li>
							))}
						</ul>
					</motion.div>
				</div>
			</section>

			{/* Final CTA */}
			<section className="px-20px pb-100px desktop:pb-130px">
				<div className="max-w-[1000px] w-full mx-auto bg-[#0a0f1e] rounded-16px py-64px px-20px desktop:px-80px relative overflow-hidden">
					<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
					<div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-[#2780F1] opacity-10 blur-3xl pointer-events-none" />
					<div className="relative z-10 text-center">
						<span className="text-12 font-semibold uppercase tracking-[0.12em] text-[#2780F1] mb-16px block">Ready to move forward?</span>
						<h2 className="text-28 desktop:text-[40px] desktop:leading-[1.15] text-white-100 font-semibold mb-16px max-w-[540px] mx-auto">
							Stop rebuilding webhook infrastructure. Talk to the founder.
						</h2>
						<p className="text-center text-14 text-[#8b9ab5] max-w-[440px] mx-auto leading-[170%] mb-40px">
							30 minutes with Subomi. No sales deck. Walk through your architecture, compliance requirements, and pricing — directly with the person who built Convoy.
						</p>
						<div className="flex flex-col sm-old:flex-row items-center justify-center gap-16px">
							<a
								href="https://cal.com/subomi/30min"
								target="_blank"
								rel="noreferrer"
								className="bg-[#2780F1] text-white-100 text-14 font-semibold flex items-center py-14px px-28px rounded-8px hover:bg-[#1f66c1] transition-all duration-300 gap-2 whitespace-nowrap">
								Book a 30-min call with Subomi
								<ChevronRight />
							</a>
							<a
								href="https://docs.getconvoy.io/self-hosted/deploy"
								target="_blank"
								rel="noreferrer"
								className="text-white-100 text-14 font-semibold flex items-center py-14px px-24px rounded-8px border border-[#ffffff20] hover:bg-[#ffffff10] transition-all duration-300 whitespace-nowrap">
								Read the docs first
							</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
