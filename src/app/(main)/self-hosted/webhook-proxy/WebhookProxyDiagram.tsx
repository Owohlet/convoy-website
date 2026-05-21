export default function WebhookProxyDiagram() {
	return (
		<svg
			viewBox="0 0 580 340"
			xmlns="http://www.w3.org/2000/svg"
			aria-label="Convoy webhook proxy architecture: external sources flow through Convoy to internal services"
			className="w-full h-auto max-w-[580px]">

			{/* ── External Sources column ── */}
			<g>
				<text x="62" y="18" textAnchor="middle" fontSize="10" fontWeight="600" fill="#999" letterSpacing="0.08em" fontFamily="inherit">
					EXTERNAL
				</text>

				{(['GitHub', 'Stripe', 'PagerDuty', 'Datadog', 'CircleCI', '+ more'].map((name, i) => {
					const y = 30 + i * 46;
					const isMore = name === '+ more';
					return (
						<g key={name}>
							<rect
								x="4" y={y} width="116" height="34"
								rx="6"
								fill={isMore ? 'none' : '#fff'}
								stroke={isMore ? '#d4d4d4' : '#e7e7e7'}
								strokeWidth="1"
								strokeDasharray={isMore ? '4 3' : undefined}
							/>
							<text
								x="62" y={y + 21}
								textAnchor="middle"
								fontSize="12"
								fontWeight={isMore ? '400' : '500'}
								fill={isMore ? '#aaa' : '#333'}
								fontFamily="inherit">
								{name}
							</text>
						</g>
					);
				}))}
			</g>

			{/* ── Arrow: External → Convoy (open/public traffic) ── */}
			<g>
				{/* dashed line indicating public internet */}
				<line
					x1="122" y1="169"
					x2="188" y2="169"
					stroke="#d4d4d4"
					strokeWidth="1.5"
					strokeDasharray="4 3"
				/>
				<polygon points="188,164 198,169 188,174" fill="#d4d4d4" />
				<text x="152" y="158" textAnchor="middle" fontSize="9" fill="#bbb" fontFamily="inherit">public</text>
			</g>

			{/* ── Convoy box ── */}
			<g>
				<rect
					x="200" y="60" width="180" height="218"
					rx="10"
					fill="#EEF6FF"
					stroke="#2780F1"
					strokeWidth="1.5"
				/>
				<text x="290" y="88" textAnchor="middle" fontSize="13" fontWeight="700" fill="#2780F1" fontFamily="inherit" letterSpacing="0.04em">
					CONVOY
				</text>

				{/* Inner capability pills */}
				{(['Inspect', 'Authenticate', 'Transform', 'Route'].map((label, i) => {
					const pillY = 102 + i * 44;
					return (
						<g key={label}>
							<rect
								x="226" y={pillY} width="128" height="30"
								rx="6"
								fill="#fff"
								stroke="#bdd8fb"
								strokeWidth="1"
							/>
							<text
								x="290" y={pillY + 19}
								textAnchor="middle"
								fontSize="12"
								fontWeight="500"
								fill="#1a60b8"
								fontFamily="inherit">
								{label}
							</text>
						</g>
					);
				}))}
			</g>

			{/* ── Arrow: Convoy → Internal (controlled/secure) ── */}
			<g>
				<line
					x1="382" y1="169"
					x2="448" y2="169"
					stroke="#2780F1"
					strokeWidth="2"
				/>
				<polygon points="448,164 458,169 448,174" fill="#2780F1" />
				<text x="418" y="158" textAnchor="middle" fontSize="9" fill="#2780F1" fontFamily="inherit">secured</text>
			</g>

			{/* ── Internal Services column ── */}
			<g>
				<text x="518" y="18" textAnchor="middle" fontSize="10" fontWeight="600" fill="#999" letterSpacing="0.08em" fontFamily="inherit">
					INTERNAL
				</text>

				{(['Payment Svc', 'Notification', 'CI Pipeline', 'Audit Logger', 'Any Internal API'].map((name, i) => {
					const y = 30 + i * 46;
					const isLast = name === 'Any Internal API';
					return (
						<g key={name}>
							<rect
								x="462" y={y} width="116" height="34"
								rx="6"
								fill={isLast ? 'none' : '#fff'}
								stroke={isLast ? '#d4d4d4' : '#e7e7e7'}
								strokeWidth="1"
								strokeDasharray={isLast ? '4 3' : undefined}
							/>
							<text
								x="520" y={y + 21}
								textAnchor="middle"
								fontSize="11"
								fontWeight={isLast ? '400' : '500'}
								fill={isLast ? '#aaa' : '#333'}
								fontFamily="inherit">
								{name}
							</text>
						</g>
					);
				}))}
			</g>

			{/* ── Bottom legend ── */}
			<g transform="translate(120, 308)">
				<line x1="0" y1="7" x2="22" y2="7" stroke="#d4d4d4" strokeWidth="1.5" strokeDasharray="4 3" />
				<text x="28" y="11" fontSize="10" fill="#aaa" fontFamily="inherit">Public internet</text>
				<line x1="132" y1="7" x2="154" y2="7" stroke="#2780F1" strokeWidth="2" />
				<text x="160" y="11" fontSize="10" fill="#2780F1" fontFamily="inherit">Controlled egress</text>
			</g>
		</svg>
	);
}
