// ─── SELF-HOSTED ─────────────────────────────────────────────────────────────

export const SELF_HOSTED_PLANS = [
	{
		id: 'basic',
		name: 'Basic',
		monthlyPrice: 249,
		annualPrice: 2988,
		overagePerMillion: 60,
		eventsIncluded: 2_000_000,
		description: 'For teams self-hosting Convoy with standard needs.',
		cta: { text: 'Book a call', link: 'https://cal.com/convoy/30min' },
		highlight: false,
		billingNote: 'Monthly or Annual',
	},
	{
		id: 'scale',
		name: 'Scale',
		monthlyPrice: 599,
		annualPrice: 7188,
		overagePerMillion: 60,
		eventsIncluded: 8_000_000,
		description: 'For growing teams that need advanced features and guaranteed SLAs.',
		cta: { text: 'Book a call', link: 'https://cal.com/convoy/30min' },
		highlight: true,
		billingNote: 'Monthly or Annual',
	},
	{
		id: 'enterprise',
		name: 'Enterprise',
		monthlyPrice: 1499,
		annualPrice: 17988,
		overagePerMillion: 40,
		eventsIncluded: 30_000_000,
		description: 'For large organizations with custom infrastructure and compliance needs.',
		cta: { text: 'Talk to us', link: 'https://cal.com/convoy/30min' },
		highlight: false,
		billingNote: 'Custom contract',
	},
];

