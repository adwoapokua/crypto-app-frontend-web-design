import { Button } from "../components/common/button";
import { Input } from "../components/common/input";
import HeroImage from "../assets/Hero.avif";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";

const coins = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    icon: "₿",
    iconBg: "bg-orange-500",
    iconColor: "text-white",
    price: "GHS 915,573.04",
    change: "2.39%",
    trend: "up",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    icon: "⟠",
    iconBg: "bg-indigo-500",
    iconColor: "text-white",
    price: "GHS 26,763.12",
    change: "1.60%",
    trend: "up",
  },
  {
    name: "Tether",
    symbol: "USDT",
    icon: "₮",
    iconBg: "bg-emerald-600",
    iconColor: "text-white",
    price: "GHS 11.22",
    change: "0.03%",
    trend: "up",
  },
  {
    name: "XRP",
    symbol: "XRP",
    icon: "✕",
    iconBg: "bg-neutral-800",
    iconColor: "text-white",
    price: "GHS 15.85",
    change: "1.10%",
    trend: "up",
  },
  {
    name: "BNB",
    symbol: "BNB",
    icon: "BNB",
    iconBg: "bg-yellow-400",
    iconColor: "text-neutral-900 text-[10px] font-bold",
    price: "GHS 7,086.41",
    change: "1.10%",
    trend: "up",
  },
  {
    name: "USDC",
    symbol: "USDC",
    icon: "USDC",
    iconBg: "bg-blue-600",
    iconColor: "text-white text-[9px] font-bold",
    price: "GHS 11.22",
    change: "--",
    trend: "neutral",
  },
];

const tabs = ["Tradable", "Top gainers", "New on Coinbase"];

