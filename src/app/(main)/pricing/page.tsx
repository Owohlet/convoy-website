'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import PricingCards from './_components/PricingCards';
import FeatureTable from './_components/FeatureTable';
import AddOns from './_components/AddOns';
import BillingCalculator from './_components/BillingCalculator';
import VolumeChart from './_components/VolumeChart';
import EnterpriseCTA from './_components/EnterpriseCTA';
import {
	SELF_HOSTED_PLANS,
	SELF_HOSTED_FEATURES,
	SELF_HOSTED_ADDONS,
	SELF_HOSTED_CALC_ADDONS,
	SELF_HOSTED_VOLUME_DATA,
	CLOUD_PLANS,
	CLOUD_FEATURES,
	CLOUD_ADDONS,
	CLOUD_CALC_ADDONS,
	CLOUD_VOLUME_DATA,
	SVIX_CLOUD_FORMULA,
} from '@/app/data/pricing';

const TABS = [
	{ id: 'self-hosted', label: 'Self Hosted' },
	{ id: 'cloud', label: 'Cloud' },
] as const;

type Tab = (typeof TABS)[number]['id'];

const SELF_HOSTED_TIERS = [
	{ key: 'basic', label: 'Basic' },
	{ key: 'scale', label: 'Scale' },
	{ key: 'enterprise', label: 'Enterprise' },
];

const CLOUD_TIERS = [
	{ key: 'free', label: 'Free' },
	{ key: 'scale', label: 'Scale' },
	{ key: 'enterprise', label: 'Enterprise' },
];

const SELF_HOSTED_CHART_SERIES = [
	{ key: 'convoyBasic', label: 'Convoy Basic', color: '#2780F1' },
	{ key: 'svixFree', label: 'Competitor Free', color: '#94A3B8', dashed: true },
	{ key: 'convoyScale', label: 'Convoy Scale', color: '#0A3866' },
	{ key: 'svixPro', label: 'Competitor Pro', color: '#CBD5E1', dashed: true },
];

const CLOUD_CHART_SERIES = [
	{ key: 'convoy', label: 'Convoy Scale', color: '#2780F1' },
	{ key: 'svix', label: 'Competitor Pro', color: '#94A3B8', dashed: true },
];

export default function Pricing() {
	const [tab, setTab] = useState<Tab>('self-hosted');
	const [isAnnual, setIsAnnual] = useState(true);
	const isSelfHosted = tab === 'self-hosted';

	return (
		<main className="flex flex-col items-center pb-120px">
			<section className="pt-100px desktop:pt-150px px-20px w-full flex flex-col items-center max-w-[1280px]">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.44, 0, 0, 1] } }}
					viewport={{ amount: 'some', once: true }}
					className="w-full flex flex-col items-start desktop:items-center gap-4 mb-48px">
					<h1 className="text-32 desktop:text-[40px] font-medium desktop:text-center">
						Webhooks infrastructure, priced to grow with you.
					</h1>
					<p className="text-14 desktop:text-16 text-[#666] font-medium desktop:text-center max-w-[560px]">
						Start free. Scale to billions. No surprises.
					</p>
				</motion.div>

				{/* Combined control bar */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.44, 0, 0, 1] } }}
					viewport={{ amount: 'some', once: true }}
					className="w-full flex flex-col desktop:flex-row items-start desktop:items-center justify-between gap-4 mb-48px">

					{/* Cloud / Self-Hosted tabs */}
					<div className="inline-flex p-1 bg-white-100 border border-[#e7e7e7] rounded-8px">
						{TABS.map(t => (
							<motion.button
								key={t.id}
								onClick={() => setTab(t.id)}
								className={`relative px-4 py-2 desktop:py-2.5 text-[15px] font-semibold rounded-6px transition-all ${
									tab === t.id ? 'text-white-100' : 'text-[#000]'
								}`}
								aria-selected={tab === t.id}
								role="tab">
								{tab === t.id && (
									<motion.div
										layoutId="tab-bg"
										className="absolute inset-0 bg-[#2780F1] rounded-6px"
										initial={false}
										transition={{ type: 'spring', stiffness: 400, damping: 30 }}
									/>
								)}
								<span className="relative z-10">{t.label}</span>
							</motion.button>
						))}
					</div>

					{/* Monthly / Annual toggle */}
					<div className="flex items-center gap-3">
						<span className={`text-14 font-medium transition-colors ${!isAnnual ? 'text-[#000]' : 'text-[#999]'}`}>Monthly</span>
						<button
							role="switch"
							aria-checked={isAnnual}
							onClick={() => setIsAnnual(v => !v)}
							className={`relative flex-shrink-0 transition-colors duration-200 ${isAnnual ? 'bg-[#2780F1]' : 'bg-[#D0D5DD]'}`}
							style={{ width: 44, height: 24, borderRadius: 12 }}>
							<span
								className="absolute transition-all duration-200"
								style={{ top: 4, left: isAnnual ? 24 : 4, width: 16, height: 16, borderRadius: '50%', background: '#ffffff', boxShadow: '0 1px 2px rgba(0,0,0,0.15)' }}
							/>
						</button>
						<span className={`text-14 font-medium transition-colors ${isAnnual ? 'text-[#000]' : 'text-[#999]'}`}>
							Annual
						</span>
					</div>
				</motion.div>

				{/* Pricing cards */}
				<PricingCards plans={isSelfHosted ? SELF_HOSTED_PLANS : CLOUD_PLANS} isAnnual={isAnnual} />

				{/* Feature table */}
				<FeatureTable
					groups={isSelfHosted ? SELF_HOSTED_FEATURES : CLOUD_FEATURES}
					tiers={isSelfHosted ? SELF_HOSTED_TIERS : CLOUD_TIERS}
				/>

				{/* Add-ons */}
				<AddOns addons={isSelfHosted ? SELF_HOSTED_ADDONS : CLOUD_ADDONS} />

				{/* Billing calculator */}
				<BillingCalculator
					plans={
						isSelfHosted
							? SELF_HOSTED_PLANS.map(p => ({
									id: p.id,
									name: p.name,
									monthlyPrice: p.monthlyPrice,
									eventsIncluded: p.eventsIncluded,
									overagePerMillion: p.overagePerMillion,
							  }))
							: CLOUD_PLANS.map(p => ({
									id: p.id,
									name: p.name,
									monthlyPrice: p.monthlyPrice,
									eventsIncluded: p.eventsIncluded,
									overagePerMillion: p.overagePerMillion,
							  }))
					}
					calcAddons={isSelfHosted ? SELF_HOSTED_CALC_ADDONS : CLOUD_CALC_ADDONS}
					svixFormula={isSelfHosted ? undefined : SVIX_CLOUD_FORMULA}
				/>

				{/* Volume chart */}
				<VolumeChart
					data={isSelfHosted ? SELF_HOSTED_VOLUME_DATA : CLOUD_VOLUME_DATA}
					series={isSelfHosted ? SELF_HOSTED_CHART_SERIES : CLOUD_CHART_SERIES}
					title="Price vs volume"
					subtitle={
						isSelfHosted
							? 'Convoy Basic & Scale vs Svix across event volumes'
							: 'Convoy Scale vs competition average across event volumes'
					}
					callout={
						isSelfHosted
							? undefined
							: { dataKey: 'convoy', label: 'Save up to 59% vs competition average at 5M events/mo' }
					}
				/>

				{/* Enterprise CTA */}
				<EnterpriseCTA />
			</section>
		</main>
	);
}
