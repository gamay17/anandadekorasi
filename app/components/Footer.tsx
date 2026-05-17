
export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 px-6 md:px-10 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-[#D4AF37]">
            Ananda Dekorasi
          </h2>

          <p className="mt-5 text-gray-400 leading-relaxed">
            Penyedia layanan dekorasi, tenda, dan perlengkapan acara
            dengan konsep elegan, rapi, dan profesional untuk berbagai
            kebutuhan acara spesial Anda.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5">
            Navigasi
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>
              <a
                href="#beranda"
                className="hover:text-[#D4AF37] transition duration-300"
              >
                Beranda
              </a>
            </li>

            <li>
              <a
                href="#tentang"
                className="hover:text-[#D4AF37] transition duration-300"
              >
                Tentang Kami
              </a>
            </li>

            <li>
              <a
                href="#katalog"
                className="hover:text-[#D4AF37] transition duration-300"
              >
                Katalog
              </a>
            </li>

            <li>
              <a
                href="#kontak"
                className="hover:text-[#D4AF37] transition duration-300"
              >
                Kontak
              </a>
            </li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5">
            Kontak
          </h3>

          <div className="space-y-4 text-gray-400">

            <p>
              Desa Wanayasa, Kecamatan Beber, Cirebon, Jawa Barat
            </p>

            <a
              href="https://wa.me/628981324107"
              target="_blank"
              className="block hover:text-[#D4AF37] transition duration-300"
            >
              WhatsApp
            </a>

            <p>
              Senin - Minggu
              <br />
              08.00 - 21.00 WIB
            </p>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-14 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Ananda Dekorasi. All rights reserved.
      </div>
    </footer>
  );
}