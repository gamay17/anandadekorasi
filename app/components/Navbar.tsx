"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    { name: "Beranda", href: "#" },
    { name: "Tentang Kami", href: "#tentang" },
    { name: "Katalog", href: "#katalog" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-[#D4AF37]/10 bg-[#171717]/90 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative overflow-hidden rounded-full">
            <Image
              src="/logo.png"
              alt="Ananda Dekorasi"
              width={52}
              height={52}
              className="object-contain transition duration-300 group-hover:scale-105"
            />
          </div>

          <div className="leading-tight">
            <h1 className="text-[#D4AF37] font-semibold tracking-wide text-lg">
              Ananda Dekorasi
            </h1>

            <p className="text-[11px] uppercase tracking-[0.25em] text-gray-400">
              Konveksi & Dekorasi
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-sm text-gray-200 font-medium">
          {menus.map((menu) => (
            <li key={menu.name}>
              <a
                href={menu.href}
                className="relative transition duration-300 hover:text-[#D4AF37]"
              >
                {menu.name}

                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[#D4AF37] transition-all duration-300 hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* CTA Button */}
          <a
            href="#kontak"
            className="hidden md:flex items-center rounded-full border border-[#D4AF37]/30 px-5 py-2 text-sm text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
          >
            Hubungi Kami
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[#D4AF37]/10 bg-[#0A0A0A]">
          <ul className="flex flex-col items-center gap-6 py-8 text-white">
            {menus.map((menu) => (
              <li key={menu.name}>
                <a
                  href={menu.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm tracking-wide transition hover:text-[#D4AF37]"
                >
                  {menu.name}
                </a>
              </li>
            ))}

            <a
              href="#kontak"
              className="mt-2 rounded-full border border-[#D4AF37]/30 px-5 py-2 text-sm text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
            >
              Hubungi Kami
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}