export const SELF_HOSTED_FEATURES = [
	{
		title: 'Limits & Performance',
		features: [
			{ name: 'Rate Limit', basic: '100 events/sec', scale: '500 events/sec', enterprise: 'Custom' },
			{ name: 'Uptime SLA', basic: '99.9%', scale: '99.99%', enterprise: '99.999%' },
			{ name: 'Event Retention', basic: '30 days', scale: '90 days', enterprise: 'Custom' },
		],
	},
	{
		title: 'Core Features',
		features: [
			{ name: 'Incoming & Outgoing Webhooks', basic: 'Supported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'Retries & Circuit Breaking', basic: 'Supported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'Message Broker Support', basic: 'Supported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'Portal Links', basic: 'Supported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'Webhook Transformation (JS)', basic: 'Supported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'Fine-Grained Event Routing', basic: 'Supported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'Customer-Facing Dashboard', basic: 'Supported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'Payload Signing & Rolling Secrets', basic: 'Supported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'Static IPs', basic: 'Unsupported', scale: 'Supported', enterprise: 'Supported' },
		],
	},
	{
		title: 'Security & Compliance',
		features: [
			{ name: 'Google SSO', basic: 'Supported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'RBAC', basic: 'Unsupported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'SOC 2 Type II', basic: 'Unsupported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'SAML / SSO Enterprise', basic: 'Unsupported', scale: 'Unsupported', enterprise: 'Supported' },
			{ name: 'VPC Peering / Private Networking', basic: 'Unsupported', scale: 'Unsupported', enterprise: 'Supported' },
			{ name: 'BAA / HIPAA', basic: 'Unsupported', scale: 'Unsupported', enterprise: 'Supported' },
		],
	},
	{
		title: 'Support',
		features: [
			{ name: 'Email Support (48hr)', basic: 'Supported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'Dedicated Slack Channel', basic: 'Unsupported', scale: 'Unsupported', enterprise: 'Supported' },
			{ name: 'Phone + Solutions Engineering', basic: 'Unsupported', scale: 'Unsupported', enterprise: 'Supported' },
			{ name: 'Response SLA (4hr P1)', basic: 'Unsupported', scale: 'Unsupported', enterprise: 'Supported' },
		],
	},
];

export const SELF_HOSTED_ADDONS = [
	{ name: 'Static IPs', price: 100, unit: '/mo', tiers: ['Scale'], notes: '' },
	{ name: 'Dedicated Slack Channel', price: 150, unit: '/mo', tiers: ['Enterprise'], notes: '' },
	{ name: 'Phone + Solutions Engineering', price: 400, unit: '/mo', tiers: ['Enterprise'], notes: '' },
	{ name: 'BAA / HIPAA Compliance', price: 200, unit: '/mo', tiers: ['Enterprise'], notes: '' },
	{ name: 'Dedicated Infrastructure', price: 250, unit: '/mo', tiers: ['Enterprise'], notes: '' },
	{ name: 'Additional Region', price: 200, unit: '/mo each', tiers: ['Enterprise'], notes: '' },
	{ name: 'SOC 2 Attestation Letter', price: 100, unit: '/mo', tiers: ['Scale', 'Enterprise'], notes: '' },
	{ name: '99.99% SLA Upgrade', price: 100, unit: '/mo', tiers: ['Enterprise'], notes: '' },
	{ name: '99.999% SLA Upgrade', price: 250, unit: '/mo', tiers: ['Enterprise'], notes: 'Replaces 99.99% upgrade' },
];

export const SELF_HOSTED_CALC_ADDONS = [
	{ id: 'staticIPs', label: 'Static IPs', price: 100, tiers: ['scale', 'enterprise'] },
	{ id: 'dedicatedSlack', label: 'Dedicated Slack Channel', price: 150, tiers: ['enterprise'] },
	{ id: 'phoneSE', label: 'Phone + Solutions Engineering', price: 400, tiers: ['enterprise'] },
	{ id: 'baaHipaa', label: 'BAA / HIPAA Compliance', price: 200, tiers: ['enterprise'] },
	{ id: 'dedicatedInfra', label: 'Dedicated Infrastructure', price: 250, tiers: ['enterprise'] },
	{ id: 'additionalRegions', label: 'Additional Regions', price: 200, tiers: ['enterprise'], isNumber: true },
];

export const SELF_HOSTED_VOLUME_DATA = [
	{ volume: 2_000_000, svixFree: 195, convoyBasic: 249, svixPro: 685, convoyScale: 599 },
	{ volume: 5_000_000, svixFree: 495, convoyBasic: 429, svixPro: 985, convoyScale: 599 },
	{ volume: 8_000_000, svixFree: 795, convoyBasic: 609, svixPro: 1285, convoyScale: 599 },
	{ volume: 15_000_000, svixFree: 1495, convoyBasic: 1029, svixPro: 1985, convoyScale: 1019 },
	{ volume: 20_000_000, svixFree: 1995, convoyBasic: 1329, svixPro: 2485, convoyScale: 1319 },
	{ volume: 30_000_000, svixFree: 2995, convoyBasic: 1929, svixPro: 3485, convoyScale: 1919 },
	{ volume: 50_000_000, svixFree: 4995, convoyBasic: 3129, svixPro: 5485, convoyScale: 3119 },
	{ volume: 100_000_000, svixFree: 9995, convoyBasic: 6129, svixPro: 10485, convoyScale: 6119 },
];

// ─── CLOUD ───────────────────────────────────────────────────────────────────

export const CLOUD_PLANS = [
	{
		id: 'free',
		name: 'Free',
		monthlyPrice: 0,
		annualPrice: 0,
		overagePerMillion: null as null,
		eventsIncluded: 250_000,
		description: 'For developers getting started with webhooks. No credit card required.',
		cta: { text: 'Start for free', link: 'https://cloud.getconvoy.io/signup' },
		highlight: false,
		billingNote: 'No card required',
	},
	{
		id: 'scale',
		name: 'Scale',
		monthlyPrice: 399,
		annualMonthlyPrice: 332,
		annualPrice: 3984,
		annualBadge: '2 months free',
		overagePerMillion: 50,
		eventsIncluded: 5_000_000,
		description: 'For teams that need performance, retention, and premium capabilities.',
		cta: { text: 'Start now', link: 'https://cloud.getconvoy.io/signup' },
		highlight: true,
		billingNote: 'Monthly or Annual',
	},
	{
		id: 'enterprise',
		name: 'Enterprise',
		monthlyPrice: 1299,
		annualMonthlyPrice: 1082,
		annualPrice: 12984,
		annualBadge: '2 months free',
		overagePerMillion: 40,
		eventsIncluded: 50_000_000,
		description: 'For organizations that need dedicated infrastructure, compliance, and SLAs.',
		cta: { text: 'Talk to us', link: 'https://cal.com/convoy/30min' },
		highlight: false,
		billingNote: 'Annual only',
	},
];

export const CLOUD_FEATURES = [
	{
		title: 'Limits & Performance',
		features: [
			{ name: 'Events Included', free: '250K/mo', scale: '5M/mo', enterprise: '50M/mo' },
			{ name: 'Rate Limit', free: '10 events/sec', scale: '200 events/sec', enterprise: 'Custom (1,000+)' },
			{ name: 'Uptime SLA', free: '99.9%', scale: '99.99%', enterprise: '99.999%' },
			{ name: 'Event Retention', free: '3 days', scale: '45 days', enterprise: '90 days (custom)' },
			{ name: 'Users', free: '3', scale: 'Unlimited', enterprise: 'Unlimited' },
			{ name: 'Organizations', free: '1', scale: '3', enterprise: 'Unlimited' },
			{ name: 'Projects', free: '2', scale: '10', enterprise: 'Unlimited' },
			{ name: 'Regions', free: 'US only', scale: 'US, EU', enterprise: 'US, EU + custom' },
		],
	},
	{
		title: 'Core Gateway',
		features: [
			{ name: 'Incoming & Outgoing Webhooks', free: 'Supported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'Retries & Exponential Backoff', free: 'Supported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'Endpoint Rate Limiting', free: 'Supported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'Payload Signing (HMAC)', free: 'Supported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'Rolling Secrets', free: 'Supported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'Portal Links', free: 'Supported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'Fine-Grained Event Routing', free: 'Supported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'Idempotency', free: 'Supported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'SDKs (JS, Go, Ruby)', free: 'Supported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'Bulk Retry', free: 'Supported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'SSL Enforcement', free: 'Supported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'Replay Attack Prevention', free: 'Supported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'IP Blacklisting (SSRF)', free: 'Supported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'Static IPs', free: 'Unsupported', scale: 'Supported', enterprise: 'Supported' },
		],
	},
	{
		title: 'Premium Features',
		features: [
			{ name: 'Circuit Breaking', free: 'Unsupported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'Endpoint Failure Notifications', free: 'Unsupported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'Fine-Grained Connection Timeouts', free: 'Unsupported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'Prometheus Metrics', free: 'Unsupported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'OpenTelemetry', free: 'Unsupported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'Performance Tuning', free: 'Unsupported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'Webhook Transformation (JS)', free: 'Unsupported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'Advanced Retention (S3)', free: 'Unsupported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'Message Broker Ingestion (Kafka, SQS, PubSub, AMQP)', free: 'Unsupported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'Avro Format Support', free: 'Unsupported', scale: 'Unsupported', enterprise: 'Supported' },
			{ name: 'Customer-Facing Dashboard', free: 'Unsupported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'Events Catalogue', free: 'Unsupported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'Meta Events', free: 'Unsupported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'Advanced Subscriptions', free: 'Unsupported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'CDC Pipeline Support', free: 'Unsupported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'Read Replicas', free: 'Unsupported', scale: 'Unsupported', enterprise: 'Supported' },
			{ name: 'mTLS Endpoint Auth', free: 'Unsupported', scale: 'Unsupported', enterprise: 'Supported' },
			{ name: 'OAuth2 Endpoint Auth', free: 'Unsupported', scale: 'Unsupported', enterprise: 'Supported' },
			{ name: 'Custom Certificate Authority', free: 'Unsupported', scale: 'Unsupported', enterprise: 'Supported' },
			{ name: 'FIFO Ordered Delivery', free: 'Unsupported', scale: 'Unsupported', enterprise: 'Supported' },
		],
	},
	{
		title: 'Security & Compliance',
		features: [
			{ name: 'Google SSO', free: 'Supported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'RBAC', free: 'Basic (2 roles)', scale: '5 roles', enterprise: '5 roles' },
			{ name: 'SOC 2 Type II', free: 'Supported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'GDPR', free: 'Supported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'SAML / SSO', free: 'Unsupported', scale: 'Unsupported', enterprise: 'Supported' },
			{ name: 'BAA / HIPAA Compliance', free: 'Unsupported', scale: 'Unsupported', enterprise: 'Supported' },
		],
	},
	{
		title: 'Support',
		features: [
			{ name: 'Email Support', free: 'Supported', scale: 'Supported', enterprise: 'Supported' },
			{ name: 'Dedicated Slack Channel', free: 'Unsupported', scale: 'Unsupported', enterprise: 'Supported' },
			{ name: 'Phone + Priority Escalation', free: 'Unsupported', scale: 'Unsupported', enterprise: 'Supported' },
			{ name: 'Response SLA (4hr P1)', free: 'Unsupported', scale: 'Unsupported', enterprise: 'Supported' },
		],
	},
];

export const CLOUD_ADDONS = [
	{ name: 'Static IPs', price: 100, unit: '/mo', tiers: ['Scale'], included: ['Enterprise'], notes: 'Included on Enterprise' },
	{ name: 'Additional Region', price: 200, unit: '/mo each', tiers: ['Scale', 'Enterprise'], included: [], notes: 'Beyond included regions' },
	{ name: 'Extended Retention (90 days)', price: 75, unit: '/mo', tiers: ['Scale'], included: ['Enterprise'], notes: 'Standard on Enterprise' },
	{ name: 'Dedicated Slack Channel', price: 100, unit: '/mo', tiers: ['Scale'], included: ['Enterprise'], notes: 'Standard on Enterprise' },
	{ name: '99.999% SLA Upgrade', price: 150, unit: '/mo', tiers: ['Scale'], included: ['Enterprise'], notes: 'Standard on Enterprise' },
	{ name: 'BAA / HIPAA Compliance', price: 200, unit: '/mo', tiers: ['Enterprise'], included: [], notes: 'Includes attestation' },
	{ name: 'Dedicated Infrastructure', price: 250, unit: '/mo', tiers: ['Enterprise'], included: [], notes: 'Single-tenant deploy' },
	{ name: 'Phone + Priority Escalation', price: 250, unit: '/mo', tiers: ['Enterprise'], included: [], notes: 'Page on-call engineers' },
	{ name: 'SOC 2 Attestation Letter', price: 100, unit: '/mo', tiers: ['Scale', 'Enterprise'], included: [], notes: 'Customer-specific' },
	{ name: 'Additional Orgs (beyond 3)', price: 50, unit: '/mo each', tiers: ['Scale'], included: ['Enterprise'], notes: 'Unlimited on Enterprise' },
	{ name: 'Additional Projects (beyond 10)', price: 25, unit: '/mo each', tiers: ['Scale'], included: ['Enterprise'], notes: 'Unlimited on Enterprise' },
];

export const CLOUD_CALC_ADDONS = [
	{ id: 'staticIPs', label: 'Static IPs', price: 100, tiers: ['scale'] },
	{ id: 'dedicatedSlack', label: 'Dedicated Slack Channel', price: 100, tiers: ['scale'] },
	{ id: 'slaUpgrade', label: '99.999% SLA Upgrade', price: 150, tiers: ['scale'] },
	{ id: 'extendedRetention', label: 'Extended Retention (90 days)', price: 75, tiers: ['scale'] },
	{ id: 'dedicatedInfra', label: 'Dedicated Infrastructure', price: 250, tiers: ['enterprise'] },
	{ id: 'phoneSE', label: 'Phone + Priority Escalation', price: 250, tiers: ['enterprise'] },
	{ id: 'baaHipaa', label: 'BAA / HIPAA Compliance', price: 200, tiers: ['enterprise'] },
	{ id: 'additionalRegions', label: 'Additional Regions', price: 200, tiers: ['scale', 'enterprise'], isNumber: true },
];

export const CLOUD_VOLUME_DATA = [
	{ volume: 1_000_000, svix: 585, convoy: 399 },
	{ volume: 2_000_000, svix: 685, convoy: 399 },
	{ volume: 5_000_000, svix: 985, convoy: 399 },
	{ volume: 8_000_000, svix: 1285, convoy: 549 },
	{ volume: 10_000_000, svix: 1485, convoy: 649 },
	{ volume: 15_000_000, svix: 1985, convoy: 899 },
	{ volume: 20_000_000, svix: 2485, convoy: 1149 },
	{ volume: 30_000_000, svix: 3485, convoy: 1649 },
	{ volume: 50_000_000, svix: 5485, convoy: 2649 },
	{ volume: 100_000_000, svix: 10485, convoy: 5149 },
];

export const SVIX_CLOUD_FORMULA = { base: 490, includedEvents: 50_000, overagePerEvent: 0.0001 };

// ─── COMPETITOR COMPARISON ────────────────────────────────────────────────────
// Kept for optional display — can be toggled off without removing data

export const COMPETITOR_COLUMNS = [
	{ key: 'convoy', label: 'Convoy Scale', sublabel: '$399/mo', highlight: true },
	{ key: 'svix', label: 'Svix Professional', sublabel: '$490/mo', highlight: false },
	{ key: 'hookdeck', label: 'Hookdeck Growth', sublabel: '$499/mo', highlight: false },
	{ key: 'hook0', label: 'Hook0 Pro', sublabel: '~$205/mo', highlight: false },
];

export const COMPETITOR_ROWS = [
	{ name: 'Effective Cost at 5M events', convoy: '$399', svix: '$985', hookdeck: '~$550+', hook0: 'N/A (daily cap)' },
	{ name: 'Events Included', convoy: '5,000,000', svix: '50,000', hookdeck: '10,000', hook0: '~3M (daily cap)' },
	{ name: 'Overage Rate', convoy: '$50/1M', svix: '$100/1M', hookdeck: '$3–10/100K', hook0: 'Daily cap' },
	{ name: 'Incoming + Outgoing', convoy: 'Both', svix: 'Both', hookdeck: 'Separate products', hook0: 'Outgoing only' },
	{ name: 'Rate Limit', convoy: '200/sec', svix: '400/sec', hookdeck: '5/sec (configurable)', hook0: 'Undisclosed' },
	{ name: 'Uptime SLA', convoy: '99.99%', svix: '99.99%', hookdeck: '99.999%', hook0: '99.9%' },
	{ name: 'Retention', convoy: '45 days', svix: '90 days', hookdeck: '30 days', hook0: '30 days' },
	{ name: 'Circuit Breaking', convoy: 'Supported', svix: 'Unsupported', hookdeck: 'Unsupported', hook0: 'Unsupported' },
	{ name: 'Prometheus Metrics', convoy: 'Supported', svix: 'Unsupported', hookdeck: 'Unsupported', hook0: 'Unsupported' },
	{ name: 'JS Transformations', convoy: 'Supported', svix: 'Supported', hookdeck: 'Supported', hook0: 'Unsupported' },
	{ name: 'Broker Ingestion', convoy: 'Kafka/SQS/PubSub', svix: 'Via Bridge', hookdeck: 'Unsupported', hook0: 'Unsupported' },
	{ name: 'Portal / Customer Dashboard', convoy: 'Supported', svix: 'Unbranded only', hookdeck: 'Unsupported', hook0: 'Basic' },
	{ name: 'Static IPs', convoy: 'Add-on $100', svix: 'Included', hookdeck: 'Add-on $150', hook0: 'Unsupported' },
	{ name: 'Google SSO', convoy: 'Supported', svix: 'Supported', hookdeck: 'Supported', hook0: 'Unsupported' },
	{ name: 'RBAC', convoy: '5 roles', svix: 'Advanced', hookdeck: 'Read-only role', hook0: 'Unsupported' },
	{ name: 'SAML / SSO', convoy: 'Enterprise only', svix: 'Enterprise only', hookdeck: 'Supported', hook0: 'Unsupported' },
	{ name: 'SOC 2', convoy: 'Supported', svix: 'Supported', hookdeck: 'Supported', hook0: 'Via host' },
	{ name: 'Users', convoy: 'Unlimited', svix: '10', hookdeck: 'Unlimited', hook0: 'Limited' },
	{ name: 'Self-Hosted (free)', convoy: 'Supported (MIT)', svix: 'Limited', hookdeck: 'Unsupported', hook0: 'Supported' },
	{ name: 'SDKs', convoy: 'JS, Go, Ruby', svix: '7+ languages', hookdeck: 'N/A (HTTP)', hook0: '2' },
	{ name: 'Support', convoy: 'Silver SLA (4hr P1)', svix: 'Email only', hookdeck: 'Standard', hook0: 'Basic' },
	{ name: 'Open Source', convoy: 'Supported (MIT)', svix: 'Limited', hookdeck: 'Unsupported', hook0: 'Supported' },
];
