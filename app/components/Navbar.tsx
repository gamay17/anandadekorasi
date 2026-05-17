"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    { name: "Beranda", href: "#beranda" },
    { name: "Tentang Kami", href: "#tentang" },
    { name: "Katalog", href: "#katalog" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#0A0A0A]/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-[88px] w-full max-w-7xl items-center justify-between px-6 md:px-10">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0"
        >
          <div className="relative flex h-[52px] w-[52px] items-center justify-center overflow-hidden">

            <Image
              src="/logoananda.png"
              alt="Ananda Dekorasi"
              width={52}
              height={52}
              priority
              className="h-auto w-auto object-contain"
            />

          </div>

          <div className="flex flex-col justify-center leading-none">

            <h1 className="text-lg font-semibold tracking-wide text-[#D4AF37]">
              Ananda Dekorasi
            </h1>

            <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-gray-400">
              Konveksi & Dekorasi
            </p>

          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-10 md:flex">

          {menus.map((menu) => (
            <li key={menu.name}>

              <a
                href={menu.href}
                className="relative text-sm font-medium text-gray-200 transition duration-300 hover:text-[#D4AF37]"
              >
                {menu.name}

                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </a>

            </li>
          ))}

        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* CTA */}
          <a
            href="#kontak"
            className="hidden h-[42px] items-center justify-center rounded-full border border-[#D4AF37]/30 px-6 text-sm font-medium text-[#D4AF37] transition duration-300 hover:bg-[#D4AF37] hover:text-black md:flex"
          >
            Hubungi Kami
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition duration-300 hover:border-[#D4AF37]/40 hover:text-[#D4AF37] md:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#0A0A0A] md:hidden">

          <ul className="flex flex-col items-center gap-6 px-6 py-8">

            {menus.map((menu) => (
              <li key={menu.name}>

                <a
                  href={menu.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium tracking-wide text-gray-200 transition duration-300 hover:text-[#D4AF37]"
                >
                  {menu.name}
                </a>

              </li>
            ))}

            <a
              href="#kontak"
              className="mt-2 flex h-[42px] items-center justify-center rounded-full border border-[#D4AF37]/30 px-6 text-sm font-medium text-[#D4AF37] transition duration-300 hover:bg-[#D4AF37] hover:text-black"
            >
              Hubungi Kami
            </a>

          </ul>
        </div>
      )}
    </header>
  );
}