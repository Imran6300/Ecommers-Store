"use client";

import { Quote, Star } from "lucide-react";
import FadeContent from "@/Components/AnimatedContent/FadeContent";

const reviews = [
  {
    name: "Ayesha Khan",
    comment: "Amazing products! Quality is top-notch.",
    image: "/user1.jpg",
    rating: 5,
  },
  {
    name: "Rohan Mehta",
    comment: "Fast delivery and beautiful packaging!",
    image: "/user2.jpg",
    rating: 5,
  },
  {
    name: "Sana Patel",
    comment: "Customer support was very helpful!",
    image: "/user3.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="w-full py-20 px-6 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#6c5ce7]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#00cec9]/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeContent blur={false} duration={800} initialOpacity={0}>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-[#6c5ce7] via-[#fd79a8] to-[#00cec9] bg-clip-text text-transparent mb-4">
              What Our Customers Say
            </h2>
            <p className="text-[#2d3436]/70 text-lg max-w-2xl mx-auto">
              Real experiences from real customers who love our products
            </p>
          </div>
        </FadeContent>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <FadeContent
              key={item.name}
              blur={false}
              duration={800}
              initialOpacity={0}
              delay={index * 150}
            >
              <div className="group bg-[#f0f0f0] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#6c5ce7]/5 via-[#fd79a8]/5 to-[#00cec9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote size={48} className="text-[#6c5ce7]" />
                </div>

                <div className="relative z-10">
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6c5ce7] via-[#fd79a8] to-[#00cec9] rounded-full animate-pulse" />
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="relative w-full h-full rounded-full object-cover border-4 border-[#f0f0f0]"
                    />
                  </div>

                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-[#fd79a8] text-[#fd79a8]"
                      />
                    ))}
                  </div>

                  <p className="text-[#2d3436]/80 text-center italic mb-6 text-lg leading-relaxed">
                    "{item.comment}"
                  </p>

                  <h4 className="font-bold text-[#2d3436] text-center text-lg">
                    {item.name}
                  </h4>

                  <div className="w-16 h-1 bg-gradient-to-r from-[#6c5ce7] to-[#00cec9] mx-auto mt-4 rounded-full group-hover:w-24 transition-all duration-300" />
                </div>
              </div>
            </FadeContent>
          ))}
        </div>

        <FadeContent blur={false} duration={800} initialOpacity={0} delay={500}>
          <div className="text-center mt-16">
            <p className="text-[#2d3436]/60 text-sm">
              Join thousands of happy customers worldwide
            </p>
          </div>
        </FadeContent>
      </div>
    </section>
  );
};

export default Testimonials;
