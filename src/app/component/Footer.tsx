"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaTwitter, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiShield } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Biography", href: "/biography" },
    { name: "Meet Lucy", href: "/meet" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      name: "WhatsApp",
      href: "https://wa.me/qr/LEURJFGQB36PI1",
      icon: FaWhatsapp,
      color: "hover:text-green-400",
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: FaInstagram,
      color: "hover:text-pink-400",
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: FaTwitter,
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      href: "mailto:management@lucyilu.com",
      icon: FaEnvelope,
      color: "hover:text-red-400",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0D0D0D] to-[#1a1a1a] border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-block">
              <h2 className="text-3xl font-bold text-[#6C63FF] mb-4">
                Lucy Ilu
              </h2>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Creating unforgettable moments and connecting with fans through exclusive meet & greet experiences. Your opportunity to meet Lucy awaits.
            </p>
            
            {/* Trust Badge */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <FiShield className="text-[#6C63FF]" />
              <span>Secure & Verified Meetings</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#FF6584] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-[#6C63FF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
            <div className="space-y-4">
              {/* WhatsApp Manager */}
              <div className="flex items-start gap-3 group cursor-pointer">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <FaWhatsapp className="text-green-400 text-lg" />
                </div>
                <div>
                  <p className="text-white font-medium">Manager</p>
                  <a 
                    href="https://wa.me/qr/LEURJFGQB36PI1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    +1 (774) 327-1908
                  </a>
                  <p className="text-sm text-gray-400 mt-1">Available via WhatsApp</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#6C63FF]/20 rounded-lg flex items-center justify-center">
                  <FaEnvelope className="text-[#6C63FF] text-lg" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a 
                    href="mailto:management@lucyilu.com"
                    className="text-gray-300 hover:text-[#FF6584] transition-colors"
                  >
                    management@lucyilu.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#FF6584]/20 rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="text-[#FF6584] text-lg" />
                </div>
                <div>
                  <p className="text-white font-medium">Based In</p>
                  <p className="text-gray-300">United States</p>
                  <p className="text-sm text-gray-400 mt-1">International Events</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Connect With Lucy</h3>
            
            {/* Social Links */}
            <div className="mb-6">
              <p className="text-gray-300 mb-4">Follow for updates and announcements</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 hover:border-[#6C63FF] hover:bg-[#6C63FF]/10 transition-all duration-300 group"
                    aria-label={`Follow on ${social.name}`}
                  >
                    <social.icon 
                      className={`text-xl text-gray-400 ${social.color} transition-colors`} 
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-r from-[#6C63FF]/10 to-[#FF6584]/10 border border-white/10 rounded-xl p-4">
              <p className="text-white font-semibold mb-2">Ready to Meet Lucy?</p>
              <a
                href="https://wa.me/qr/LEURJFGQB36PI1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm font-medium w-full justify-center"
              >
                <FaWhatsapp className="text-lg" />
                Message Manager on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Lucy Ilu. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cancellation" className="text-gray-400 hover:text-white transition-colors">
                Cancellation Policy
              </Link>
            </div>

            {/* Security Badge */}
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <FiShield className="text-[#6C63FF]" />
              <span>Secure Meeting Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/qr/LEURJFGQB36PI1"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/25 transition-all duration-300 z-50 group"
        aria-label="Contact Manager on WhatsApp"
      >
        <FaWhatsapp className="text-white text-2xl" />
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#FF6584] rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">!</span>
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-black text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Contact Manager
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-8 border-transparent border-l-black"></div>
        </div>
      </motion.a>
    </footer>
  );
};

export default Footer;