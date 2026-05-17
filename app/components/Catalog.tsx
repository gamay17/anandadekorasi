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
      className="bg-[#0A0A0A] px-6 py-24 md:px-10"
    >

      <div className="mx-auto w-full max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
            Katalog
          </p>

          <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">

            Kebutuhan Dekorasi
            <span className="mt-2 block text-[#D4AF37]">
              & Perlengkapan Acara
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">

            Menyediakan berbagai perlengkapan dekorasi dan kebutuhan acara
            dengan tampilan yang elegan, rapi, dan profesional untuk
            menciptakan suasana acara yang lebih berkesan.

          </p>

        </div>

        {/* Category Menu */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">

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
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 transition duration-300 hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
            >
              {item}
            </button>
          ))}

        </div>

        {/* Catalog Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {catalogs.map((item, index) => (
            <div
              key={index}
              className={`group overflow-hidden rounded-3xl border border-white/10 bg-[#111111] transition duration-300 hover:border-[#D4AF37]/20 ${
                index === catalogs.length - 1
                  ? "sm:col-span-2 lg:col-span-1 lg:col-start-2"
                  : ""
              }`}
            >

              {/* Image Slider */}
              <div className="relative flex h-[320px] items-center justify-center overflow-hidden bg-[#0F0F0F]">

                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    prevEl: `.prev-${index}`,
                    nextEl: `.next-${index}`,
                  }}
                  slidesPerView={1}
                  loop={true}
                  className="h-full w-full"
                >

                  {item.images.map((image, i) => (
                    <SwiperSlide key={i}>

                      <div className="flex h-[320px] w-full items-center justify-center p-4">

                        <Image
                          src={image}
                          alt={item.title}
                          width={600}
                          height={400}
                          className="h-[280px] w-auto object-contain"
                          style={{ margin: "0 auto" }}
                        />

                      </div>

                    </SwiperSlide>
                  ))}

                </Swiper>

                {/* Navigation */}
                {item.images.length > 1 && (
                  <>

                    <button
                      className={`prev-${index} absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white transition duration-300 hover:border-[#D4AF37]/40 hover:text-[#D4AF37]`}
                    >
                      <ChevronLeft size={18} />
                    </button>

                    <button
                      className={`next-${index} absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white transition duration-300 hover:border-[#D4AF37]/40 hover:text-[#D4AF37]`}
                    >
                      <ChevronRight size={18} />
                    </button>

                  </>
                )}

              </div>

              {/* Content */}
              <div className="p-6">

                <p className="mb-2 text-sm tracking-wide text-[#D4AF37]">
                  {item.category}
                </p>

                <h3 className="text-2xl font-semibold text-white transition duration-300 group-hover:text-[#D4AF37]">
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