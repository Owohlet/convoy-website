'use client';
import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';

type Plan = { id: string; name: string; monthlyPrice: number; eventsIncluded: number; overagePerMillion: number | null };
type SvixFormula = { base: number; includedEvents: number; overagePerEvent: number };

type Props = {
	plans: Plan[];
	svixFormula?: SvixFormula;
};

export default function BillingCalculator({ plans, svixFormula }: Props) {
	const [selectedPlan, setSelectedPlan] = useState(plans[0].id);
	const [events, setEvents] = useState(1_000_000);

	useEffect(() => {
		setSelectedPlan(plans[0].id);
	}, [plans]);

	const plan = plans.find(p => p.id === selectedPlan) ?? plans[0];

	const calc = useMemo(() => {
		const base = plan.monthlyPrice;
		const included = plan.eventsIncluded;
		const overageEvents = Math.max(0, events - included);
		const overageCharge =
			plan.overagePerMillion != null ? Math.ceil(overageEvents / 1_000_000) * plan.overagePerMillion : 0;

		const total = base + overageCharge;

		let svixEstimate: number | null = null;
		if (svixFormula && (selectedPlan === 'scale' || selectedPlan === 'enterprise') && events > 0) {
			svixEstimate = svixFormula.base + Math.max(0, events - svixFormula.includedEvents) * svixFormula.overagePerEvent;
		}

		return { base, included, overageEvents, overageCharge, total, svixEstimate };
	}, [plan, events, selectedPlan, svixFormula]);

	const isFreeCap = plan.overagePerMillion === null && events > plan.eventsIncluded;

	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.44, 0, 0, 1] } }}
			viewport={{ amount: 'some', once: true }}
			className="w-full mt-42px desktop:mt-72px">
			<div className="flex flex-col items-start desktop:items-center gap-2 desktop:gap-4 mb-10">
				<h2 className="text-24 desktop:text-[32px] font-medium">Estimate your bill</h2>
				<p className="text-14 desktop:text-16 text-[#666]">All outputs update in real time</p>
			</div>

			<div className="rounded-8px border border-[#e7e7e7] bg-white-100 p-20px desktop:p-40px grid grid-cols-1 desktop:grid-cols-2 gap-10">
				{/* Inputs */}
				<div className="flex flex-col gap-6">
					{/* Plan selector */}
					<div>
						<label className="text-13 font-semibold text-[#444] block mb-2">Plan</label>
						<div className="flex justify-center desktop:justify-start">
						<div className="inline-flex p-1 bg-[#f5f5f5] border border-[#e7e7e7] rounded-8px gap-0.5">
							{plans.map(p => (
								<button
									key={p.id}
									onClick={() => setSelectedPlan(p.id)}
									className={`px-3 py-1.5 rounded-6px text-13 font-semibold transition-all ${
										selectedPlan === p.id ? 'bg-[#2780F1] text-white-100' : 'text-[#555] hover:text-[#000]'
									}`}>
									{p.name}
								</button>
							))}
						</div>
						</div>
					</div>

					{/* Events input */}
					<div>
						<label className="text-13 font-semibold text-[#444] block mb-2">
							Estimated monthly events
						</label>
						<input
							type="number"
							min={0}
							value={events}
							onChange={e => setEvents(Math.max(0, parseInt(e.target.value) || 0))}
							className="w-full border border-[#e7e7e7] rounded-8px px-3 py-2.5 text-14 text-[#000] focus:outline-none focus:border-[#2780F1] transition-colors"
						/>
						{isFreeCap && (
							<p className="mt-2 text-12 text-[#F04438] font-medium">
								Free tier has a hard cap at {(plan.eventsIncluded / 1_000).toLocaleString()}K events. Upgrade to Scale to handle this volume.
							</p>
						)}
					</div>
				</div>

				{/* Output */}
				<div className="rounded-8px bg-[#f9f9f9] border border-[#e7e7e7] p-20px flex flex-col gap-3">
					<p className="text-13 font-semibold text-[#444] mb-1">Breakdown</p>

					<Line label={`${plan.name} base`} value={`$${calc.base.toLocaleString()}`} />
					<Line label="Events included" value={(calc.included / 1_000_000).toLocaleString() + 'M'} muted />

					{calc.overageCharge > 0 && (
						<>
							<Line label="Overage events" value={(calc.overageEvents / 1_000_000).toFixed(1) + 'M'} muted />
							<Line label="Overage charge" value={`$${calc.overageCharge.toLocaleString()}`} />
						</>
					)}

					<div className="border-t border-[#e7e7e7] mt-2 pt-3 flex flex-col gap-2">
						<div className="flex items-center justify-between">
							<span className="text-14 font-semibold text-[#000]">Total / month</span>
							<span className="text-20 font-semibold text-[#000]">${calc.total.toLocaleString()}</span>
						</div>
						<div className="flex items-center justify-between">
							<span className="text-13 text-[#666]">Annual estimate</span>
							<span className="text-14 font-medium text-[#666]">${(calc.total * 12).toLocaleString()}/yr</span>
						</div>
					</div>

					{calc.svixEstimate != null && calc.svixEstimate > calc.total && (
						<div className="mt-2 rounded-6px bg-[#EEF6FF] border border-[#2780F1]/20 px-3 py-2.5">
							<p className="text-12 text-[#2780F1] font-medium">
								At this volume, the competition average would cost approximately{' '}
								<strong>${Math.round(calc.svixEstimate).toLocaleString()}/mo</strong>, saving you{' '}
								<strong>${(Math.round(calc.svixEstimate) - calc.total).toLocaleString()}</strong> with Convoy.
							</p>
						</div>
					)}
				</div>
			</div>
		</motion.div>
	);
}

function Line({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
	return (
		<div className="flex items-center justify-between">
			<span className={`text-13 ${muted ? 'text-[#888]' : 'text-[#555]'}`}>{label}</span>
			<span className={`text-13 font-medium ${muted ? 'text-[#888]' : 'text-[#333]'}`}>{value}</span>
		</div>
	);
}
