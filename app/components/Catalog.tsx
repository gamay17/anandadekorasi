"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

export default function Catalog() {
  const catalogs = [
    {
      title: "Sarung Meja",
      category: "Dekorasi",
      images: [
        "/catalog/meja-1.jpeg",
        "/catalog/meja-2.jpeg",
        "/catalog/meja-3.jpeg",
        "/catalog/meja-4.jpeg",

      ],
    },

    {
      title: "Sarung Kursi",
      category: "Dekorasi",
      images: [
        "/catalog/kursi-1.jpeg",
        "/catalog/kursi-2.jpeg",
        "/catalog/kursi-3.jpeg",
        "/catalog/kursi-4.jpeg",
      ],
    },

    {
      title: "Rumbai",
      category: "Dekorasi",
      images: [
        "/catalog/rumbai-1.jpeg",
        "/catalog/rumbai-2.jpeg",
      ],
    },

    {
      title: "Plafon",
      category: "Dekorasi",
      images: [
        "/catalog/plafon-1.jpeg",
        "/catalog/plafon-2.jpeg",
      ],
    },

    {
      title: "Background",
      category: "Dekorasi",
      images: [
        "/catalog/background-1.jpeg",
        "/catalog/background-2.jpeg",
      ],
    },

    {
      title: "Skirting Meja",
      category: "Dekorasi",
      images: [
        "/catalog/skriting-1.jpeg",
      ],
    },

    {
      title: "Rangka Tenda",
      category: "Tenda",
      images: [
        "/catalog/rangka-1.jpeg",
      ],
    },
  ];

  return (
    <section
      id="katalog"
      className="bg-[#0A0A0A] py-24 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#D4AF37] uppercase tracking-[0.35em] text-sm mb-4">
            Katalog
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Kebutuhan Dekorasi
            <span className="block text-[#D4AF37] mt-2">
              & Perlengkapan Acara
            </span>
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed text-base md:text-lg">
            Menyediakan berbagai perlengkapan dekorasi dan kebutuhan acara
            dengan tampilan yang elegan, rapi, dan profesional untuk
            menciptakan suasana acara yang lebih berkesan.
          </p>
        </div>

        {/* Category Menu */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">

          {[
            "Sarung Meja",
            "Sarung Kursi",
            "Rumbai",
            "Plafon",
            "Background",
            "Skirting Meja",
            "Rangka Tenda",
          ].map((item) => (
            <button
              key={item}
              className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition duration-300"
            >
              {item}
            </button>
          ))}

        </div>

        {/* Catalog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {catalogs.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111111] hover:border-[#D4AF37]/20 transition duration-300 ${
                index === catalogs.length - 1
                  ? "sm:col-span-2 lg:col-span-1 lg:col-start-2"
                  : ""
              }`}
            >

              {/* Image Slider */}
              <div className="relative h-[320px] bg-[#0F0F0F]">

                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    prevEl: `.prev-${index}`,
                    nextEl: `.next-${index}`,
                  }}
                  slidesPerView={1}
                  loop={true}
                  className="h-full"
                >

                  {item.images.map((image, i) => (
                    <SwiperSlide key={i}>
                      <div className="relative h-[320px] w-full flex items-center justify-center bg-[#0F0F0F]">

                        <Image
                          src={image}
                          alt={item.title}
                          width={600}
                          height={400}
                          className="max-h-full max-w-full object-contain"
                        />

                      </div>
                    </SwiperSlide>
                  ))}

                </Swiper>

                {/* Navigation Buttons */}
                {item.images.length > 1 && (
                  <>
                    <button
                      className={`prev-${index} absolute left-3 top-1/2 z-10 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition`}
                    >
                      <ChevronLeft size={18} />
                    </button>

                    <button
                      className={`next-${index} absolute right-3 top-1/2 z-10 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition`}
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}

              </div>

              {/* Content */}
              <div className="p-6">

                <p className="text-[#D4AF37] text-sm mb-2 tracking-wide">
                  {item.category}
                </p>

                <h3 className="text-2xl font-semibold text-white group-hover:text-[#D4AF37] transition duration-300">
                  {item.title}
                </h3>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}