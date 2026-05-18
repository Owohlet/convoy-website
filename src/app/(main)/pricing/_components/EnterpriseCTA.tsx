'use client';
import { motion } from 'framer-motion';

export default function EnterpriseCTA() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.44, 0, 0, 1] } }}
			viewport={{ amount: 'some', once: true }}
			className="w-full mt-42px desktop:mt-72px rounded-8px border border-[#e7e7e7] bg-gradient-to-b from-[#fff] via-[#EEF6FF] to-[#C7E0FF] p-30px desktop:p-60px relative overflow-hidden">
			<div className="bg-[linear-gradient(to_right,#E7E7E74D_1px,transparent_1px),linear-gradient(to_bottom,#E7E7E74D_1px,transparent_1px)] bg-[size:2.45rem_2.55rem] absolute inset-0 pointer-events-none" />

			<div className="relative z-10 flex flex-col desktop:flex-row desktop:items-center desktop:justify-between gap-8">
				<div className="flex flex-col gap-3 max-w-[600px]">
					<h2 className="text-24 desktop:text-[32px] font-medium text-[#000]">Building something bigger?</h2>
					<p className="text-14 desktop:text-16 text-[#555] leading-[160%]">
						If you need dedicated infrastructure, VPC peering, custom data residency, SAML, or a named account
						manager, let&apos;s talk. Most enterprise deals close within two weeks.
					</p>
				</div>

				<a
					href="https://cal.com/subomi/30min"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center justify-center gap-1 bg-[#2780F1] hover:bg-[#1f66c1] text-white-100 text-14 font-semibold px-6 py-3 rounded-8px transition-all duration-300 w-full desktop:w-max group whitespace-nowrap">
					Book a call with our team
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" className="ml-0.5 group-hover:translate-x-[2px] transition-all">
						<path d="M9.8803 9.50052L6.16797 5.7882L7.22863 4.72754L12.0016 9.50052L7.22863 14.2734L6.16797 13.2128L9.8803 9.50052Z" fill="white" />
					</svg>
				</a>
			</div>
		</motion.section>
	);
}
