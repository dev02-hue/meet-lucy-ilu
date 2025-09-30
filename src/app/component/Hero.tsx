"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

 

const ANIMATION_CONFIG = {
  title: {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  description: {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { delay: 0.3, duration: 0.8, ease: "easeOut" },
  },
  cta: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { delay: 0.6, duration: 0.7, ease: "easeOut" },
  },
} as const;

export default function Hero() {
  return (
    <section 
      className="relative h-screen w-full flex items-center justify-center bg-[#0D0D0D] text-white overflow-hidden"
      role="banner"
      aria-label="Meet Lucy Ilu"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src="/WhatsApp Image 2025-09-30 at 12.12.56 PM.jpeg"
            alt="Lucy Ilu - Celebrity portrait"
            fill
            priority
            className="object-cover"
            quality={90}
            sizes="100vw"
          />
          {/* Enhanced Gradient Overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/90 via-[#0D0D0D]/70 to-[#0D0D0D]"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl px-6 lg:px-8">
        <motion.h1
          {...ANIMATION_CONFIG.title}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight md:leading-tight lg:leading-tight"
        >
          Meet{" "}
          <span 
            className="text-[#6C63FF] bg-gradient-to-r from-[#6C63FF] to-[#8B85FF] bg-clip-text  "
          >
            Lucy Ilu
          </span>
        </motion.h1>

        <motion.p
          {...ANIMATION_CONFIG.description}
          className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
        >
          A once-in-a-lifetime opportunity to connect with your favorite star.  
          Join Lucy Ilu for exclusive events, intimate meet & greet sessions, 
          and unforgettable experiences.
        </motion.p>

        <motion.div
          {...ANIMATION_CONFIG.cta}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/apply"
            className="inline-flex items-center justify-center bg-[#FF6584] hover:bg-[#ff4b6f] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[200px]"
          >
            Apply to Meet Lucy
          </Link>
          
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl text-lg font-semibold backdrop-blur-sm hover:bg-white/5 transition-all duration-300 min-w-[200px]"
          >
            View Gallery
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#6C63FF] rounded-full opacity-20 blur-sm" />
        <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-[#FF6584] rounded-full opacity-15 blur-sm" />
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-[#6C63FF] rounded-full opacity-25 blur-sm" />
      </div>
    </section>
  );
}