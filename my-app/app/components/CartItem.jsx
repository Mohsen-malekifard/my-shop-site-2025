"use client"
import { useCart } from "../context/CartContext";

export default function CartItem({ product }) {
  const { handleDelete, upQty, dnQty } = useCart();

  return (
    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
      {/* Product Info */}
      <div>
        <h1 className="text-lg font-semibold text-gray-800">{product.name}</h1>
        <p className="text-sm text-gray-600">
          Qty: <span className="font-medium">{product.qty}</span> | 
          Total: <span className="font-bold text-green-600">${product.price * product.qty}</span>
        </p>
      </div>

      {/* Actions */}
      <div className="flex space-x-2">
        <button
          onClick={() => dnQty(product.id)}
          className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
        >
          −
        </button>
        <button
          onClick={() => upQty(product.id)}
          className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
        >
          +
        </button>
        <button
          onClick={() => handleDelete(product.id)}
          className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
}
