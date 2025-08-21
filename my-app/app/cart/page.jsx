"use client"
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cart } = useCart();

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        🛒 Your Cart
      </h1>

      {cart.length > 0 ? (
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6 space-y-4">
          {cart.map((item) => (
            <CartItem key={item.id} product={item} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">
          ❌ Your cart is empty
        </p>
      )}
    </main>
  );
}
