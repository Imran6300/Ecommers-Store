"use client";
import { useEffect, useState } from "react";
import Card from "@/Components/Cards/Card";

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((r) => r.json())
      .then((data) => {
        // Mark first 3 as trending
        const updatedProducts = data.slice(0, 8).map((item, index) => ({
          ...item,
          istrending: index < 3, // mark 3 items as trending
        }));

        setProducts(updatedProducts);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="w-full py-16 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#6c5ce7]/10 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#00cec9]/10 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#6c5ce7] via-[#fd79a8] to-[#00cec9] bg-clip-text text-transparent pb-1">
              Trending Products
            </h2>
            <div className="h-1 bg-gradient-to-r from-[#6c5ce7] via-[#fd79a8] to-[#00cec9] rounded-full" />
          </div>
          <p className="text-[#2d3436]/70 text-lg">
            Discover what everyone is loving right now
          </p>
        </div>

        {loading && (
          <div className="flex flex-wrap justify-center gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="bg-[#f0f0f0] rounded-2xl w-[260px] h-[420px] animate-pulse"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-[220px] bg-[#2d3436]/10 rounded-t-2xl" />
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-[#2d3436]/10 rounded w-3/4" />
                  <div className="h-3 bg-[#2d3436]/10 rounded w-full" />
                  <div className="h-3 bg-[#2d3436]/10 rounded w-5/6" />
                  <div className="h-6 bg-[#2d3436]/10 rounded w-1/2 mt-4" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && products.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 animate-in fade-in duration-700">
            {products.map((item, index) => (
              <div
                key={item.id}
                className="animate-in slide-in-from-bottom-4 fade-in"
                style={{
                  animationDelay: `${index * 120}ms`,
                  animationFillMode: "both",
                }}
              >
                <Card Data={item} />
              </div>
            ))}
          </div>
        )}

        {!loading && products.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-block p-6 bg-gradient-to-br from-[#6c5ce7]/10 to-[#fd79a8]/10 rounded-full mb-4">
              <svg
                className="w-16 h-16 text-[#6c5ce7]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
            </div>
            <p className="text-[#2d3436] text-xl font-semibold">
              No trending products found
            </p>
            <p className="text-[#2d3436]/60 mt-2">
              Check back soon for exciting deals!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrendingProducts;
