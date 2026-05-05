export const featuredArticle = {
  id: 1,
  type: "VIDEO TUTORIAL",
  title: "When is the best time to invest in crypto?",
  excerpt:
    "When prices are fluctuating, how do you know when to buy? Learn more about using dollar-cost averaging to weather price volatility.",
  // Using a placeholder gradient instead of a real thumbnail for now
  thumbnail: null,
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // swap with real video!
  slug: "best-time-to-invest",
};

export const popularArticles = [
  { id: 1, category: "BEGINNER'S GUIDE", title: "What is cryptocurrency?", slug: "what-is-crypto" },
  { id: 2, category: "GETTING STARTED", title: "How to earn crypto rewards", slug: "earn-rewards" },
  { id: 3, category: "GETTING STARTED", title: "How to add crypto to your Coinbase Wallet", slug: "add-crypto-wallet" },
  { id: 4, category: "YOUR CRYPTO", title: "Tax forms, explained: A guide to U.S. tax forms and crypto reports", slug: "tax-forms" },
  { id: 5, category: "GETTING STARTED", title: "Beginner's guide to dapps", slug: "dapps-guide" },
  { id: 6, category: "MARKET UPDATE", title: "Everything you need to know about the first-ever U.S. Bitcoin ETF", slug: "bitcoin-etf" },
];

// Crypto basics section
export const cryptoBasicsArticles = [
  {
    id: 1,
    category: "BEGINNER'S GUIDE",
    title: "What is Bitcoin?",
    excerpt: "Bitcoin is the world's first widely adopted cryptocurrency — it allows for secure and seamless peer-to-peer transactions on the internet.",
    slug: "what-is-bitcoin",
    bgColor: "bg-emerald-100",
    highlighted: true,
  },
  {
    id: 2,
    category: "BEGINNER'S GUIDE",
    title: "Guide to DeFi tokens and altcoins",
    excerpt: "From Aave to Zcash, decide what to trade with our beginner's guide",
    slug: "defi-tokens-altcoins",
    bgColor: "bg-gray-900",
    highlighted: true,
    dark: true,
  },
  {
    id: 3,
    category: "BEGINNER'S GUIDE",
    title: "What is Ethereum?",
    slug: "what-is-ethereum",
    bgColor: "bg-blue-600",
  },
  {
    id: 4,
    category: "KEY TERM",
    title: "What is DeFi?",
    slug: "what-is-defi",
    bgColor: "bg-gray-100",
    highlighted: true, // blue link title
  },
  {
    id: 5,
    category: "BEGINNER'S GUIDE",
    title: "What is a stablecoin?",
    slug: "what-is-stablecoin",
    bgColor: "bg-gray-200",
  },
  {
    id: 6,
    category: "GLOSSARY",
    title: "Don't let FUD give you FOMO or you'll end up REKT — crypto slang, explained",
    slug: "crypto-slang",
    bgColor: "bg-green-500",
  },
];

// "What is..." glossary terms
export const glossaryTerms = [
  "Bitcoin", "Blockchain", "Cardano", "Crypto wallet",
  "DeFi", "Ethereum", "Fork", "Inflation",
  "Market cap", "NFT", "Private key", "Protocol",
  "Smart contract", "Token", "Volatility", "Memecoin",
];

// Tips & tutorials
export const tipsArticles = [
  {
    id: 1,
    category: "GETTING STARTED",
    title: "How to donate crypto",
    slug: "donate-crypto",
    bgColor: "bg-teal-200",
  },
  {
    id: 2,
    category: "VIDEO TUTORIAL",
    title: "How to set up a crypto wallet",
    slug: "setup-wallet",
    bgColor: "bg-blue-600",
    isVideo: true,
  },
  {
    id: 3,
    category: "VIDEO TUTORIAL",
    title: "When is the best time to invest in crypto?",
    slug: "best-time-invest",
    bgColor: "bg-gray-100",
    isVideo: true,
    highlighted: true,
  },
  {
    id: 4,
    category: "YOUR CRYPTO",
    title: "How to invest in crypto via your retirement account",
    slug: "crypto-retirement",
    bgColor: "bg-gray-900",
    dark: true,
  },
];

// Advanced trading
export const advancedArticles = [
  {
    id: 1,
    category: "KEY TERM",
    title: "What is technical analysis?",
    slug: "technical-analysis",
    bgColor: "bg-gray-100",
  },
  {
    id: 2,
    category: "ADVANCED GUIDE",
    title: "How can I use crypto futures market data for spot trading?",
    slug: "futures-spot-trading",
    bgColor: "bg-gray-900",
    dark: true,
  },
  {
    id: 3,
    category: "ADVANCED GUIDE",
    title: "How to read advanced trading charts",
    slug: "trading-charts",
    bgColor: "bg-green-500",
    isVideo: true,
  },
  {
    id: 4,
    category: "KEY TERM",
    title: "What is an order book?",
    slug: "order-book",
    bgColor: "bg-blue-500",
    isVideo: true,
  },
];

// Futures articles
export const futuresArticles = [
  {
    id: 1,
    title: "Futures: Introductions and origins",
    slug: "futures-intro",
    bgColor: "bg-gray-900",
    dark: true,
  },
  {
    id: 2,
    title: "Futures fundamentals: Understanding the basics",
    slug: "futures-fundamentals",
    bgColor: "bg-gray-900",
    dark: true,
  },
  {
    id: 3,
    title: "Opening, holding, and closing a position in the futures market",
    slug: "futures-positions",
    bgColor: "bg-gray-900",
    dark: true,
  },
  {
    id: 4,
    title: "Trading strategies: Speculating, hedging, and spreading in the futures market",
    slug: "futures-strategies",
    bgColor: "bg-gray-900",
    dark: true,
  },
];

// Wallet articles
export const walletArticles = [
  {
    id: 1,
    category: "GETTING STARTED",
    title: "What's the difference between Coinbase and Coinbase Wallet?",
    excerpt: "And how can a wallet help me access NFTs or DeFi? Your self-custody wallet questions, answered",
    slug: "coinbase-vs-wallet",
    bgColor: "bg-gray-200",
  },
  {
    id: 2,
    category: "VIDEO TUTORIAL",
    title: "How to set up a crypto wallet",
    excerpt: "Learn how to setup and get started with a crypto wallet.",
    slug: "setup-wallet",
    bgColor: "bg-blue-600",
    isVideo: true,
    dark: true,
  },
  {
    id: 3,
    category: "GETTING STARTED",
    title: "How to add crypto to your Coinbase Wallet",
    excerpt: "A quick guide on how to add crypto to your Coinbase self-custody wallet.",
    slug: "add-crypto-to-wallet",
    bgColor: "bg-amber-100",
  },
  {
    id: 4,
    title: "How to send or receive crypto using Coinbase Wallet",
    excerpt: "Coinbase Wallet helps you unlock one of the most significant features of crypto: the ability to send or receive peer-to-peer transfers without any financial intermediaries.",
    slug: "send-receive-wallet",
    bgColor: "bg-blue-600",
    dark: true,
  },
];

// Nav sections config - makes it easy to add more later!
export const navSections = [
  { label: "Crypto basics", icon: "🧠", href: "#crypto-basics" },
  { label: "Tips and tutorials", icon: "📚", href: "#tips-tutorials" },
  { label: "Advanced trading", icon: "📊", href: "#advanced-trading" },
  { label: "Futures", icon: "🔮", href: "#futures" },
];
