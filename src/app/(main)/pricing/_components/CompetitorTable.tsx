'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import check from 'public/svg/check.svg';
import error from 'public/svg/error.svg';
import { COMPETITOR_COLUMNS, COMPETITOR_ROWS } from '@/app/data/pricing';

function CellValue({ value, highlight }: { value: string; highlight?: boolean }) {
	if (value === 'Supported' || value === 'Supported (MIT)') {
		return (
			<div className="flex items-center gap-1.5 bg-[#E7E7E766] py-[2px] px-1.5 rounded-100px w-max">
				<Image src={check} height={16} width={16} alt="" />
				<span className="text-13 text-[#000]">{value === 'Supported (MIT)' ? 'Yes (MIT)' : 'Yes'}</span>
			</div>
		);
	}
	if (value === 'Unsupported') {
		return (
			<div className="flex items-center gap-1.5 py-[2px] px-1.5 w-max">
				<Image src={error} height={16} width={16} alt="" />
				<span className="text-13 text-[#999]">-</span>
			</div>
		);
	}
	return <span className={`text-13 ${highlight ? 'font-medium text-[#000]' : 'text-[#555]'}`}>{value}</span>;
}

export default function CompetitorTable() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.44, 0, 0, 1] } }}
			viewport={{ amount: 'some', once: true }}
			className="w-full mt-42px desktop:mt-72px">
			<div className="flex flex-col items-start desktop:items-center gap-2 desktop:gap-4 mb-10">
				<h2 className="text-24 desktop:text-[32px] font-medium">How we compare</h2>
				<p className="text-14 desktop:text-16 text-[#666]">At the ~$400–$500/mo price point</p>
			</div>

			<div className="w-full overflow-x-auto rounded-8px border border-[#e7e7e7]">
				<table className="w-full border-collapse min-w-[700px]">
					<thead>
						<tr className="border-b border-[#E7E7E780]">
							<th className="text-13 font-medium p-4 text-left w-[30%] sticky left-0 bg-white-100 z-10">Feature</th>
							{COMPETITOR_COLUMNS.map(col => (
								<th
									key={col.key}
									className={`text-13 p-4 text-left border-l border-[#E7E7E780] ${col.highlight ? 'bg-[#EEF6FF]' : ''}`}>
									<span className={`font-semibold block ${col.highlight ? 'text-[#2780F1]' : 'text-[#000]'}`}>
										{col.label}
									</span>
									<span className="text-12 font-normal text-[#888]">{col.sublabel}</span>
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{COMPETITOR_ROWS.map((row, i) => (
							<tr key={i} className="border-b border-[#E7E7E740] hover:bg-[#fafafa] transition-colors">
								<td className="text-13 text-[#555] p-4 sticky left-0 bg-white-100 hover:bg-[#fafafa]">{row.name}</td>
								{COMPETITOR_COLUMNS.map(col => (
									<td
										key={col.key}
										className={`p-4 border-l border-[#E7E7E780] ${col.highlight ? 'bg-[#EEF6FF]/40' : ''}`}>
										<CellValue value={row[col.key as keyof typeof row]} highlight={col.highlight} />
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<p className="text-12 text-[#999] mt-3 text-center">
				Competitor data sourced from public pricing pages. Prices correct as of Q2 2026. Subject to change.
			</p>
		</motion.div>
	);
}
