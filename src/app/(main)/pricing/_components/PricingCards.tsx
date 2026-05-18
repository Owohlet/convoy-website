'use client';
import { motion, AnimatePresence } from 'framer-motion';

type Plan = {
	id: string;
	name: string;
	monthlyPrice: number;
	annualPrice: number;
	annualMonthlyPrice?: number;
	annualBadge?: string;
	overagePerMillion: number | null;
	eventsIncluded: number;
	description: string;
	cta: { text: string; link: string };
	highlight: boolean;
	billingNote: string;
};

function formatEvents(n: number) {
	if (n >= 1_000_000) return `${n / 1_000_000}M`;
	if (n >= 1_000) return `${n / 1_000}K`;
	return n.toString();
}

export default function PricingCards({ plans, isAnnual }: { plans: Plan[]; isAnnual: boolean }) {
	const getCardGradient = (highlight: boolean, index: number) => {
		if (highlight) return 'from-[#fff] from-[0%] via-[#EEF6FF] via-[54.97%] to-[#C7E0FF] to-[134.32%]';
		if (index === 0) return 'from-[#fff] from-[0%] via-[#fafafa] via-[54.97%] to-[#f0f0f0] to-[134.32%]';
		return 'from-[#fff] from-[0%] via-[#F1F1F1] via-[54.97%] to-[#D3D3D3] to-[134.32%]';
	};

	return (
		<div className="w-full flex flex-col items-center gap-6">
			{/* Cards */}
			<div className="grid grid-cols-1 desktop:grid-cols-3 gap-5 w-full">
				<AnimatePresence mode="wait">
					{plans.map((plan, index) => {
						const displayPrice =
							isAnnual && plan.annualMonthlyPrice != null
								? plan.annualMonthlyPrice
								: plan.monthlyPrice;
						const showAnnualBadge = isAnnual && plan.annualBadge;

						return (
							<motion.div
								key={plan.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{
									opacity: 1,
									y: 0,
									transition: { duration: 0.7, delay: index * 0.1 + 0.1, ease: [0.44, 0, 0, 1] },
								}}
								viewport={{ amount: 'some', once: true }}
								className={`relative rounded-8px p-20px desktop:p-30px bg-gradient-to-b ${getCardGradient(plan.highlight, index)} border flex flex-col justify-between min-h-[340px] ${plan.highlight ? 'border-[#2780F1]/30' : 'border-[#e7e7e7]'}`}>
								{/* Grid overlay */}
								<div className="bg-[linear-gradient(to_right,#E7E7E74D_1px,transparent_1px),linear-gradient(to_bottom,#E7E7E74D_1px,transparent_1px)] bg-[size:2.45rem_2.55rem] absolute left-0 top-0 w-full h-full rounded-8px pointer-events-none" />

								<div className="z-10 flex flex-col gap-4">
									<div className="flex items-center gap-2 flex-wrap">
										<span className={`rounded-6px py-1 px-2.5 font-medium text-14 ${plan.highlight ? 'bg-[#2780F11F] text-[#2780F1]' : 'bg-[#E7E7E7] text-[#000]'}`}>
											{plan.name}
										</span>
										{plan.highlight && (
											<span className="rounded-6px py-1 px-2.5 font-medium text-12 bg-[#2780F1] text-white-100">
												Most Popular
											</span>
										)}
										{showAnnualBadge && (
											<span className="rounded-6px py-1 px-2.5 font-medium text-12 bg-[#039855]/10 text-[#039855]">
												{plan.annualBadge}
											</span>
										)}
									</div>

									<p className="text-[#666] text-14 font-medium leading-[150%]">{plan.description}</p>

									<div>
										{plan.monthlyPrice === 0 ? (
											<div className="flex items-end gap-1.5">
												<h4 className="text-[44px] desktop:text-[52px] font-semibold leading-[120%]">$0</h4>
												<span className="text-16 text-[#666] font-medium mb-2">/mo</span>
											</div>
										) : (
											<div className="flex items-end gap-1.5">
												<p className="text-13 text-[#666] font-medium self-start mt-2">From</p>
												<h4 className="text-[44px] desktop:text-[52px] font-semibold leading-[120%]">
													${displayPrice.toLocaleString()}
												</h4>
												<span className="text-16 text-[#666] font-medium mb-2">/mo</span>
											</div>
										)}
										<p className="text-12 text-[#999] mt-1">
											{isAnnual && plan.annualMonthlyPrice != null
												? `$${plan.annualPrice.toLocaleString()}/yr, ${plan.billingNote}`
												: plan.billingNote}
										</p>
									</div>

									<div className="text-13 text-[#555] space-y-1">
										<p>{formatEvents(plan.eventsIncluded)} events/mo included</p>
										{plan.overagePerMillion != null ? (
											<p>+${plan.overagePerMillion}/1M overage</p>
										) : (
											<p>Hard cap, no overage</p>
										)}
									</div>
								</div>

								<div className="z-10 mt-6">
									<a
										href={plan.cta.link}
										target={plan.cta.link.startsWith('http') ? '_blank' : undefined}
										rel="noopener noreferrer"
										className={`w-full flex items-center justify-center gap-1 py-2.5 px-5 rounded-8px text-14 font-semibold transition-all duration-300 group ${plan.highlight ? 'bg-[#2780F1] hover:bg-[#1f66c1] text-white-100' : 'bg-[#000] hover:bg-[#222] text-white-100'}`}>
										<span>{plan.cta.text}</span>
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" className="ml-0.5 group-hover:translate-x-[2px] transition-all">
											<path d="M9.8803 9.50052L6.16797 5.7882L7.22863 4.72754L12.0016 9.50052L7.22863 14.2734L6.16797 13.2128L9.8803 9.50052Z" fill="white" />
										</svg>
									</a>
								</div>
							</motion.div>
						);
					})}
				</AnimatePresence>
			</div>
		</div>
	);
}
