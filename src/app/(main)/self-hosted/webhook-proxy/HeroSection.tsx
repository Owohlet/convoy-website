'use client';
import { motion } from 'framer-motion';
import WebhookProxyDiagram from './WebhookProxyDiagram';

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

export default function HeroSection() {
	return (
		<section className="bg-[#0a0f1e] pt-[100px] desktop:pt-[137px] pb-[80px] desktop:pb-[120px] px-20px relative overflow-hidden">
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

			<div className="max-w-[1280px] mx-auto relative z-10 flex flex-col desktop:flex-row items-center gap-12 desktop:gap-16">
				{/* Left: copy */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.44, 0, 0, 1] } }}
					className="flex flex-col items-start max-w-[520px] w-full">
					<span className="inline-flex items-center gap-2 text-12 font-semibold uppercase tracking-[0.12em] text-[#2780F1] mb-20px">
						<span className="w-4 h-px bg-[#2780F1]" />
						Enterprise Webhook Infrastructure
					</span>
					<h1 className="text-32 desktop:text-[52px] desktop:leading-[1.1] font-semibold text-white-100 mb-24px">
						External webhooks
						<br />
						shouldn't reach your
						<br />
						internal services.
					</h1>
					<p className="text-15 desktop:text-16 text-[#8b9ab5] leading-[170%] mb-40px">
						Convoy acts as the ingress layer between the internet and your infrastructure. Every webhook from GitHub, Stripe, PagerDuty, or any external service is inspected, authenticated, transformed, and routed before anything internal ever sees it.
					</p>
					<div className="flex flex-col xs:flex-row gap-16px w-full xs:w-auto">
						<a
							href="https://cal.com/subomi/30min"
							target="_blank"
							rel="noreferrer"
							className="pl-24px pr-18px py-14px text-14 font-semibold rounded-8px bg-[#2780F1] hover:bg-[#1f66c1] transition-all duration-300 text-white-100 flex items-center justify-center gap-2">
							Book a demo
							<ChevronRight />
						</a>
						<a
							href="https://docs.getconvoy.io/self-hosted/deploy"
							target="_blank"
							rel="noreferrer"
							className="px-24px py-14px text-14 font-semibold text-[#8b9ab5] hover:text-white-100 transition-colors flex items-center justify-center gap-2">
							Read the docs
							<ArrowRight />
						</a>
					</div>
				</motion.div>

				{/* Right: diagram */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.15, ease: [0.44, 0, 0, 1] } }}
					className="w-full desktop:flex-1 desktop:max-w-[580px]">
					<div className="rounded-12px border border-[#ffffff15] bg-[#ffffff06] p-20px desktop:p-28px">
						<WebhookProxyDiagram />
					</div>
				</motion.div>
			</div>
		</section>
	);
}
