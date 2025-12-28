"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-80px)] mt-[80px] overflow-hidden bg-[#2D3436] text-[#F0F0F0]">
      {/* BACKGROUND IMAGE */}
      <motion.img
        src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1920&auto=format&fit=crop"
        alt="Hero Background"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        className="
  absolute inset-0 w-full h-full 
  object-cover 
  object-[50%_30%] 
  scale-105
"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#2D3436]/75" />

      {/* DECORATIVE GLOWS */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#6C5CE7]/35 blur-[200px] rounded-full"
      />

      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-350px] right-[-350px] w-[700px] h-[700px] bg-[#00CEC9]/25 blur-[220px] rounded-full"
      />

      {/* SUBTLE GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* CENTERED CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
        <div className="max-w-3xl">
          {/* Accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 1 }}
            className="h-[3px] bg-[#FD79A8] mx-auto mb-8"
          />

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-7xl xl:text-8xl font-extrabold leading-[0.95]"
          >
            MOVE WITH <br />
            <span className="text-[#6C5CE7]">INTENT</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 text-lg md:text-xl text-white/70"
          >
            A modern brand built on confidence, motion, and purpose. Designed to
            feel powerful — not loud.
          </motion.p>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-14 py-4 bg-[#00CEC9] text-[#2D3436] rounded-full font-semibold shadow-2xl"
          >
            Enter Store
          </motion.button>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-widest text-white/50"
      >
        SCROLL ↓
      </motion.div>
    </section>
  );
}
