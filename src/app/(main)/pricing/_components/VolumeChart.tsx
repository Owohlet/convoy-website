'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const ResponsiveContainer = dynamic(() => import('recharts').then(m => m.ResponsiveContainer), { ssr: false });
const LineChart = dynamic(() => import('recharts').then(m => m.LineChart), { ssr: false });
const Line = dynamic(() => import('recharts').then(m => m.Line), { ssr: false });
const XAxis = dynamic(() => import('recharts').then(m => m.XAxis), { ssr: false });
const YAxis = dynamic(() => import('recharts').then(m => m.YAxis), { ssr: false });
const CartesianGrid = dynamic(() => import('recharts').then(m => m.CartesianGrid), { ssr: false });
const Tooltip = dynamic(() => import('recharts').then(m => m.Tooltip), { ssr: false });
const Legend = dynamic(() => import('recharts').then(m => m.Legend), { ssr: false });

type Series = { key: string; label: string; color: string; dashed?: boolean };

type Props = {
	data: Record<string, number>[];
	series: Series[];
	title: string;
	subtitle: string;
	callout?: { dataKey: string; label: string };
};

function formatVolume(v: number) {
	if (v >= 1_000_000) return `${v / 1_000_000}M`;
	if (v >= 1_000) return `${v / 1_000}K`;
	return v.toString();
}

function formatDollar(v: number) {
	return `$${v.toLocaleString()}`;
}

export default function VolumeChart({ data, series, title, subtitle, callout }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.44, 0, 0, 1] } }}
			viewport={{ amount: 'some', once: true }}
			className="w-full mt-42px desktop:mt-72px">
			<div className="flex flex-col items-start desktop:items-center gap-2 desktop:gap-4 mb-10">
				<h2 className="text-24 desktop:text-[32px] font-medium">{title}</h2>
				<p className="text-14 desktop:text-16 text-[#666]">{subtitle}</p>
			</div>

			<div className="rounded-8px border border-[#e7e7e7] bg-white-100 p-20px desktop:p-40px">
				{callout && (
					<div className="mb-6 inline-block bg-[#EEF6FF] border border-[#2780F1]/20 rounded-6px px-3 py-2">
						<p className="text-13 text-[#2780F1] font-medium">{callout.label}</p>
					</div>
				)}

				<div className="w-full h-[320px]">
					<ResponsiveContainer width="100%" height="100%">
						<LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
							<CartesianGrid strokeDasharray="3 3" stroke="#E7E7E7" />
							<XAxis
								dataKey="volume"
								tickFormatter={formatVolume}
								tick={{ fontSize: 12, fill: '#888' }}
								axisLine={{ stroke: '#E7E7E7' }}
								tickLine={false}
							/>
							<YAxis
								tickFormatter={formatDollar}
								tick={{ fontSize: 12, fill: '#888' }}
								axisLine={false}
								tickLine={false}
								width={70}
							/>
							<Tooltip
								formatter={(value: any, name: any) => [formatDollar(Number(value)), name]}
								labelFormatter={(label: any) => `${formatVolume(Number(label))} events/mo`}
								contentStyle={{ borderRadius: 8, border: '1px solid #E7E7E7', fontSize: 13 }}
							/>
							<Legend
								wrapperStyle={{ fontSize: 13, paddingTop: 16 }}
							/>
							{series.map(s => (
								<Line
									key={s.key}
									type="monotone"
									dataKey={s.key}
									name={s.label}
									stroke={s.color}
									strokeWidth={2}
									dot={false}
									strokeDasharray={s.dashed ? '5 4' : undefined}
								/>
							))}
						</LineChart>
					</ResponsiveContainer>
				</div>
			</div>
		</motion.div>
	);
}