function Home() {
    const [activeTab, setActiveTab] = useState("Tradable");

    return (
    <>
        <Navbar/>

        <main className="pt-30">
        <div className="flex gap-10 px-12 h-screen ">
        <div className="h-1351 w-260 rounded-4xl">
            <img src={HeroImage} alt="hero image" className="rounded-4xl"/>
            <p className="text-xs text-gray-500">Stocks and prediction markets not available in your jurisdiction.</p>
        </div>
        <div className="flex flex-col gap-4 py-40">
            <div className="gap-2">
                <p className="text-[80px] font-semibold">The future of finance is here.</p>
                <p className="text-[18px]">Trade crypto and more on a platform you can trust.</p>
            </div>
            <div className="flex gap-3">   
                <div><Input placeholder="satoshi@nakamoto.com" size="medium" rounded="large"/></div>
                <Link to="/signup"><Button size="large" rounded="large" label="Sign Up" variant="blue"></Button></Link>
            </div>  
        </div>
        </div>

    <div className="flex gap-10 px-25 bg-[#E9E9E9] py-15">
        <div className="flex flex-col gap-4 my-40">
            <div className="gap-2">
                <p className="text-[45px] font-semibold">Explore crypto like Bitcoin, <br/> Ethereum, and Dogecoin</p>
                <p className="text-[16px] text-[#696969]">Simply and securely buy, sell, and manage hundreds of cryptocurrencies.</p>
            </div>
            <div className="flex gap-3">
                <Link to="/crypto"><Button size="large" rounded="large" label="See more assets" variant="black"></Button></Link>
            </div>  
        </div>
        <div className="bg-[#0d0d0d] rounded-4xl p-10 w-180 shadow-2xl font-sans">
            {/* Tabs */}
            <div className="flex gap-1 mb-5">
                {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 ${
                    activeTab === tab
                        ? "bg-neutral-800 text-white"
                        : "text-neutral-500 hover:text-neutral-300"
                    }`}
                >
                    {tab}
                </button>
                ))}
            </div>

            {/* Coin List */}
            <div className="flex flex-col gap-0.5">
                {coins.map((coin) => (
                <div
                    key={coin.symbol}
                    className="flex items-center justify-between px-2 py-3 rounded-xl hover:bg-neutral-900 transition-colors duration-150 cursor-pointer"
                >
                    {/* Left */}
                    <div className="flex items-center gap-3.5">
                    <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${coin.iconBg}`}
                    >
                        <span className={`${coin.iconColor} text-base leading-none`}>
                        {coin.icon}
                        </span>
                    </div>
                    <span className="text-3xl font-medium text-neutral-100 tracking-tight">
                        {coin.name}
                    </span>
                    </div>

                    {/* Right */}
                    <div className="text-right">
                    <p className="font-mono text-lg font-medium text-neutral-100 tracking-tight">
                        {coin.price}
                    </p>
                    <p
                        className={`font-mono text-sm mt-0.5 ${
                        coin.trend === "up"
                            ? "text-green-500"
                            : "text-neutral-600"
                        }`}
                    >
                        {coin.trend === "up" ? `↗ ${coin.change}` : coin.change}
                    </p>
                    </div>
                </div>
                ))}
            </div>
            </div>
    </div>

     <div className="flex gap-10 px-30 h-screen pt-15">
        <div className="h-260 w-160 rounded-4xl">
            <img src="./Advanced.webp" alt="hero image" className="rounded-4xl"/>
        </div>
        <div className="flex flex-col gap-4 py-12">
            <div className="flex flex-col gap-15">
                <div className="h-20 w-140"> <p  className="text-[44px] font-semibold">Powerful tools, designed for the advanced trader.</p></div>
                <div className="h-20 w-130"><p className="text-[18px]">Powerful analytical tools with the safety and security of Coinbase deliver the ultimate trading experience. Tap into sophisticated charting capabilities, real-time order books, and deep liquidity across hundreds of markets.</p></div>
            </div>
            <div className="flex mt-7">
                <Link to="/signin"><Button size="large" rounded="large" label="Start trading" variant="black"></Button></Link> 
            </div>  
        </div>
    </div>

    <div className="flex gap-10 px-50 h-screen">
        <div className="flex flex-col gap-5 py-12">
            <div className="text-[#656565] text-sm border border-[#D8D8D8] h-10 w-30 flex justify-center items-center rounded-xl font-semibold">
                COINBASE ONE
            </div>
            <div className="flex flex-col gap-12">
                <div className="h-20 w-100"> <p  className="text-[44px] font-semibold">Zero trading fees, more rewards.</p></div>
                <div className="h-20 w-130"><p className="text-[18px]">Get more out of crypto with one membership: zero trading fees, boosted rewards, priority support, and more.</p></div>
            </div>
            <div>
                <Button size="large" rounded="large" label="Claim free trial" variant="black"></Button>
            </div>  
        </div>
         <div className="h-110 w-140 bg-[#EEF0F3] rounded-4xl flex justify-center items-center border border-[#D1D1D1]">
            <img src="./zero_fees_us .avif" alt="hero image" className="rounded-4xl h-110 w-120"/>
        </div>
    </div>

    <div className="flex gap-10 px-50 h-screen">
        <div className="flex justify-center items-center">
            <img src="./CB_LOLP__1_.webp" alt="hero image" className="rounded-4xl h-110 w-160  border border-[#D1D1D1]"/>
        </div>
        <div className="flex flex-col py-43">
            <div className="text-[#656565] text-sm border border-[#D8D8D8] h-10 w-30 flex justify-center items-center rounded-xl font-semibold mb-3">
                BASE APP
        </div>
        <div className="flex flex-col gap-18">
            <div className="h-20 w-140"> <p  className="text-[44px] font-semibold">Countless ways to earn crypto with the Base App.</p></div>
            <div className="h-20 w-130"><p className="text-[18px]">An everything app to trade, create, discover, and chat, all in one place.</p></div>
        </div>
        <div>
            <Button size="large" rounded="large" label="Learn more" variant="black"></Button>
        </div>  
        </div>
    </div>

    <div className="bg-[#e8e8e8] px-50 py-16 min-h-screen">
        <div className="flex justify-between items-start mb-12">
            <div className="text-[64px] font-semibold text-black w-120 h-70">
            New to crypto? Learn some crypto basics
            </div>
            <div className="flex flex-col gap-6 max-w-sm pt-2">
            <p className="text-[#555] text-xl ">
                Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between
            </p>
            <button className="w-fit bg-[#0a0a0a] text-white rounded-full px-7 py-3 text-sm font-semibold cursor-pointer">
                Read More
            </button>
            </div>
        </div>
    <div className="grid grid-cols-3 gap-6">
  
  <div>
    <img src="/usdc.avif" alt="USDC article" className="rounded-4xl mb-4 w-full h-48 object-cover"/>
    <h3 className="text-[34px] font-semibold text-black mb-3 leading-snug tracking-tight cursor-pointer hover:underline hover:decoration-2">
      USDC: The digital dollar for the global crypto economy
    </h3>
    <p className="text-[#666] text-[17px] leading-relaxed">
      Coinbase believes crypto will be part of the solution for creating an open financial system that is both more efficient and more...
    </p>
  </div>

  <div>
    <img src="/Replace_Bank.avif" alt="Crypto bank article" className="rounded-4xl mb-4 w-full h-48 object-cover"/>
    <h3 className="text-[34px] font-semibold text-black mb-3 leading-snug tracking-tight cursor-pointer hover:underline hover:decoration-2">
      Can crypto really replace your bank account?
    </h3>
    <p className="text-[#666] text-[17px] leading-relaxed">
      If you're a big enough fan of crypto, you've probably heard the phrase "be your own bank" or the term "bankless" — the idea being that...
    </p>
  </div>

  <div>
    <img src="/Learn_Illustration_Ultimate_Guide_Bitcoin.png" alt="Crypto investing article" className="rounded-4xl mb-4 w-full h-48 object-cover"/>
    <a className="text-[34px] font-semibold text-black mb-3 leading-snug tracking-tight cursor-pointer hover:underline hover:decoration-2">
      When is the best time to invest in crypto?
    </a>
    <p className="text-[#666] text-[17px] leading-relaxed">
      Cryptocurrencies like Bitcoin can experience daily (or even hourly) price volatility. As with any kind of investment, volatility may cause...
    </p>
  </div>

</div>
    </div>

    <div className="flex gap-10 px-12 h-screen">
        <div className="flex flex-col gap-4 py-20">
            <div className="gap-2">
                <p className="text-[80px] font-semibold">Take control of your money.</p>
                <p className="text-[18px]">Start your portfolio today and discover crypto.</p>
            </div>
            <div className="flex gap-3">   
                <div><Input placeholder="satoshi@nakamoto.com" size="medium" rounded="large"/></div>
                <Link to="/signup"><Button size="large" rounded="large" label="Sign Up" variant="blue"></Button></Link> 
            </div>  
        </div>
        <div className="w-260 rounded-4xl">
            <img src="./image.png" alt="image" className="rounded-4xl"/>
        </div>
    </div>
    </main>

    <Footer />
    </>
  )
}

export default Home
