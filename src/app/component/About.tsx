"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { label: "Years Active", value: 1991 },  // or compute current year − 1991
  { label: "Major Films & TV", value: 40 }, // approximate
  { label: "Awards Won", value: 10 },       // placeholder
];

const About = () => {
  return (
    <section className="relative py-20 bg-[#111111] text-white">
      <div className="max-w-6xl mx-auto px-6 lg:flex lg:items-center lg:gap-12">
        {/* Profile Image */}
        <motion.div
          className="w-full lg:w-1/2 mb-10 lg:mb-0"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative w-full h-80 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/WhatsApp Image 2025-09-30 at 12.12.55 PM (1).jpeg" // replace with actual
              alt="Lucy Liu portrait"
              fill
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </motion.div>

        {/* Biography + Stats */}
        <div className="w-full lg:w-1/2 space-y-6">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-bold text-[#6C63FF]">
            About Lucy Liu
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="text-lg text-gray-300 leading-relaxed"
          >
            Lucy Alexis Liu (born December 2, 1968 in Queens, New York) is an award-winning actress, producer, and artist. She rose to fame with her breakthrough TV role on *Ally McBeal* and has since appeared in blockbuster movies like *Charlie’s Angels*, *Kill Bill*, *Chicago*, among others. She studied Asian languages and culture at the University of Michigan, and over the years has become a prominent figure for Asian-American representation in film and television.
          </motion.p>

          {/* Stats Counters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + idx * 0.2, duration: 0.6, ease: "easeOut" }}
                className="bg-[#1E1E1E] rounded-lg p-6 text-center shadow-lg"
              >
                <div className="text-5xl font-bold text-[#FF6584]">
                  {stat.value}
                </div>
                <div className="mt-2 text-xl text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fun Fact or Quote */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            className="mt-8 italic text-gray-400 border-l-4 border-[#6C63FF] pl-4"
          >
            “Every role, big or small, is a chance to make someone feel seen.”  
            {/* This is a made up quote — replace with a real one if desired */}
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
