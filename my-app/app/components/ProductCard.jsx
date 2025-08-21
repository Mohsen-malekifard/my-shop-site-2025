"use client"
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { AddToCart } = useCart();

  return (
    <div className="bg-white shadow-md rounded-xl p-5 flex flex-col items-center justify-between hover:shadow-xl transition">
      {/* Product Name */}
      <h1 className="text-lg font-semibold text-gray-800 mb-2 text-center">
        {product.name}
      </h1>

      {/* Price */}
      <h2 className="text-xl font-bold text-green-600 mb-4">
        ${product.price}
      </h2>

      {/* Add to Cart Button */}
      <button
        onClick={() => AddToCart(product)}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
