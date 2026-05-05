import { AiOutlineStar as Star } from 'react-icons/ai';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';

const Explore = ()=>{
const stats = [
  {
    title: "Total market cap",
    value: "GHS 24.70T",
    change: "+2.16%",
    positive: true,
  },
  {
    title: "Trade volume",
    value: "GHS 2.24T",
    change: "+78.54%",
    positive: true,
  },
  {
    title: "Buy-sell ratio",
    value: "GHS 0.76",
    change: "-0.45%",
    positive: false,
  },
];

const movers = [
  {
    name: "FLOW",
    change: "+22.22%",
    price: "GHS 0.53",
    img: "/flow.png",
  },
  {
    name: "KEYCAT",
    change: "+21.01%",
    price: "GHS 0.0071",
    img: "/keycat.png",
  },
];
 const assets = [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      price: "GHS 743,328.25",
      change: "+2.29%",
      changeType: "up",
      marketCap: "GHS 14.9T",
      volume: "GHS 571.1B",
      icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png"
    },
    {
      id: 2,
      name: "Ethereum",
      symbol: "ETH",
      price: "GHS 21,845.81",
      change: "+3.37%",
      changeType: "up",
      marketCap: "GHS 2.6T",
      volume: "GHS 263B",
      icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png"
    },
    {
      id: 3,
      name: "Tether",
      symbol: "USDT",
      price: "GHS 10.79",
      change: "+0.02%",
      changeType: "up",
      marketCap: "GHS 2.0T",
      volume: "GHS 1.0T",
      icon: "https://cryptologos.cc/logos/tether-usdt-logo.png"
    }
  ];


  return (
    <main >
      <Navbar/>
      <section className="max-w-7xl mx-auto p-8 grid grid-cols-3 gap-10 pt-30">
        <div className="col-span-2 space-y-12">

        
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-semibold mb-2">Explore crypto</h1>
            <p className="text-gray-500">
              Coinbase 50 Index is up <span className="text-green-600">↗ 2.29%</span> (24hrs)
            </p>
          </div>

          <input
            placeholder="Search for an asset"
            className="bg-gray-200 px-6 py-4 rounded-full w-96 outline-none"
          />
        </div>

        
        <div>
          <h2 className="text-3xl font-semibold mb-4">Market stats</h2>

          <p className="text-gray-500 max-w-xl mb-8">
            The overall crypto market is growing this week. As of today,
            the total crypto market capitalization is 24.7 trillion,
            representing a 0.05% increase from last week.
          </p>

         
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-200 rounded-2xl p-6"
              >
                <p className="text-gray-600">{stat.title}</p>

                <div className="flex items-center gap-2 mt-2">
                  <h3 className="text-xl font-semibold">{stat.value}</h3>
                  <span
                    className={`text-sm ${
                      stat.positive ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>

                
                <div className="mt-6 h-12 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="space-y-10">

       
        <div className="bg-blue-600 text-white p-8 rounded-3xl">
          <h3 className="text-xl font-semibold mb-2">Get started</h3>
          <p className="mb-6">Create your account today</p>

          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold">
            Sign up
          </button>
        </div>

        
        <div>
          <h3 className="text-2xl font-semibold mb-2">Top movers</h3>
          <p className="text-gray-500 mb-6">24hr change</p>

          <div className="flex gap-6">
            {movers.map((coin, index) => (
              <div
                key={index}
                className="bg-gray-200 p-6 rounded-2xl w-40"
              >
                <img
                  src={coin.img}
                  alt=""
                  className="w-10 h-10 mb-4 rounded-full"
                />

                <p className="font-semibold">{coin.name}</p>

                <p className="text-green-600">{coin.change}</p>

                <p className="text-gray-600 text-sm">{coin.price}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
      </section>
      <section>
        <div className="bg-white rounded-xl shadow p-6 w-full">

      
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">
          Crypto market prices
          <span className="text-gray-400 text-sm ml-2">18,532 assets</span>
        </h1>

        <p className="text-gray-500 mt-2 text-sm max-w-xl">
          The overall crypto market is growing this week. As of today,
          the total crypto market capitalization is 24.7 trillion,
          representing a 0.05% increase from last week.
        </p>

        <button className="text-blue-600 text-sm mt-2">
          Read more
        </button>
      </div>

      
      <div className="flex gap-3 mb-6 flex-wrap">
        {["All assets", "1D", "GHS", "10 rows"].map((item, i) => (
          <button
            key={i}
            className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200"
          >
            {item}
          </button>
        ))}
      </div>

      
      <div className="grid grid-cols-6 text-gray-500 text-sm border-b pb-3">
        <span>Asset</span>
        <span>Market price</span>
        <span>Chart</span>
        <span>Change</span>
        <span>Mkt cap</span>
        <span>Volume</span>
      </div>

      
      {assets.map((asset) => (
        <div
          key={asset.id}
          className="grid grid-cols-6 items-center py-4 border-b hover:bg-gray-50"
        >
          
          <div className="flex items-center gap-3">
            <Star size={16} className="text-gray-400" />

            <img
              src={asset.icon}
              alt={asset.name}
              className="w-8 h-8"
            />

            <div>
              <p className="font-medium">{asset.name}</p>
              <p className="text-xs text-gray-500">{asset.symbol}</p>
            </div>
          </div>

        
          <span>{asset.price}</span>

          
          <div className="h-6 w-24 bg-gray-100 rounded"></div>

         
          <span
            className={`${
              asset.changeType === "up"
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {asset.change}
          </span>

          
          <span>{asset.marketCap}</span>

          
          <span>{asset.volume}</span>
        </div>
      ))}
    </div>
      </section>
      
      
      <Footer/>
    </main>
  );
};

export default Explore;