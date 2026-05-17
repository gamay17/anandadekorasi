export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <p className="text-[#D4AF37] tracking-[0.3em] uppercase text-sm mb-4">
          Ananda Dekorasi
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
          Konveksi & Dekorasi
          <span className="block text-[#D4AF37]">
            Elegan Untuk Acara Anda
          </span>
        </h1>

        <p className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed">
          Menyediakan layanan dekorasi, konveksi, dan tenda profesional
          untuk pernikahan, event, dan berbagai acara spesial lainnya.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#katalog"
            className="px-8 py-3 rounded-full bg-[#D4AF37] text-black font-medium hover:scale-105 transition duration-300"
          >
            Lihat Katalog
          </a>

          <a
            href="#kontak"
            className="px-8 py-3 rounded-full border border-white/20 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition duration-300"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
}