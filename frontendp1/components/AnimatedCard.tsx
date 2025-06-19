"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type AnimatedCardProps = {
  title: string;
  description: string;
  img1: string;
  img2: string;
};

export default function AnimatedCard({ title, description, img1, img2 }: AnimatedCardProps) {
  const [toggled, setToggled] = useState(false);

  return (
    <motion.div
      onClick={() => setToggled(!toggled)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg w-full max-w-md"
    >
      <Image
        src={toggled ? img2 : img1}
        alt={title}
        width={600}
        height={400}
        className="w-full h-[250px] object-cover transition-all duration-300"
      />
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
