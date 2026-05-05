function CryptoNav({image}) {
  return (
    <nav className="border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 bg-white z-10">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2 my-0">
              <img src="/coinbase_logo.png" alt="logo" className="h-10 w-10"/>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500">
            <Link to="/crypto" className="hover:text-gray-900 transition">Prices</Link>
            <Link to="/crypto/gainers" className="hover:text-gray-900 transition">Gainers</Link>
            <Link to="/crypto/new" className="hover:text-gray-900 transition">New</Link>
          </div>
        </div> 
        <Link to="/profile" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
          <span className="text-xs font-semibold text-gray-600"><img src={image} alt="user's profile" /></span>
        </Link>
      </nav>
  )
}

export default CryptoNav