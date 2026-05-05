import dollarCost from '../assets/img/Dollar-Cost_avg.png'
import head from '../assets/img/3.png'
import book from '../assets/img/4.png'
import graph from '../assets/img/AdvancedTrading.png'
import clock from '../assets/img/futures_anchor.png'
import hand from '../assets/img/Learn_Bit_hand.png'
import coin from '../assets/img/Alt-Coin.png'
import eth from '../assets/img/what-is-ethereum.png'
import defi from '../assets/img/Learn_Illustration_What_is_DeFi.jpg'
import stableCoin from '../assets/img/Learn_Illustration_What_is_a_stablecoin.jpg'
import group from '../assets/img/Group_31612615.png'
import send from '../assets/img/Learn_Illustration_How_to_Send_Crypto.png'
import donate from '../assets/img/Donating-Crypto.png'
import retirement from '../assets/img/Crypto___Retirement_Op2-D.png'
import dollar from '../assets/img/Dollar-Cost_avg.png'
import Obook from '../assets/img/order-book__1_.png'
import at from '../assets/img/advance-trading.png'
import TA from '../assets/img/Learn_Illustration_What_is_Technical_Analysis__1_.png'
import one from '../assets/img/Article_1_-_Visual_-_1.png'
import two from '../assets/img/Article_2_-_Visual_-_1.png'
import three from '../assets/img/Article_3_-_Visual_-_1.png'
import four from '../assets/img/Article_4_-_Visual_-_1.png'
import video from '../assets/img/Video_02.png'
import wallet from '../assets/img/How_to_Coinbase_Wallet_Op1-B.png'
import fund from '../assets/img/how_to_fund_coinbase_wallet.png'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
const Learn = () => {
  const popularData = [
    {title:"Beginner's guide",
      text: "What is cryptocurrency?"
    },
    {title:"Getting Started",
      text: "How to earn crypto rewards"
    },
    {title:"Getting Started",
      text: "How to add crypto to your Coinbase Wallet"
    },
    {title:"Your crypto",
      text: "Tax forms, explained: A guide to U.S. tax forms and crypto reports"
    },
    {title:"Getting started",
      text: "Beginner's guide to dapps"
    },
    {title:"Market Update",
      text: "Everything you need to know about the first-ever U.S. Bitcoin ETF"
    }
  ]
  const cardsData = [
    {
      image:eth,
      text:"Beginner's guide",
      subText:"What is Ethereum?"
    },
    {
      image:defi,
      text:"Key term",
      subText:"What is Defi?"
    },
    {
      image:stableCoin,
      text:"Beginner's guide",
      subText:"What is Stablecoin"
    },
    {
      image:group,
      text:"Glossary",
      subText:"Don’t let FUD give you FOMO or you’ll end up REKT — crypto slang, explained"
    }
  ]
      const topics = [
      "Bitcoin",
      "Blockchain",
      "Cardano",
      "Crypto wallet",
      "DeFi",
      "Ethereum",
      "Fork",
      "Inflation",
      "Market cap",
      "NFT",
      "Private key",
      "Protocol",
      "Smart contract",
      "Token",
      "Volatility memecoin",
    ];

      const tutorials = [
    {
      id: 1,
      label: "GETTING STARTED",
      title: "How to donate crypto",
      image: donate
      
    },
    {
      id: 2,
      label: "VIDEO TUTORIAL",
      title: "How to set up a crypto wallet",
      image: send
      
    },
    {
      id: 3,
      label: "GETTING STARTED",
      title: "Understanding blockchain",
      image: dollar
      
    },
    {
      id: 4,
      label: "GUIDE",
      title: "Crypto investing basics",
      image: retirement,
      
    }
  ]
   const trading = [
    {
      id: 1,
      label: "key term",
      title: "What is technical analysis?",
      image: TA
      
    },
    {
      id: 2,
      label: "Advanced guide",
      title: "How can I use crypto futures market data for spot trading?",
      image: send
      
    },
    {
      id: 3,
      label: "Advanced Guide",
      title: "How to read advanced trading charts",
      image: at
      
    },
    {
      id: 4,
      label: "GUIDE",
      title: "What is an order book?",
      image: Obook,
      
    }
  ];

  const articles = [
    {
      id: 1,
      
      title: "Futures: Introductions and origins",
      image: one
      
    },
    {
      id: 2,
      title: "Futures fundamentals: Understanding the basics",
      image: two
      
    },
    {
      id: 3,
      
      title: "Opening, holding, and closing a position in the futures market",
      image: three
      
    },
    {
      id: 4,
      
      title: "Trading strategies: Speculating, hedging, and spreading in the futures market",
      image: four,
      
    }
  ]
   const things = [
    {
      id: 1,
      label: "key term",
      title: "What is technical analysis?",
      image: wallet
      
    },
    {
      id: 2,
      label: "Advanced guide",
      title: "How can I use crypto futures market data for spot trading?",
      image: video
      
    },
    {
      id: 3,
      label: "Advanced Guide",
      title: "How to read advanced trading charts",
      image: fund
      
    },
    {
      id: 4,
      label: "GUIDE",
      title: "What is an order book?",
      image: send,
      
    }
  ];

  

  
  
  return (
    <>
    <Navbar/>
    <main className='px-10 py-14'>
      <section className='mt-20'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-6xl'>
          Crypto questions, answered
        </h1>
        <p className='mt-2 text-gray-500'>
          Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between
        </p>
        </div>
        <div className='grid grid-cols-[2fr_1fr] gap-10 mt-6'> 
        <div className=''>
            <h4 className='font-semibold text-xl'>
              Featured
            </h4>
            <img src={dollarCost} alt=""  className='hover:cursor-pointer mt-6'/>
            <p className='text-gray-500 text-xs mt-2 font-semibold' >
              VIDEO TUTORIAL
            </p>
            <h1 className='text-4xl mt-3'>
              When is the best time to invest in crypto?
            </h1>
            <p className='mt-3 text-gray-500'> 
              When prices are fluctuating, how do you know when to buy? Learn more about using dollar-cost averaging to weather price volatility.
            </p>
        </div>
        <div className=''>
            <h4 className='font-semibold text-xl'>
              Popular
            </h4>
            <div >
              {
                popularData.map(data =>(
                  <div className='mt-6 '>
                    <h1 className='uppercase text-gray-500 text-sm '>
                      {data.title}
                    </h1>
                    <a href="" className='hover:text-(--primary)  mt-2 text-xl font-semibold'>
                      {data.text}
                    </a>
                  </div>
                )
              )}
            </div>
        </div>
        </div>
        <div className='flex justify-between'>
          <div className=' flex  items-center gap-3 mt-6'>
              <img src={head} alt="" />
              <div>
                <h1 className='text-xl font-semibold'>
                  Crypto basics
                </h1>
                <p>
                See more →
                </p>
              </div>
        </div>
        <div className=' flex  items-center gap-3 mt-6'>
              <img src={book} alt="" />
              <div>
                <h1 className='text-xl font-semibold'>
                  Tips and tutorials
                </h1>
                <p>
                See more →
                </p>
              </div>
        </div>
        <div className=' flex  items-center gap-3 mt-6'>
              <img src={graph} alt="" />
              <div>
                <h1 className='text-xl font-semibold'>
                  Advanced trading
                </h1>
                <p>
                See more →
                </p>
              </div>
        </div>
        <div className=' flex  items-center gap-3 mt-6'>
              <img src={clock} alt="" className='w-14 h-14' />
              <div>
                <h1 className='text-xl font-semibold'>
                  Futures
                </h1>
                <p>
                See more →
                </p>
              </div>
        </div>
        </div>
      </section>
      <hr  className='border border-gray-200 w-full mt-20'/>
      
      <section className='min-h-screen '>
              <div className='flex flex-col justify-center items-center p-10'>
        <h1 className='text-5xl'>
          Crypto Basics
        </h1>
        <p className='text-gray-500 mt-2'>
          New to crypto? Not for long — start with these guides and explainers
        </p>
      </div>
      <div className='grid grid-cols-2 gap-6'>
              <div className='space-y-3'>
                <img src={hand} alt="" />
                <p className='uppercase text-gray-500 text-sm mt-2'>
                  Beginner's guide
                </p>
                <h1 className='text-4xl hover:text-(--primary) cursor-pointer'>
                  What is Bitcoin?
                </h1>
                <p>
                  Bitcoin is the world's first widely adopted cryptocurrency — it allows for secure and seamless peer-to-peer transactions on the internet.
                </p>
              </div>
              <div className='space-y-3'>
                <img src={coin} alt="" />
                <p className='uppercase text-gray-500 text-sm mt-2'>
                  Beginner's guide
                </p>
                <h1 className='text-4xl hover:text-(--primary) cursor-pointer'>
                  Guide to DeFi tokens and altcoins
                </h1>
                <p>
                 From Aave to Zcash, decide what to trade with our beginner's guide
                </p>
              </div>
      </div>
      <div className='grid grid-cols-4 mt-5'>
        {cardsData.map((data, index)=>(
          <div key={index} className='space-y-3 '>
                <img src={data.image} alt="" className='w-64 h-96 object-cover' />
                <p className='uppercase text-gray-500 text-sm mt-2'>
                  {data.text}
                </p>
                <h1 className='text-xl font-semibold hover:text-(--primary) cursor-pointer'>
                  {data.subText}
                </h1>
                
              </div>
        ))
          
        }
      </div>
      <div className='flex justify-center m-20'>
        <button className='bg-(--primary) px-4 py-3 rounded-lg text-white'>See more crypto basics</button>
      </div>

      </section>

      <section className="w-full min-h-screen bg-gray-200 flex flex-col items-center justify-center px-6 py-20">
      
      
      <h2 className="text-5xl font-semibold mb-14">What is...</h2>

      
      <div className="max-w-6xl flex flex-wrap justify-center gap-6 mb-16">
        {topics.map((topic, index) => (
          <button
            key={index}
            className="bg-white px-4 py-3 font-semibold rounded-lg shadow-sm text-lg  hover:text-(--primary)"
          >
            {topic}
          </button>
        ))}
      </div>

      
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
        See more
      </button>

    </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className='text-4xl text-center '>
          Tips and tutorials
        </h1>
        <p className='text-gray-500 text-center'>
          Get practical, step-by-step answers to all things crypto
        </p>

      <div className="grid md:grid-cols-2 gap-12 mt-4">

        {tutorials.map((item) => (
          <div key={item.id} className="cursor-pointer">

            <img
              src={item.image}
              alt={item.title}
              className="w-full  mb-6"
            />

            <p className="text-sm font-semibold text-gray-500 mb-2">
              {item.label}
            </p>

            <h2 className={`text-3xl font-semibold hover:text-(--primary)`}>
              {item.title}
            </h2>

          </div>
        ))}

      </div>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
        See more tips and tutorials 
      </button>

    </section>
    <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className='text-4xl text-center font-semibold'>
          Advanced Trading
        </h1>
        <p className='text-gray-500 text-center'>
         Ready to advance? Learn the tools and terminology you need to take control of your trades.
        </p>

      <div className="grid md:grid-cols-2 gap-12 mt-4">

        {trading.map((item) => (
          <div key={item.id} className="cursor-pointer">

            <img
              src={item.image}
              alt={item.title}
              className="w-full  mb-6"
            />

            <p className="text-sm font-semibold text-gray-500 mb-2">
              {item.label}
            </p>

            <h2 className={`text-3xl font-semibold hover:text-(--primary)`}>
              {item.title}
            </h2>

          </div>
        ))}

      </div>
      <div className='flex justify-center m-10'>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
        See more advanced trading
      </button>
      </div>

    </section>
    <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className='text-4xl text-center font-semibold'>
          Futures
        </h1>
        <p className='text-gray-500 text-center'>
         New to futures trading? Get up to speed on the basics.
        </p>

      <div className="grid md:grid-cols-2 gap-12 mt-4">

        {articles.map((item) => (
          <div key={item.id} className="cursor-pointer">

            <img
              src={item.image}
              alt={item.title}
              className="w-full  mb-6"
            />

            

            <h2 className={`text-3xl font-semibold hover:text-(--primary)`}>
              {item.title}
            </h2>

          </div>
        ))}

      </div>
      <div className='flex justify-center m-10'>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
        See more about futures
      </button>
      </div>
      

    </section>
    <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className='text-4xl text-center font-semibold'>
          All things wallet
        </h1>
        <p className='text-gray-500 text-center'>
         Earn yield, dive into crypto apps, control your holdings, and much more
        </p>

      <div className="grid md:grid-cols-2 gap-12 mt-4">

        {things.map((item) => (
          <div key={item.id} className="cursor-pointer">

            <img
              src={item.image}
              alt={item.title}
              className="w-full  mb-6"
            />

            

            <h2 className={`text-3xl font-semibold hover:text-(--primary)`}>
              {item.title}
            </h2>

          </div>
        ))}

      </div>
      <div className='flex justify-center m-10'>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
        See more about wallet articles
      </button>
      </div>
      

    </section>
    <Footer/>
    </main>
    </>
  )
}

export default Learn