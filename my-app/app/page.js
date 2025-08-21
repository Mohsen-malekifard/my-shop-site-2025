"use client"
import { products } from "./lib/products";
import ProductCard from "./components/ProductCard";
import { useCart } from "./context/CartContext";
import SearchBar from "./components/SearchBar";

export default function Home() {
  const { search } = useCart();
  
  const filter = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          🛍 Welcome to My Shop
        </h1>
        <p className="text-gray-600">
          Find your favorite products with ease
        </p>
      </header>

      {/* Search */}
      <div className="max-w-lg mx-auto mb-10">
        <SearchBar />
      </div>

      {/* Products */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filter.length > 0 ? (
          filter.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">
            ❌ No products found
          </p>
        )}
      </section>
    </main>
  );
}
