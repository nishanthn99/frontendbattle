"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fffaf9] p-6 md:p-12 text-gray-800">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10"
      >
        Get in Touch
      </motion.h1>

      <motion.div
        className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <ContactItem
          icon={<Mail className="text-pink-500" />}
          label="Email"
          value="nishanthsherugar@gmail.com"
          href="mailto:nishanthsherugar@gmail.com"
        />
        <ContactItem
          icon={<Phone className="text-blue-500" />}
          label="Phone"
          value="+91 7676729896"
          href="tel:+917676729896"
        />
        <ContactItem
          icon={<MapPin className="text-green-500" />}
          label="Location"
          value="Kundapura Karnataka, India"
        />
        <ContactItem
          icon={<Linkedin className="text-sky-600" />}
          label="LinkedIn"
          value="linkedin.com/in/nishanthsherugar"
          href="https://www.linkedin.com/in/nishanthsherugar"
        />
        <ContactItem
          icon={<Github className="text-black" />}
          label="GitHub"
          value="github.com/nishanthsherugar"
          href="https://github.com/nishanthn99"
        />
      </motion.div>
    </main>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const Content = (
    <div className="flex items-center gap-4 hover:scale-[1.02] transition-transform">
      <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full shadow-sm">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-md font-medium">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {Content}
    </a>
  ) : (
    Content
  );
}
