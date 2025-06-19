// components/StatCard.tsx

"use client";

import { motion } from "framer-motion";
import StatBar from "./StatBar";

type StatCardProps = {
  title: string;
  unit: string;
  value: number;
  percentageChange: number;
  direction: "up" | "down";
  bars: { year: number; value: number }[];
};

export default function StatCard({
  title,
  unit,
  value,
  percentageChange,
  direction,
  bars,
}: StatCardProps) {
  const maxValue = Math.max(...bars.map((b) => b.value));

  const barVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2 },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg p-6 w-full"
    >
      <h2 className="text-lg font-semibold mb-1">{title}</h2>
      <p className="text-3xl font-bold">{value.toLocaleString("en-US")} <span className="text-base font-light">{unit}</span></p>
      <p className="text-sm mt-1 text-[#864a4a]">
        {direction === "up" ? "↑" : "↓"} {percentageChange}% <span className="text-gray-500">from 2019</span>
      </p>

      <div className="mt-6 space-y-4">
        {bars.map((bar, index) => (
          <motion.div
            key={bar.year}
            custom={index}
            variants={barVariants}
            initial="hidden"
            animate="visible"
          >
            <StatBar year={bar.year} value={bar.value} max={maxValue} />
          </motion.div>
        ))}
      </div>

      <div className="flex justify-end mt-6">
        <a
          href={`/data/${title.toLowerCase().replace(/\s+/g, "-")}.csv`}
          download
          className="text-sm text-[#864a4a] border border-[#864a4a] px-4 py-1.5 rounded-full hover:bg-[#f3eaea] transition"
        >
          Download the data ↓
        </a>
      </div>
    </motion.div>
  );
}
