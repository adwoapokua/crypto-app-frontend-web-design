import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNewListings } from "../lib/api";
import CryptoNav from "../components/layout/CryptoNav";

export default function NewListings() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getNewListings();
        if (!data.success) { setError(data.message); return; }
        setListings(data.data);
      } catch {
        setError("Failed to load new listings.");
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  const timeAgo = (dateStr) => {
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    const hours = Math.floor(mins / 60);
    const days = Math.floor(hours / 24);
    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    return `${mins}m ago`;
  };

  return (
    <div className="min-h-screen bg-white">
      <CryptoNav></CryptoNav>

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <h1 className="text-3xl font-bold text-gray-900">New Listings</h1>
          </div>
          <p className="text-gray-500 text-sm">
            Recently added cryptocurrencies, newest first
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
              <span>Name</span>
              <span className="text-right">Price</span>
              <span className="text-right">24h Change</span>
              <span className="text-right">Listed</span>
            </div>

            {listings.length === 0 ? (
              <div className="px-6 py-12 text-center text-gray-400 text-sm">No new listings yet.</div>
            ) : (
              listings.map((crypto, i) => (
                <div
                  key={crypto._id}
                  className={`grid grid-cols-4 px-6 py-4 items-center hover:bg-gray-50 transition ${
                    i < listings.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  {/* Name */}
                  <div className="flex items-center gap-3">
                    {crypto.image ? (
                      <img src={crypto.image} alt={crypto.name} className="w-9 h-9 rounded-full object-cover" />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold">
                        {crypto.symbol?.slice(0, 2).toUpperCase()}
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-gray-900">{crypto.name}</p>
                        {i === 0 && (
                          <span className="text-xs bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded font-medium">New</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-400">{crypto.symbol?.toUpperCase()}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <p className="text-sm font-medium text-gray-900 text-right">
                    ${Number(crypto.price).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>

                  {/* Change */}
                  <p className={`text-sm font-medium text-right ${
                    crypto.change24h >= 0 ? "text-green-600" : "text-red-500"
                  }`}>
                    {crypto.change24h >= 0 ? "+" : ""}{Number(crypto.change24h).toFixed(2)}%
                  </p>

                  {/* Time ago */}
                  <p className="text-xs text-gray-400 text-right">
                    {timeAgo(crypto.createdAt)}
                  </p>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
