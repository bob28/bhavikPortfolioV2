"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import photographyData from "@/src/photographyData.json";
import { LampContainer } from "@/components/ui/lamp";
import { Gallery } from "react-grid-gallery";

// import { getImageDimensions } from "../tools/getImageSizes";

export default function Page() {
  // get the images and dimensions
  // const images = getImageDimensions();

  return (
    <main className="bg-slate-900">
      <Navbar />
      <LampContainer color="red">
        <h1 className=" bg-gradient-to-b from-red-500 to-slate-800 py-4 bg-clip-text text-center font-medium tracking-tight text-transparent text-6xl md:text-8xl">
          Photography
        </h1>
      </LampContainer>
      <div className="container">
        <h2 className="text-3xl text-red-200 mb-3 font-bold">
          Freelance photography
        </h2>
        <p className="text-white mb-10 text-lg">
          These are a couple of the freelance pictures I've taken in the car
          category
        </p>
        <Gallery
          images={photographyData}
          enableImageSelection={false}
          rowHeight={350}
          margin={3}
        />
      </div>
      <Footer />
    </main>
  );
}
