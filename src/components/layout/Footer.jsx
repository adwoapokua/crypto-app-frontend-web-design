import { FaXTwitter, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa6";
import FooterColumn from "../common/FooterColumn";

export default function Footer() {
  const company = [
    "About",
    "Careers",
    "Affiliates",
    "Blog",
    "Press",
    "Security",
    "Investors",
    "Vendors",
    "Legal & privacy",
    "Cookie policy",
    "Cookie preferences",
    "Digital Asset Disclosures",
  ];

  const individuals = [
    "Buy & sell",
    "Earn free crypto",
    "Base App",
    "Coinbase One",
    "Debit Card",
  ];

  const businesses = [
    "Asset Listings",
    "Coinbase Business",
    "Payments",
    "Commerce",
    "Token Manager",
  ];

  const developers = [
    "Developer Platform",
    "Base",
    "Server Wallets",
    "Embedded Wallets",
    "Base Accounts (Smart Wallets)",
    "Onramp & Offramp",
    "x402",
    "Trade API",
    "Paymaster",
    "OnchainKit",
    "Data API",
    "Verifications",
    "Node",
    "AgentKit",
    "Staking",
  ];

  const support = [
    "Help center",
    "Contact us",
    "Create account",
    "ID verification",
    "Account information",
    "Payment methods",
    "Account access",
    "Supported crypto",
    "Status",
  ];

  const assetPrices = [
    "Bitcoin price",
    "Ethereum price",
    "Solana price",
    "XRP price",
  ];

  return (
    <footer className="bg-gray-50 border-t mt-20">
        {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">

        <div className="flex gap-2">
          <img src="/coinbase_logo.png" alt="logo" className="h-15 w-15"/>
        </div>

        <FooterColumn title="Company" links={company} />

        <div>
          <FooterColumn title="Individuals" links={individuals} />
          <FooterColumn title="Businesses" links={businesses} />
        </div>

        <FooterColumn title="Developers" links={developers} />

        <div>
          <FooterColumn title="Support" links={support} />
          <FooterColumn title="Asset prices" links={assetPrices} />
        </div>

      </div>

      {/* SOCIAL */}
      <div className="max-w-7xl mx-auto px-6 flex gap-6 text-xl pb-6">
        <FaXTwitter />
        <FaLinkedin />
        <FaInstagram />
        <FaTiktok />
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between text-sm text-gray-600">
          <div className="flex gap-3">
            <span>© 2026 Coinbase</span>
            <span>•</span>
            <span>Privacy</span>
            <span>•</span>
            <span>Terms & Conditions</span>
          </div>

          <div className="flex gap-3 mt-2 md:mt-0">
            <span>🌐 Global</span>
            <span>•</span>
            <span>English</span>
          </div>
        </div>
      </div>

    </footer>
  );
}