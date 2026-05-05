import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCrypto } from "../lib/api";
import CryptoNav from "../components/layout/CryptoNav";
// import { removeToken } from "../api";
// import { useNavigate } from "react-router-dom";

export default function Crypto() {
  // const navigate = useNavigate();
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getAllCrypto();
        if (!data.success) { setError(data.message); return; }
        setCryptos(data.data);
      } catch {
        setError("Failed to load cryptocurrencies.");
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  const filtered = cryptos.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.symbol.toLowerCase().includes(search.toLowerCase())
  );

  // const handleLogout = () => { removeToken(); navigate("/login"); };

  return (
    <div className="min-h-screen bg-white">
      <CryptoNav></CryptoNav>

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Prices</h1>
          <p className="text-gray-500 text-sm">
            Today's cryptocurrency prices on Coinbase
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search cryptocurrencies"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        {/* Table */}
        {loading ? (
          <div className="space-y-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-50 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : error ? (
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">{error}</div>
        ) : (
          <div className="border border-gray-100 rounded-2xl overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-4 px-6 py-3 bg-gray-50 text-xs font-medium text-gray-400 uppercase tracking-wide">
              <span>Name</span>
              <span className="text-right">Price</span>
              <span className="text-right">24h Change</span>
              <span className="text-right">Symbol</span>
            </div>

            {filtered.length === 0 ? (
              <div className="px-6 py-12 text-center text-gray-400 text-sm">No results found.</div>
            ) : (
              filtered.map((crypto, i) => (
                <div
                  key={crypto._id}
                  className={`grid grid-cols-4 px-6 py-4 items-center hover:bg-gray-50 transition ${
                    i < filtered.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  {/* Name + image */}
                  <div className="flex items-center gap-3">
                    {crypto.image ? (
                      <img src={crypto.image} alt={crypto.name} className="w-9 h-9 rounded-full object-cover" />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold">
                        {crypto.symbol?.slice(0, 2).toUpperCase()}
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{crypto.name}</p>
                      <p className="text-xs text-gray-400">{crypto.symbol?.toUpperCase()}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <p className="text-sm font-medium text-gray-900 text-right">
                    ${Number(crypto.price).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>

                  {/* 24h change */}
                  <p className={`text-sm font-medium text-right ${
                    crypto.change24h >= 0 ? "text-green-600" : "text-red-500"
                  }`}>
                    {crypto.change24h >= 0 ? "+" : ""}{Number(crypto.change24h).toFixed(2)}%
                  </p>

                  {/* Symbol badge */}
                  <div className="flex justify-end">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-mono">
                      {crypto.symbol?.toUpperCase()}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
