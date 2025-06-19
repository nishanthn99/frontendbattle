// components/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import intro from "./../public/image/intro_image.jpg"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-gradient-to-br from-white to-gray-100">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Welcome to Your Insight Dashboard
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Track your sustainability data like carbon footprint, energy intensity, and more with interactive visuals.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-[#864a4a] text-white px-6 py-3 rounded-full shadow hover:bg-[#a05757]"
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 mt-10 md:mt-0"
      >
        <Image
          src={intro}
          alt="Dashboard Illustration"
          width={600}
          height={400}
          className="rounded-xl shadow-lg"
        />
      </motion.div>
    </section>
  );
}
