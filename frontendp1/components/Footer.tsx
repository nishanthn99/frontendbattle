import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#fff4f2] text-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="font-bold text-lg mb-2">Insight Dashboard</h3>
          <p>Visualize sustainability metrics with clarity.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Links</h4>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-[#864a4a]">Home</a></li>
            <li><a href="#stats" className="hover:text-[#864a4a]">Stats</a></li>
            <li><a href="#gallery" className="hover:text-[#864a4a]">Gallery</a></li>
            <li><a href="#contact" className="hover:text-[#864a4a]">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Connect</h4>
          <div className="flex space-x-4 mt-2">
            <a href="mailto:someone@example.com" aria-label="Email">
              <Mail className="hover:text-[#864a4a]" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="hover:text-[#864a4a]" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="hover:text-[#864a4a]" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="hover:text-[#864a4a]" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs py-4 border-t border-[#e9d7d4]">
        © {new Date().getFullYear()} Insight Dashboard. All rights reserved.
      </div>
    </footer>
  );
}
