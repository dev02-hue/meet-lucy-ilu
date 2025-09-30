"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/download.jpeg",
  "/WhatsApp Image 2025-09-30 at 12.12.52 PM.jpeg",
  "/WhatsApp Image 2025-09-30 at 12.12.52 PM (1).jpeg",
  "/WhatsApp Image 2025-09-30 at 12.12.53 PM.jpeg",
  "/WhatsApp Image 2025-09-30 at 12.12.53 PM (1).jpeg",
  "/WhatsApp Image 2025-09-30 at 12.12.53 PM (2).jpeg",
  "/WhatsApp Image 2025-09-30 at 12.12.54 PM.jpeg",
  "/download (1).jpeg",
];

const Gallery = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="py-20 bg-[#0D0D0D] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-[#6C63FF]"
        >
          Gallery & Highlights
        </motion.h2>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-gray-300"
        >
          A glimpse into Lucy Ilu’s iconic moments and unforgettable performances.
        </motion.p>

        {/* Image Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
              onClick={() => setSelected(src)}
            >
              <Image
                src={src}
                alt={`Lucy Ilu ${idx + 1}`}
                width={400}
                height={400}
                className="object-cover w-full h-60 group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-lg font-semibold transition">
                View
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
          onClick={() => setSelected(null)}
        >
          <motion.img
            src={selected}
            alt="Selected Lucy Ilu"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
          />
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
