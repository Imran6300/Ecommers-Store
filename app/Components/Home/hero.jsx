"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div
        className="
           h-[100vh] w-full flex items-center justify-center gap-3
    px-5 py-5 overflow-hidden
    pt-[90px] max-md:pt-[120px]
    max-md:flex-col max-md:h-auto max-md:pt-[120px]
        "
      >
        <section
          className="
            w-[35%] h-full flex items-center justify-center p-5 rounded-xl
            opacity-0 animate-slideFadeIn
            bg-gradient-to-tr from-[#6c5ce7] via-[#00cec9] to-[#6c5ce7]
            bg-[length:400%_400%] animate-gradientShift
            max-md:w-full max-md:h-auto
          "
        >
          <div className="w-full text-left px-2 max-md:text-center">
            <h1
              className="
                text-[clamp(1.8rem,2.5vw,3rem)]
                text-[#6c5ce7] font-semibold relative inline-block
              "
            >
              trending collection
              <span className="absolute left-0 bottom-0 h-[3px] w-0 animate-underline bg-gradient-to-r from-[#6c5ce7] to-[#fd79a8]" />
            </h1>

            <h3 className="text-[#2d3436] text-[clamp(1rem,2vw,1.5rem)] my-2">
              Fresh styles, fresh vibes <br /> just dropped for you.
            </h3>

            <button
              onClick={() => alert("This Feature Is Comming Soon")}
              className="
                h-[45px] w-[120px] rounded-lg text-white bg-[#6c5ce7]
                text-[1rem] mr-3 mt-2 transition-all duration-300
                hover:bg-[#5a4bd4]
                max-md:w-full max-md:mr-0
              "
            >
              Shop Now
            </button>

            <button
              onClick={() => alert("This Feature Is Comming Soon")}
              className="
                h-[45px] w-[120px] rounded-lg text-[#2d3436] bg-[#00cec9]
                text-[1rem] mt-2 transition-all duration-300
                hover:bg-[#00b5ae]
                max-md:w-full
              "
            >
              Explore
            </button>
          </div>
        </section>

        <section
          className="
            w-[65%] h-full flex items-center justify-center rounded-xl
            opacity-0 animate-slideFadeInRight
            max-md:w-full max-md:h-auto
          "
        >
          <Image
            src="/heroimage.jpg"
            alt="Hero Banner"
            height={600}
            width={600}
            className="
              w-full h-full rounded-xl object-cover
              transition-all duration-500
              hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]
            "
          />
        </section>
      </div>

      <div
        className="
          w-full flex flex-wrap justify-center items-center overflow-hidden
        "
      ></div>

      <style jsx>{`
        @keyframes underlineSlide {
          from {
            width: 0;
          }
          to {
            width: 90%;
          }
        }

        .animate-underline {
          animation: underlineSlide 1.5s ease-in-out forwards;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradientShift {
          animation: gradientShift 10s ease infinite;
        }

        @keyframes slideFadeIn {
          0% {
            opacity: 0;
            transform: translateX(-50px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        .animate-slideFadeIn {
          animation: slideFadeIn 1.5s ease forwards;
        }

        @keyframes slideFadeInRight {
          0% {
            opacity: 0;
            transform: translateX(50px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        .animate-slideFadeInRight {
          animation: slideFadeInRight 1s ease forwards;
        }
      `}</style>
    </>
  );
}
