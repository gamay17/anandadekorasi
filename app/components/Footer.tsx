export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0A0A] px-6 py-16 md:px-10">

      <div className="mx-auto grid w-full max-w-7xl gap-14 md:grid-cols-3">

        {/* Brand */}
        <div className="max-w-md">

          <h2 className="text-2xl font-bold tracking-wide text-[#D4AF37]">
            Ananda Dekorasi
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-gray-400 md:text-base">

            Penyedia layanan dekorasi, tenda, dan perlengkapan acara
            dengan konsep yang elegan, rapi, dan profesional untuk
            berbagai kebutuhan acara spesial Anda.

          </p>

        </div>

        {/* Navigation */}
        <div>

          <h3 className="text-lg font-semibold text-white">
            Navigasi
          </h3>

          <ul className="mt-5 space-y-4">

            <li>
              <a
                href="#beranda"
                className="text-sm text-gray-400 transition duration-300 hover:text-[#D4AF37]"
              >
                Beranda
              </a>
            </li>

            <li>
              <a
                href="#tentang"
                className="text-sm text-gray-400 transition duration-300 hover:text-[#D4AF37]"
              >
                Tentang Kami
              </a>
            </li>

            <li>
              <a
                href="#katalog"
                className="text-sm text-gray-400 transition duration-300 hover:text-[#D4AF37]"
              >
                Katalog
              </a>
            </li>

            <li>
              <a
                href="#kontak"
                className="text-sm text-gray-400 transition duration-300 hover:text-[#D4AF37]"
              >
                Kontak
              </a>
            </li>

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h3 className="text-lg font-semibold text-white">
            Kontak
          </h3>

          <div className="mt-5 space-y-5 text-sm text-gray-400 md:text-base">

            <p className="leading-relaxed">
              Desa Wanayasa, Kecamatan Beber,
              Cirebon, Jawa Barat
            </p>

            <a
              href="https://wa.me/628981324107"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition duration-300 hover:text-[#D4AF37]"
            >
              WhatsApp
            </a>

            <p className="leading-relaxed">
              Senin - Minggu
              <br />
              08.00 - 21.00 WIB
            </p>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="mx-auto mt-14 w-full max-w-7xl border-t border-white/10 pt-6 text-center">

        <p className="text-sm text-gray-500">
          © 2026 Ananda Dekorasi. All rights reserved.
        </p>

      </div>

    </footer>
  );
}