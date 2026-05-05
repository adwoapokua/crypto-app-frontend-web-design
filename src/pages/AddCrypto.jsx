import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addCrypto } from "../lib/api";

export default function AddCrypto() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    symbol: "",
    price: "",
    image: "",
    hourChange: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = await addCrypto({
        ...form,
        price: Number(form.price),
        hourChange: Number(form.hourChange),
      });
      if (!data.success) {
        setError(data.message || "Failed to add cryptocurrency.");
        return;
      }
      setSuccess(true);
      setTimeout(() => navigate("/crypto"), 1500);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-xl mx-auto px-4 py-10">
        <Link
          to="/crypto"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 mb-6 transition"
        >
          ← Back to prices
        </Link>

        <h1 className="text-2xl font-bold text-gray-900 mb-1">Add cryptocurrency</h1>
        <p className="text-gray-500 text-sm mb-8">
          List a new asset on the platform.
        </p>

        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-sm text-green-700 font-medium">
            ✓ Cryptocurrency added! Redirecting...
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="e.g. Bitcoin"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Symbol <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="symbol"
              value={form.symbol}
              onChange={handleChange}
              required
              placeholder="e.g. BTC"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition uppercase"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price (USD) <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  required
                  min="0"
                  step="any"
                  placeholder="0.00"
                  className="w-full pl-7 pr-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                24h Change (%) <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  name="change24h"
                  value={form.change24h}
                  onChange={handleChange}
                  required
                  step="any"
                  placeholder="e.g. +2.5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image URL <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              type="url"
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="https://example.com/coin.png"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            {form.image && (
              <div className="mt-2 flex items-center gap-2">
                <img
                  src={form.image}
                  alt="Preview"
                  className="w-8 h-8 rounded-full object-cover border border-gray-200"
                  onError={(e) => { e.target.style.display = "none"; }}
                />
                <span className="text-xs text-gray-400">Preview</span>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || success}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 rounded-xl text-sm transition mt-2"
          >
            {loading ? "Adding..." : "Add cryptocurrency"}
          </button>
        </form>
      </div>
    </div>
  );
}
