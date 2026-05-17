import { Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="kontak"
      className="bg-[#111111] py-24 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#D4AF37] uppercase tracking-[0.35em] text-sm mb-4">
            Kontak
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Hubungi Kami
            <span className="block text-[#D4AF37] mt-2">
              Untuk Informasi & Pemesanan
            </span>
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed text-base md:text-lg">
            Konsultasikan kebutuhan dekorasi dan perlengkapan acara Anda
            bersama Ananda Dekorasi untuk mendapatkan pelayanan yang
            profesional dan terpercaya.
          </p>
        </div>

        {/* Contact Card */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {/* Phone */}
          <div className="rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 text-center hover:border-[#D4AF37]/20 transition duration-300">
            
            <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-5">
              <Phone className="text-[#D4AF37]" size={24} />
            </div>

            <h3 className="text-xl font-semibold text-white">
              WhatsApp
            </h3>

            <p className="text-gray-400 mt-3">
              Hubungi kami untuk konsultasi dan pemesanan.
            </p>

            <a
              href="https://wa.me/628981324107"
              target="_blank"
              className="inline-block mt-6 px-6 py-3 rounded-full bg-[#D4AF37] text-black font-medium hover:scale-105 transition duration-300"
            >
              Chat WhatsApp
            </a>
          </div>

          {/* Address */}
          <div className="rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 text-center hover:border-[#D4AF37]/20 transition duration-300">
            
            <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-5">
              <MapPin className="text-[#D4AF37]" size={24} />
            </div>

            <h3 className="text-xl font-semibold text-white">
              Lokasi
            </h3>

            <p className="text-gray-400 mt-3 leading-relaxed">
              Desa Wanayasa, Kecamatan Beber, Kabupaten Cirebon, Jawa Barat
            </p>
          </div>

          {/* Hours */}
          <div className="rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 text-center hover:border-[#D4AF37]/20 transition duration-300">
            
            <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-5">
              <Clock className="text-[#D4AF37]" size={24} />
            </div>

            <h3 className="text-xl font-semibold text-white">
              Jam Operasional
            </h3>

            <p className="text-gray-400 mt-3 leading-relaxed">
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