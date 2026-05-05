import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getGainers } from "../lib/api";
import CryptoNav from "../components/layout/CryptoNav";

export default function Gainers() {
  const [gainers, setGainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getGainers();
        if (!data.success) { setError(data.message); return; }
        setGainers(data.data);
      } catch {
        setError("Failed to load gainers.");
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <CryptoNav></CryptoNav>

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-green-500 text-xl">↑</span>
            <h1 className="text-3xl font-bold text-gray-900">Top Gainers</h1>
          </div>
          <p className="text-gray-500 text-sm">
            Cryptocurrencies with the highest 24h price increase
          </p>
        </div>

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
            <div className="grid grid-cols-4 px-6 py-3 bg-gray-50 text-xs font-medium text-gray-400 uppercase tracking-wide">
              <span>Rank</span>
              <span>Name</span>
              <span className="text-right">Price</span>
              <span className="text-right">24h Change</span>
            </div>

            {gainers.length === 0 ? (
              <div className="px-6 py-12 text-center text-gray-400 text-sm">No gainers found.</div>
            ) : (
              gainers.map((crypto, i) => (
                <div
                  key={crypto._id}
                  className={`grid grid-cols-4 px-6 py-4 items-center hover:bg-gray-50 transition ${
                    i < gainers.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  {/* Rank */}
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-bold ${
                      i === 0 ? "text-yellow-500" : i === 1 ? "text-gray-400" : i === 2 ? "text-amber-600" : "text-gray-300"
                    }`}>
                      #{i + 1}
                    </span>
                  </div>

                  {/* Name */}
                  <div className="flex items-center gap-3">
                    {crypto.image ? (
                      <img src={crypto.image} alt={crypto.name} className="w-9 h-9 rounded-full object-cover" />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs font-bold">
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

                  {/* Change */}
                  <div className="flex items-center justify-end gap-1">
                    <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
                      ↑ +{Number(crypto.change24h).toFixed(2)}%
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
