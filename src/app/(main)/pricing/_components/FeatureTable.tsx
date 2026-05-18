'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import check from 'public/svg/check.svg';
import error from 'public/svg/error.svg';

type FeatureGroup = {
	title: string;
	features: Record<string, string>[];
};

type Props = {
	groups: FeatureGroup[];
	tiers: { key: string; label: string }[];
};

function CellValue({ value }: { value: string }) {
	if (value === 'Supported') {
		return (
			<div className="flex items-center gap-1.5 bg-[#E7E7E766] py-[2px] px-1.5 rounded-100px w-max">
				<Image src={check} height={16} width={16} alt="" />
				<span className="text-13 text-[#000]">Supported</span>
			</div>
		);
	}
	if (value === 'Unsupported') {
		return (
			<div className="flex items-center gap-1.5 py-[2px] px-1.5 rounded-100px w-max">
				<Image src={error} height={16} width={16} alt="" />
				<span className="text-13 text-[#999]">-</span>
			</div>
		);
	}
	return <span className="text-13 text-[#444]">{value}</span>;
}

export default function FeatureTable({ groups, tiers }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.44, 0, 0, 1] } }}
			viewport={{ amount: 'some', once: true }}
			className="w-full mt-42px desktop:mt-72px">
			<div className="flex flex-col items-start desktop:items-center gap-2 desktop:gap-4 mb-10">
				<h2 className="text-24 desktop:text-[32px] font-medium">Compare plans</h2>
				<p className="text-14 desktop:text-16 text-[#666]">Full feature breakdown across all tiers</p>
			</div>

			<div className="w-full overflow-x-auto rounded-8px border border-[#e7e7e7]">
				<table className="w-full border-collapse min-w-[600px]">
					<thead>
						<tr className="border-b border-[#E7E7E780]">
							<th className="text-14 font-medium p-4 text-left w-[40%] bg-white-100 sticky left-0 z-10">Feature</th>
							{tiers.map(tier => (
								<th key={tier.key} className="text-14 font-medium p-4 text-left border-l border-[#E7E7E780]">
									{tier.label}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{groups.map((group, gi) => (
							<>
								<tr key={`group-${gi}`} className="bg-[#f9f9f9] border-b border-t border-[#E7E7E780]">
									<td
										colSpan={tiers.length + 1}
										className="text-13 font-semibold text-[#444] px-4 py-2.5">
										{group.title}
									</td>
								</tr>
								{group.features.map((feat, fi) => (
									<tr
										key={`feat-${gi}-${fi}`}
										className="border-b border-[#E7E7E740] hover:bg-[#fafafa] transition-colors">
										<td className="text-14 text-[#555] p-4 sticky left-0 bg-white-100 hover:bg-[#fafafa]">
											{feat.name}
										</td>
										{tiers.map(tier => (
											<td key={tier.key} className="p-4 border-l border-[#E7E7E780]">
												<CellValue value={feat[tier.key] ?? '-'} />
											</td>
										))}
									</tr>
								))}
							</>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
}
