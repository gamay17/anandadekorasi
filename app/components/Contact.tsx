import { Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="kontak"
      className="bg-[#111111] px-6 py-24 md:px-10"
    >

      <div className="mx-auto w-full max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
            Kontak
          </p>

          <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">

            Hubungi Kami
            <span className="mt-2 block text-[#D4AF37]">
              Untuk Informasi & Pemesanan
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">

            Konsultasikan kebutuhan dekorasi dan perlengkapan acara Anda
            bersama Ananda Dekorasi untuk mendapatkan pelayanan yang
            profesional dan terpercaya.

          </p>

        </div>

        {/* Contact Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {/* WhatsApp */}
          <div className="rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 text-center transition duration-300 hover:border-[#D4AF37]/20">

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37]/10">

              <Phone
                className="text-[#D4AF37]"
                size={24}
              />

            </div>

            <h3 className="text-xl font-semibold text-white">
              WhatsApp
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-gray-400 md:text-base">

              Hubungi kami untuk konsultasi dan pemesanan dekorasi acara.

            </p>

            <a
              href="https://wa.me/628981324107"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-[46px] items-center justify-center rounded-full bg-[#D4AF37] px-6 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02]"
            >
              Chat WhatsApp
            </a>

          </div>

          {/* Location */}
          <div className="rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 text-center transition duration-300 hover:border-[#D4AF37]/20">

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37]/10">

              <MapPin
                className="text-[#D4AF37]"
                size={24}
              />

            </div>

            <h3 className="text-xl font-semibold text-white">
              Lokasi
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-gray-400 md:text-base">

              Desa Wanayasa, Kecamatan Beber,
              Kabupaten Cirebon, Jawa Barat

            </p>

          </div>

          {/* Operational Hours */}
          <div className="rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 text-center transition duration-300 hover:border-[#D4AF37]/20">

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37]/10">

              <Clock
                className="text-[#D4AF37]"
                size={24}
              />

            </div>

            <h3 className="text-xl font-semibold text-white">
              Jam Operasional
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-gray-400 md:text-base">

              Senin - Minggu
              <br />
              08.00 - 21.00 WIB

            </p>

          </div>

        </div>
      </div>
    </section>
  );
}