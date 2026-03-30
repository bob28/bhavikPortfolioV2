import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { LampContainer } from "@/components/ui/lamp";
import { PhotographyClient } from "@/components/PhotographyClient";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { FaCamera, FaArrowRight, FaInstagram } from "react-icons/fa";
import photosData from "@/data/photos.json";

export default function Page() {
  const { categories, photos: enrichedPhotos } = photosData;

  return (
    <main className="bg-slate-900 relative min-h-screen">
      <div className="relative z-10 w-full overflow-hidden">
        <Navbar />
        <LampContainer color="red" className="-mb-1">
          <h1 className="bg-gradient-to-b from-red-500 to-slate-800 py-4 bg-clip-text text-center font-medium tracking-tight text-transparent text-7xl md:text-8xl">
            Photography
          </h1>
        </LampContainer>

        <div className="container mx-auto px-2 pb-10 -mt-14 relative z-10 text-center">
          <PhotographyClient photos={enrichedPhotos} categories={categories} />

          <div className="mt-16 mb-5 max-w-4xl mx-auto px-2">
            <div className="relative group transition-all duration-500 hover:-translate-y-2">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-rose-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-slate-800/40 backdrop-blur-xl border-l-4 border-l-red-500 rounded-2xl p-8 md:p-12 shadow-2xl border border-slate-700/50 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 text-red-500">
                  <FaCamera className="w-32 h-32" />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1 text-center md:text-left">
                    <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-widest mb-4 border border-red-500/20">
                      Photography Booking
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
                      Book Your Next Session
                    </h2>
                    <p className="text-slate-300 text-md leading-relaxed mb-0">
                      Whether it&apos;s a high-performance automotive shoot, professional event coverage, or a personal milestone, I&apos;d love to help you tell your story through my lens.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 w-full md:w-auto">
                    <a
                      href="mailto:bhavik.naik28@gmail.com"
                      className="group/btn flex items-center justify-center gap-2 px-8 py-4 bg-red-700/75 hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 shadow-xl shadow-red-900/30 transform active:scale-95"
                    >
                      <span>Inquire via Email</span>
                      <FaArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="https://instagram.com/bhavikn28"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/insta flex items-center justify-center gap-2 px-8 py-4 bg-slate-900/60 hover:bg-slate-900/80 border border-slate-700 hover:border-red-500/50 text-slate-200 hover:text-white font-bold rounded-xl transition-all duration-300 backdrop-blur-sm transform active:scale-95 shadow-lg hover:shadow-red-900/20"
                    >
                      <FaInstagram className="w-5 h-5 transition-transform duration-300 group-hover/insta:scale-110 group-hover/insta:text-rose-400" />
                      <span>Message me on Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <ShootingStars
            maxDelay={20000}
            minDelay={10000}
            starColor={"#f43f5e"}
            trailColor="#fb7185"
            starWidth={15}
            starHeight={2}
            maxSpeed={30}
          />
          <StarsBackground starDensity={0.0005} />
        </div>

        <Footer />
      </div>
    </main>
  );
}
