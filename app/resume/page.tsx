import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ResumeCards from "@/components/resumeCards";
import resumeData from "@/src/resumeData.json";
import { style } from "framer-motion/client";

export default function resume() {
  return (
    <main className=" bg-slate-900">
      <Navbar />

      <div className="relative">
        <div className="h-96 w-full bg-slate-900 bg-[radial-gradient(#333333_1px,transparent_1px)] [background-size:16px_16px]">
          <div className="text-white text-center pt-48">
            <h1 className="text-5xl font-bold mb-4">Resume</h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex gap-8 justify-center mt-8">
          <div>
            <a
              href="#_"
              className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-teal-50 text-teal-600 inline-block"
            >
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-teal-600 group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white">
                Skills & Tools
              </span>
            </a>
          </div>
          <div>
            <a
              href="#_"
              className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-cyan-50 text-cyan-600 inline-block"
            >
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-cyan-600 group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white">
                Experience
              </span>
            </a>
          </div>
          <div>
            <a
              href="#_"
              className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-sky-50 text-sky-600 inline-block"
            >
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-sky-600 group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white">Education</span>
            </a>
          </div>
          <div>
            <a
              href="#_"
              className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-blue-50 text-blue-600 inline-block"
            >
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-600 group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white">
                Volunteering
              </span>
            </a>
          </div>
        </div>
        <h1 className="text-3xl text-slate-300 my-10 font-bold ">
          Professional Experiences
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resumeData
            .filter((item) => item.category === "Experience")
            .map((item, index) => (
              <ResumeCards key={index} data={item} type={"Experience"} />
            ))}
        </div>
        <h1 className="text-3xl text-slate-300 my-10 font-bold ">Education</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resumeData
            .filter((item) => item.category === "Education")
            .map((item, index) => (
              <ResumeCards key={index} data={item} type={"Education"} />
            ))}
        </div>
      </div>

      {/* 
      <div className=" mx-auto rounded-md overflow-hidden bg-slate-950">
        {resumeData.map((section) => (
          <section key={section.title} className="p-8">
            <h2 className="text-3xl font-bold text-neutral-100">
              {section.name}
            </h2>
          </section>
        ))}
      </div> */}
      <Footer />
    </main>
  );
}
