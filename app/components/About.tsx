import Image from "next/image";

export default function About() {
  return (
    <section
      id="tentang"
      className="bg-[#111111] px-6 py-24 md:px-10"
    >

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 md:grid-cols-2">

        {/* Image */}
        <div className="relative">

          {/* Border */}
          <div className="absolute -inset-2 rounded-3xl border border-[#D4AF37]/20" />

          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl bg-[#0F0F0F]">

            <Image
              src="/About.jpg"
              alt="Tentang Ananda Dekorasi"
              width={700}
              height={700}
              className="h-[500px] w-full object-cover"
              priority
            />

          </div>

        </div>

        {/* Content */}
        <div>

          {/* Label */}
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
            Tentang Kami
          </p>

          {/* Heading */}
          <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">

            Dekorasi Elegan
            <span className="mt-2 block text-[#D4AF37]">
              Untuk Momen Terbaik Anda
            </span>

          </h2>

          {/* Description */}
          <div className="mt-8 space-y-5">

            <p className="text-base leading-relaxed text-gray-300 md:text-lg">

              Ananda Dekorasi hadir sebagai penyedia layanan dekorasi,
              tenda, dan perlengkapan acara dengan konsep yang elegan,
              rapi, dan profesional untuk berbagai kebutuhan acara spesial Anda.

            </p>

            <p className="text-base leading-relaxed text-gray-400">

              Kami menyediakan berbagai kebutuhan dekorasi mulai dari
              sarung meja, sarung kursi, rumbai, plafon, background,
              skirting meja, hingga rangka tenda untuk menciptakan
              suasana acara yang lebih berkesan dan nyaman.

            </p>

            <p className="text-base leading-relaxed text-gray-400">

              Dengan pelayanan yang profesional dan kualitas dekorasi
              yang terjaga, kami siap membantu menghadirkan tampilan acara
              yang lebih menarik, modern, dan berkelas.

            </p>

          </div>

          {/* Highlight Box */}
          <div className="mt-10 rounded-3xl border border-[#D4AF37]/20 bg-white/5 p-6 backdrop-blur-sm">

            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#D4AF37]">
              Komitmen Kami
            </p>

            <h3 className="text-2xl font-semibold leading-snug text-white">

              Menghadirkan dekorasi yang elegan,
              modern, dan berkesan untuk setiap acara.

            </h3>

          </div>

        </div>

      </div>
    </section>
  );
}