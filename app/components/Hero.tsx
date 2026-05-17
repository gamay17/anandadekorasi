export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative flex min-h-screen items-center overflow-hidden bg-black pt-[88px]"
    >

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/hero.jpeg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#0A0A0A]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl justify-center px-6 md:px-10">

        <div className="max-w-4xl text-center">

          {/* Label */}
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
            Ananda Dekorasi
          </p>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">

            Konveksi & Dekorasi
            <span className="mt-3 block text-[#D4AF37]">
              Elegan Untuk Acara Anda
            </span>

          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">

            Menyediakan layanan dekorasi, tenda, dan perlengkapan acara
            dengan konsep yang elegan, rapi, dan profesional untuk
            menciptakan suasana acara yang lebih berkesan.

          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <a
              href="#katalog"
              className="flex h-[50px] min-w-[180px] items-center justify-center rounded-full bg-[#D4AF37] px-8 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02]"
            >
              Lihat Katalog
            </a>

            <a
              href="#kontak"
              className="flex h-[50px] min-w-[180px] items-center justify-center rounded-full border border-white/15 px-8 text-sm font-semibold text-white transition duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              Hubungi Kami
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}