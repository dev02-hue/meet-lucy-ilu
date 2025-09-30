"use client";

import { motion } from "framer-motion";
import { FiCalendar, FiMapPin } from "react-icons/fi";


const events = [
  {
    title: "Los Angeles Meet & Greet",
    date: "November 12, 2025",
    location: "Hollywood, Los Angeles, CA",
    description: "An exclusive event with limited seats to meet Lucy Ilu in person.",
  },
  {
    title: "New York Fan Experience",
    date: "December 5, 2025",
    location: "Times Square, New York, NY",
    description: "Join Lucy Ilu for a night of stories, photos, and unforgettable memories.",
  },
  {
    title: "Virtual Global Event",
    date: "January 20, 2026",
    location: "Online Worldwide",
    description: "Can’t make it in person? Connect with Lucy Ilu live from anywhere in the world.",
  },
];

const Events = () => {
  return (
    <section className="py-20 bg-[#111111] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-[#6C63FF]"
        >
          Upcoming Events
        </motion.h2>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-gray-300"
        >
          Don’t miss the chance to meet Lucy Ilu in person or online.
        </motion.p>

        {/* Events Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="bg-[#1E1E1E] rounded-xl shadow-lg p-8 flex flex-col justify-between hover:shadow-[#6C63FF]/40 hover:scale-105 transition"
            >
              <div className="text-left space-y-4">
                <h3 className="text-2xl font-semibold text-white">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-400">
                  <FiCalendar className="w-5 h-5 text-[#FF6584]" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <FiMapPin className="w-5 h-5 text-[#FF6584]" />
                  <span>{event.location}</span>
                </div>
                <p className="mt-2 text-gray-300">{event.description}</p>
              </div>

              <button className="mt-6 bg-[#FF6584] text-white font-semibold py-3 px-5 rounded-lg hover:bg-[#ff4b6f] transition">
                Reserve Your Spot
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
