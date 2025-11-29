"use client";

import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    name: "Men",
    image: "/Men.jpg",
    link: "/men",
    gradient: "from-[#6c5ce7] to-[#00cec9]",
  },
  {
    name: "Women",
    image: "/women.jpg",
    link: "/women",
    gradient: "from-[#fd79a8] to-[#6c5ce7]",
  },
  {
    name: "Kids",
    image: "/kids.jpg",
    link: "/electronics",
    gradient: "from-[#00cec9] to-[#6c5ce7]",
  },
  {
    name: "New Arrivals",
    image: "/newarrivals.jpg",
    link: "/jewelry",
    gradient: "from-[#6c5ce7] to-[#fd79a8]",
  },
];

const FeaturedCategories = () => {
  return (
    <section className="w-full py-16 px-6 bg-gradient-to-b from-white to-[#f0f0f0]">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#6c5ce7] to-[#00cec9] bg-clip-text text-transparent mb-3">
          Featured Categories
        </h2>
        <p className="text-[#2d3436]/70 text-lg max-w-2xl mx-auto">
          Explore our curated collection across multiple categories
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {categories.map((cat, index) => (
          <Link
            key={cat.name}
            href={cat.link}
            className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className="relative h-[280px] overflow-hidden">
              <Image
                src={cat.image || "/placeholder.svg"}
                height={280}
                width={400}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt={cat.name}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${cat.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-500`}
              />
            </div>

            <div className="absolute inset-0 flex items-end p-6">
              <div className="w-full">
                <span className="text-2xl font-bold text-white drop-shadow-lg block mb-2">
                  {cat.name}
                </span>
                <div className="h-1 w-16 bg-white rounded-full group-hover:w-24 transition-all duration-500" />
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
