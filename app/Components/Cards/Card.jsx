"use client";
import FadeContent from "@/Components/AnimatedContent/FadeContent";
import Image from "next/image";

const Card = ({ Data }) => {
  return (
    <FadeContent
      blur={false}
      duration={1000}
      easing="ease-out"
      initialOpacity={0}
    >
      <div className="group bg-white shadow-lg rounded-2xl p-5 w-[260px] min-h-[420px] flex flex-col relative hover:scale-[1.05] hover:shadow-2xl transition-all duration-300 border border-gray-200">
        <div className="relative overflow-hidden rounded-xl">
          {Data?.istrending && (
            <span
              className="
              absolute top-3 left-3 z-20 
              bg-gradient-to-r from-[#fd79a8] to-[#6c5ce7]
              text-white text-[11px] font-bold tracking-wide
              px-3 py-1 rounded-full shadow-md
              animate-pulse
            "
            >
              TRENDING
            </span>
          )}

          {/* ⭐ FIXED IMAGE SOURCE FOR DUMMYJSON */}
          <Image
            src={Data.thumbnail || Data.images?.[0] || "/placeholder.svg"}
            alt={Data.title}
            height={220}
            width={220}
            className="w-full h-[220px] object-cover group-hover:scale-110 transition-transform duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#2d3436]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="flex flex-col mt-4 flex-1">
          <h5 className="text-[#6c5ce7] font-bold text-[17px] truncate mb-1">
            {Data.title}
          </h5>

          <p className="text-[#2d3436]/70 text-[14px] leading-relaxed line-clamp-3 mb-3">
            {Data.description}
          </p>

          <div className="mt-auto">
            <h4 className="font-bold text-[22px] text-[#2d3436] mb-3">
              ₹{Math.floor(Data.price * 84)}
            </h4>

            <button
              className="
                w-full bg-[#00cec9] text-white font-semibold 
                px-4 py-3 rounded-xl 
                hover:bg-[#00b8b3] 
                active:scale-95 transition 
                shadow-md hover:shadow-lg
              "
              onClick={() => console.log("Added To Cart")}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </FadeContent>
  );
};

export default Card;
