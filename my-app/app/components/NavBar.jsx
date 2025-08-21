"use client"
import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function NavBar() {
  const { cart } = useCart();
  const totalCart = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          MyShop
        </Link>

        {/* Links */}
        <div className="flex space-x-6 items-center">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Home
          </Link>
          <Link
            href="/cart"
            className="text-gray-700 hover:text-blue-600 font-medium transition flex items-center"
          >
            Cart
            <span className="ml-2 bg-red-500 text-white text-sm font-bold px-2 py-0.5 rounded-full">
              {totalCart}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
