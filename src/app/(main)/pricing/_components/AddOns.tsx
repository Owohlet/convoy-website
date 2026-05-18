'use client';
import { motion } from 'framer-motion';

type AddOn = {
	name: string;
	price: number;
	unit: string;
	tiers: string[];
	included?: string[];
	notes: string;
};

export default function AddOns({ addons }: { addons: AddOn[] }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.44, 0, 0, 1] } }}
			viewport={{ amount: 'some', once: true }}
			className="w-full mt-42px desktop:mt-72px">
			<div className="flex flex-col items-start desktop:items-center gap-2 desktop:gap-4 mb-10">
				<h2 className="text-24 desktop:text-[32px] font-medium">Add-ons</h2>
				<p className="text-14 desktop:text-16 text-[#666]">Extend your plan with optional capabilities</p>
			</div>

			<div className="grid grid-cols-1 sm-old:grid-cols-2 desktop:grid-cols-3 gap-4">
				{addons.map((addon, i) => (
					<motion.div
						key={addon.name}
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.05, ease: [0.44, 0, 0, 1] } }}
						viewport={{ amount: 'some', once: true }}
						className="rounded-8px border border-[#e7e7e7] p-20px bg-white-100 flex flex-col gap-3">
						<div className="flex items-start justify-between gap-2">
							<p className="text-14 font-semibold text-[#000]">{addon.name}</p>
							<span className="text-14 font-semibold text-[#2780F1] whitespace-nowrap">
								${addon.price.toLocaleString()}
								<span className="text-12 font-medium text-[#666]">{addon.unit}</span>
							</span>
						</div>

						<div className="flex flex-wrap gap-1.5">
							{addon.tiers.map(tier => (
								<span
									key={tier}
									className={`text-12 font-medium px-2 py-0.5 rounded-6px ${
										tier === 'Enterprise'
											? 'bg-[#E7E7E7] text-[#444]'
											: 'bg-[#2780F11F] text-[#2780F1]'
									}`}>
									{tier}
								</span>
							))}
							{addon.included?.map(tier => (
								<span key={tier} className="text-12 font-medium px-2 py-0.5 rounded-6px bg-[#ECFDF3] text-[#039855]">
									Included on {tier}
								</span>
							))}
						</div>

						{addon.notes && <p className="text-12 text-[#888]">{addon.notes}</p>}
					</motion.div>
				))}
			</div>
		</motion.div>
	);
}
