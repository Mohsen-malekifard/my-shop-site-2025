"use client"
import { useCart } from "../context/CartContext";

export default function SearchBar() {
  const { search, setSearch } = useCart();

  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Search Something..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      />
    </div>
  );
}
