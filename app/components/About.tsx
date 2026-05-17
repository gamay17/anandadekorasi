import Image from "next/image";

export default function About() {
  return (
    <section
      id="tentang"
      className="bg-[#111111] py-24 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* Image */}
        <div className="relative">
          <div className="absolute -inset-2 rounded-3xl border border-[#D4AF37]/20" />

          <Image
            src="/About.jpg"
            alt="Tentang Ananda Dekorasi"
            width={700}
            height={700}
            className="relative rounded-3xl object-cover h-[500px] w-full"
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-4">
            Tentang Kami
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            Dekorasi Elegan
            <span className="block text-[#D4AF37]">
              Untuk Momen Terbaik Anda
            </span>
          </h2>

          <p className="mt-6 text-gray-300 leading-relaxed">
            Ananda Dekorasi hadir sebagai solusi profesional dalam layanan
            konveksi, dekorasi, dan penyediaan tenda untuk berbagai acara.
            Kami berkomitmen menghadirkan konsep dekorasi yang elegan,
            modern, dan berkesan untuk setiap momen spesial Anda.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed">
            Dengan pengalaman dan pelayanan terbaik, kami siap membantu
            mewujudkan acara impian mulai dari pernikahan, gathering,
            event perusahaan, hingga berbagai acara lainnya.
          </p>

          {/* Stats */}
          
        </div>
      </div>
    </section>
  );
}