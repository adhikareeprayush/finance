/** Static mock data — no network API; images use CDNs (Unsplash). */

const u = (id, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const MOCK_COMPANIES = [
  {
    id: 1,
    name: "NVIDIA Corporation",
    symbol: "NVDA",
    logo: "https://logo.clearbit.com/nvidia.com",
    coverImage: u("photo-1639762681485-074b7f938ba0", 1200),
    sector: "Technology",
    marketCap: "1.2T",
    price: "$450.00",
    changePercent: "+2.5%",
    changePercentages: ["+5.0%", "+15.0%", "+25.0%", "-10.0%", "+50.0%", "+100.0%"],
  },
  {
    id: 2,
    name: "Apple Inc.",
    symbol: "AAPL",
    logo: "https://logo.clearbit.com/apple.com",
    coverImage: u("photo-1611186871348-b1ce696e52c9", 1200),
    sector: "Technology",
    marketCap: "2.5T",
    price: "$150.00",
    changePercent: "+1.2%",
    changePercentages: ["+3.0%", "+10.0%", "+20.0%", "-5.0%", "+25.0%", "+50.0%"],
  },
  {
    id: 3,
    name: "JPMorgan Chase & Co.",
    symbol: "JPM",
    logo: "https://logo.clearbit.com/jpmorganchase.com",
    coverImage: u("photo-1563986768609-322da13575f3", 1200),
    sector: "Finance",
    marketCap: "500B",
    price: "$150.00",
    changePercent: "-1.5%",
    changePercentages: ["-2.0%", "+5.0%", "+10.0%", "-8.0%", "+15.0%", "+30.0%"],
  },
  {
    id: 4,
    name: "Goldman Sachs",
    symbol: "GS",
    logo: "https://logo.clearbit.com/goldmansachs.com",
    coverImage: u("photo-1611974789855-9c2a0a7236a3", 1200),
    sector: "Finance",
    marketCap: "100B",
    price: "$300.00",
    changePercent: "-0.5%",
    changePercentages: ["-1.0%", "+3.0%", "+8.0%", "-4.0%", "+10.0%", "+20.0%"],
  },
  {
    id: 5,
    name: "Pfizer Inc.",
    symbol: "PFE",
    logo: "https://logo.clearbit.com/pfizer.com",
    coverImage: u("photo-1587854692152-cbe660dbde88", 1200),
    sector: "Healthcare",
    marketCap: "200B",
    price: "$40.00",
    changePercent: "+0.8%",
    changePercentages: ["+2.0%", "+6.0%", "+12.0%", "-3.0%", "+18.0%", "+40.0%"],
  },
  {
    id: 6,
    name: "Johnson & Johnson",
    symbol: "JNJ",
    logo: "https://logo.clearbit.com/jnj.com",
    coverImage: u("photo-1576091160399-112ba8d25d1d", 1200),
    sector: "Healthcare",
    marketCap: "400B",
    price: "$160.00",
    changePercent: "-1.0%",
    changePercentages: ["-1.5%", "+4.0%", "+9.0%", "-6.0%", "+12.0%", "+25.0%"],
  },
];

export const MOCK_SECTORS = ["Technology", "Finance", "Healthcare"];

export const MOCK_NEWS = [
  {
    url: "https://www.reuters.com/technology/",
    image: u("photo-1611974789855-9c2a0a7236a3", 800),
    headline: "Markets weigh chip demand signals after earnings season",
    summary:
      "Analysts highlight mixed guidance from hardware suppliers while AI-related capex remains a focal point for large-cap tech.",
    publishedAt: "2026-04-28T10:00:00Z",
    source: "Reuters",
  },
  {
    url: "https://www.bloomberg.com/markets",
    image: u("photo-1590283603385-17ffb3a7f29f", 800),
    headline: "Regional banks stable as funding costs ease",
    summary:
      "Short-term funding pressures have moderated, supporting sentiment across mid-tier financial institutions.",
    publishedAt: "2026-04-26T14:30:00Z",
    source: "Bloomberg",
  },
  {
    url: "https://www.ft.com/global-economy",
    image: u("photo-1460925895917-afdab827c52f", 800),
    headline: "Healthcare majors focus on pipeline milestones",
    summary:
      "Large pharma names continue to emphasize late-stage trials and partnership announcements in quarterly commentary.",
    publishedAt: "2026-04-22T09:15:00Z",
    source: "Financial Times",
  },
  {
    url: "https://www.cnbc.com/markets/",
    image: u("photo-1642790106117-e829e14a795f", 800),
    headline: "Tech breadth improves as megacap earnings settle",
    summary:
      "Rotation into semiconductors and cloud infrastructure names helped benchmarks reclaim prior-week highs.",
    publishedAt: "2026-04-20T16:00:00Z",
    source: "CNBC",
  },
  {
    url: "https://www.wsj.com/finance",
    image: u("photo-1486406146926-c627a92ad1ab", 800),
    headline: "Commercial real estate exposure in focus for lenders",
    summary:
      "Investors monitor provisioning trends and loan growth updates across diversified banking franchises.",
    publishedAt: "2026-04-18T11:20:00Z",
    source: "WSJ",
  },
  {
    url: "https://www.reuters.com/business/healthcare-pharmaceuticals/",
    image: u("photo-1579684385127-1ef15d508118", 800),
    headline: "Biotech volatility ebbs after FDA calendar clears",
    summary:
      "A lighter regulatory calendar for large-cap drugmakers reduced event risk into the May rebalance window.",
    publishedAt: "2026-04-15T08:45:00Z",
    source: "Reuters",
  },
  {
    url: "https://www.bloomberg.com/news/economies",
    image: u("photo-1526304640581-d334cdbbf45e", 800),
    headline: "Dollar steadier as inflation prints converge with forecasts",
    summary:
      "Front-end rates consolidated while equity futures drifted higher on normalized macro surprise indexes.",
    publishedAt: "2026-04-12T13:10:00Z",
    source: "Bloomberg",
  },
  {
    url: "https://www.ft.com/companies",
    image: u("photo-1507679799987-c73779587ccf", 800),
    headline: "Consumer resilience shows up in discretionary spending mock series",
    summary:
      "Our bundled demo dataset mirrors resilient spending patterns across premium electronics and experiences.",
    publishedAt: "2026-04-08T19:00:00Z",
    source: "FT",
  },
  {
    url: "https://www.cnbc.com/investing/",
    image: u("photo-1559526324-593bc073d938", 800),
    headline: "Energy complex tracks inventory draws in demo scenario",
    summary:
      "Illustrative inventory paths in LedgerLens mock feeds suggest balanced builds heading into summer driving season.",
    publishedAt: "2026-04-05T10:30:00Z",
    source: "CNBC",
  },
];

export const MOCK_WATCHLISTS = [
  {
    id: "wl-1",
    name: "AI & Semiconductors",
    description: "High-beta names tied to data-center GPUs and AI workloads.",
    coverImage: u("photo-1518770660439-4636190af475", 900),
    symbols: ["NVDA", "AAPL"],
  },
  {
    id: "wl-2",
    name: "Dividend Banks",
    description: "Large-cap financials with steady payout profiles (mock).",
    coverImage: u("photo-1560472354-b33ff0c44a43", 900),
    symbols: ["JPM", "GS"],
  },
  {
    id: "wl-3",
    name: "Healthcare Core",
    description: "Pharma and diversified healthcare for defensive sleeves.",
    coverImage: u("photo-1579684385127-1ef15d508118", 900),
    symbols: ["PFE", "JNJ"],
  },
];

export const MOCK_EARNINGS = [
  {
    symbol: "NVDA",
    companyName: "NVIDIA Corporation",
    logo: MOCK_COMPANIES[0].logo,
    fiscalQuarter: "Q1 FY2027",
    reportDate: "2026-05-28",
    reportTime: "After close",
    epsEstimate: 5.75,
    epsActual: 6.12,
    surprisePct: "+6.4%",
    revenueDisplay: "$39.3B",
    beat: true,
    image: u("photo-1639762681485-074b7f938ba0", 640),
  },
  {
    symbol: "AAPL",
    companyName: "Apple Inc.",
    logo: MOCK_COMPANIES[1].logo,
    fiscalQuarter: "Q2 FY2026",
    reportDate: "2026-05-01",
    reportTime: "After close",
    epsEstimate: 1.54,
    epsActual: 1.58,
    surprisePct: "+2.6%",
    revenueDisplay: "$94.0B",
    beat: true,
    image: u("photo-1611186871348-b1ce696e52c9", 640),
  },
  {
    symbol: "JPM",
    companyName: "JPMorgan Chase & Co.",
    logo: MOCK_COMPANIES[2].logo,
    fiscalQuarter: "Q1 FY2026",
    reportDate: "2026-04-11",
    reportTime: "Before open",
    epsEstimate: 4.1,
    epsActual: 4.02,
    surprisePct: "-2.0%",
    revenueDisplay: "$42.1B",
    beat: false,
    image: u("photo-1563986768609-322da13575f3", 640),
  },
  {
    symbol: "GS",
    companyName: "Goldman Sachs",
    logo: MOCK_COMPANIES[3].logo,
    fiscalQuarter: "Q1 FY2026",
    reportDate: "2026-04-14",
    reportTime: "Before open",
    epsEstimate: 9.85,
    epsActual: 10.2,
    surprisePct: "+3.6%",
    revenueDisplay: "$14.6B",
    beat: true,
    image: u("photo-1611974789855-9c2a0a7236a3", 640),
  },
];

export const MOCK_TRANSCRIPTS = [
  {
    id: "tr-1",
    symbol: "NVDA",
    title: "Q4 FY2026 Earnings Call",
    date: "2026-02-26",
    duration: "62 min",
    excerpt:
      "Management discussed Blackwell ramp visibility, sovereign AI deals, and sustained data-center demand through FY2027.",
    image: u("photo-1558494949-ef010cbdcc31", 640),
  },
  {
    id: "tr-2",
    symbol: "AAPL",
    title: "Q1 FY2026 Earnings Call",
    date: "2026-01-30",
    duration: "54 min",
    excerpt:
      "Highlights included Services growth, installed base monetization, and regional performance across Greater China.",
    image: u("photo-1511707171634-5f897ff02aa9", 640),
  },
  {
    id: "tr-3",
    symbol: "JPM",
    title: "Q4 FY2025 Earnings Call",
    date: "2026-01-13",
    duration: "48 min",
    excerpt:
      "NII trajectory, credit quality, and markets revenue mix were focal points for analyst Q&A in this mock transcript.",
    image: u("photo-1554224155-6726b3ff858f", 640),
  },
  {
    id: "tr-4",
    symbol: "PFE",
    title: "Q4 FY2025 Earnings Call",
    date: "2026-02-04",
    duration: "51 min",
    excerpt:
      "Pipeline updates and cost restructuring milestones framed the forward outlook for the pharmaceutical portfolio.",
    image: u("photo-1587854692152-cbe660dbde88", 640),
  },
];

export const MOCK_PORTFOLIOS = [
  {
    id: "pf-1",
    name: "Growth sleeve",
    objective: "Long-term capital appreciation (demo allocation).",
    coverImage: u("photo-1460925895917-afdab827c52f", 1000),
    totalValue: "$128,450",
    dayChange: "+1.24%",
    positive: true,
    holdings: [
      { symbol: "NVDA", weightPct: 34, valueDisplay: "$43,673" },
      { symbol: "AAPL", weightPct: 28, valueDisplay: "$35,966" },
      { symbol: "JPM", weightPct: 22, valueDisplay: "$28,259" },
      { symbol: "GS", weightPct: 16, valueDisplay: "$20,552" },
    ],
  },
  {
    id: "pf-2",
    name: "Balanced income",
    objective: "Blend of dividend tilt and stability (mock).",
    coverImage: u("photo-1579621970563-ebec7560ff3e", 1000),
    totalValue: "$86,200",
    dayChange: "-0.32%",
    positive: false,
    holdings: [
      { symbol: "JPM", weightPct: 30, valueDisplay: "$25,860" },
      { symbol: "PFE", weightPct: 25, valueDisplay: "$21,550" },
      { symbol: "JNJ", weightPct: 25, valueDisplay: "$21,550" },
      { symbol: "AAPL", weightPct: 20, valueDisplay: "$17,240" },
    ],
  },
];

export function findCompanyBySymbol(symbol) {
  if (!symbol) return undefined;
  const upper = String(symbol).toUpperCase();
  return MOCK_COMPANIES.find((c) => c.symbol === upper);
}

export function searchCompanies(query) {
  const q = query.trim().toLowerCase();
  if (!q) return MOCK_COMPANIES;
  return MOCK_COMPANIES.filter(
    (c) =>
      c.symbol.toLowerCase().includes(q) || c.name.toLowerCase().includes(q)
  );
}
