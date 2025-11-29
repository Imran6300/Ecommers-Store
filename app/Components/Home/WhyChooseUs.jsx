"use client";

import { Package, Zap, Lock, Headphones } from "lucide-react";
import { useEffect, useState } from "react";

const points = [
  {
    title: "High Quality Products",
    desc: "We source the best items for durability and comfort.",
    icon: Package,
    gradient: "from-[#6c5ce7] to-[#fd79a8]",
  },
  {
    title: "Fast Delivery",
    desc: "Your products delivered at lightning speed.",
    icon: Zap,
    gradient: "from-[#00cec9] to-[#6c5ce7]",
  },
  {
    title: "Secure Payments",
    desc: "Protected transactions with trusted gateways.",
    icon: Lock,
    gradient: "from-[#fd79a8] to-[#00cec9]",
  },
  {
    title: "24/7 Support",
    desc: "We are always here to help you.",
    icon: Headphones,
    gradient: "from-[#6c5ce7] to-[#00cec9]",
  },
];

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="w-full py-16 bg-gradient-to-br from-[#f0f0f0] via-white to-[#f0f0f0] px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#6c5ce7]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#00cec9]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#6c5ce7] via-[#fd79a8] to-[#00cec9] bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-[#2d3436]/70 text-lg">
            Experience excellence in every interaction
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center border border-[#f0f0f0] hover:border-[#6c5ce7]/20 hover:-translate-y-2 
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="font-bold text-xl text-[#2d3436] mb-3 group-hover:text-[#6c5ce7] transition-colors">
                  {item.title}
                </h3>

                <p className="text-[#2d3436]/70 leading-relaxed">{item.desc}</p>

                <div
                  className={`mt-6 h-1 w-0 group-hover:w-full mx-auto bg-gradient-to-r ${item.gradient} rounded-full transition-all duration-500`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
