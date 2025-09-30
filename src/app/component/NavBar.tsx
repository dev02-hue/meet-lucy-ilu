"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

  

const ANIMATION_CONFIG = {
  nav: {
    initial: { y: -80, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.7, ease: "easeOut" },
  },
  mobileMenu: {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
    transition: { duration: 0.5, ease: "easeInOut" },
  },
} as const;

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Biography", href: "/biography" },
  { name: "Meet Lucy", href: "/meet" },
  { name: "Contact", href: "/contact" },
] as const;

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = useCallback(() => {
    setIsNavOpen(prev => !prev);
  }, []);

  const closeNav = useCallback(() => {
    setIsNavOpen(false);
  }, []);

  const NavLink = ({ href, children, onClick, className = "", isButton = false }: {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    isButton?: boolean;
  }) => (
    <Link
      href={href}
      onClick={onClick}
      className={`
        ${isButton 
          ? "bg-[#FF6584] text-white px-5 py-2 rounded-xl font-semibold shadow-lg hover:bg-[#ff4b6f] transition-colors" 
          : "hover:text-[#FF6584] transition-colors"
        } ${className}
      `}
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {children}
    </Link>
  );

  return (
    <motion.nav
      {...ANIMATION_CONFIG.nav}
      className="fixed top-0 left-0 w-full z-50 bg-[#0D0D0D]/80 backdrop-blur-lg shadow-lg border-b border-gray-800"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold tracking-wide text-[#6C63FF] hover:opacity-90 transition-opacity"
            aria-label="Lucy Ilu - Home"
          >
            Lucy Ilu
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8 text-lg text-amber-50 font-medium">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <NavLink href={item.href}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            
            <NavLink href="/apply" isButton>
              Apply to Meet Lucy
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleNav}
            className="md:hidden text-2xl p-2 hover:bg-white rounded-lg   transition-colors"
            aria-label={isNavOpen ? "Close menu" : "Open menu"}
            aria-expanded={isNavOpen}
          >
            {isNavOpen ? <FaTimes className="text-amber-50" /> : <FaBars className="text-amber-50"  />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isNavOpen && (
            <motion.div
              {...ANIMATION_CONFIG.mobileMenu}
              className="md:hidden absolute top-full left-0 w-full bg-[#0D0D0D] border-t border-gray-800 shadow-xl"
            >
              <div className="px-6 py-8 space-y-6">
                <ul className="space-y-4 text-amber-50">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.name}>
                      <NavLink 
                        href={item.href} 
                        onClick={closeNav}
                        className="block text-lg py-2 font-medium"
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                
                <NavLink 
                  href="/apply" 
                  onClick={closeNav}
                  isButton
                  className="block text-center w-full"
                >
                  Apply to Meet Lucy
                </NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}