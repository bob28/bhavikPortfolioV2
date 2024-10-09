"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import ResumeCards from "@/components/resumeCards";
import resumeData from "@/src/resumeData.json";
import {
  FaArrowUp,
  FaJava,
  FaNode,
  FaVuejs,
  FaAws,
  FaNetworkWired,
  FaLanguage,
} from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import { TbApi } from "react-icons/tb";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiC,
  SiGo,
  SiTerraform,
  SiSolidity,
  SiExpress,
  SiNuxtdotjs,
  SiReact,
  SiNextdotjs,
  SiFlask,
  SiTailwindcss,
  SiCypress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiMicrosoftazure,
  SiGooglecloud,
  SiJira,
} from "react-icons/si";
import { PiDotsThreeCircleFill } from "react-icons/pi";
import { MdFoundation } from "react-icons/md";

export default function Resume() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // This is for the scroll to top button. Handles the button visibility and adds the scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const languages = [
    { name: "Python", icon: <SiPython /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "C", icon: <SiC /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Go", icon: <SiGo /> },
    { name: "Terraform", icon: <SiTerraform /> },
    { name: "Solidity", icon: <SiSolidity /> },
  ];
  const frameworks = [
    { name: "Node.js", icon: <FaNode /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Vue.js", icon: <FaVuejs /> },
    { name: "Nuxt.js", icon: <SiNuxtdotjs /> },
    { name: "React.js", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Flask", icon: <SiFlask /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Cypress", icon: <SiCypress /> },
    { name: "Hyperledger", icon: <CiLink /> },
  ];
  const otherSkills = [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Git", icon: <SiGit /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Azure", icon: <SiMicrosoftazure /> },
    { name: "Google Cloud", icon: <SiGooglecloud /> },
    { name: "REST", icon: <TbApi /> },
    { name: "Jira", icon: <SiJira /> },
    { name: "Networking", icon: <FaNetworkWired /> },
  ];

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
        {showScrollButton && (
          <Button
            icon={<FaArrowUp />}
            rounded
            aria-label="Scroll to top"
            className="bg-blue-400 hover:bg-blue-500 fixed bottom-16 right-10"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          ></Button>
        )}
        {/* <div className="flex gap-8 justify-center mt-8">
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
        </div> */}
        <h1 className="text-3xl text-slate-300 my-10 font-bold ">Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card
            className="shadow-lg rounded-lg bg-slate-800 hover:bg-slate-900 hover:border hover:border-blue-500"
            pt={{
              body: {
                className: "p-5 py-0",
              },
            }}
          >
            <div className="flex flex-col items-center mb-5">
              <FaLanguage className="text-7xl text-blue-400 mb-2" />
              <h1 className="text-center text-2xl font-bold">Languages</h1>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 w-full">
              {languages.map((language, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between mb-3 text-lg"
                >
                  {index % 2 === 0 ? (
                    <>
                      <span className="text-right flex-1 mr-4">
                        {language.name}
                      </span>
                      <span className="text-blue-400 text-2xl">
                        {language.icon}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-blue-400 text-2xl ">
                        {language.icon}
                      </span>
                      <span className="text-left flex-1 ml-4">
                        {language.name}
                      </span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </Card>
          <Card
            className=" shadow-lg rounded-lg bg-slate-800 hover:bg-slate-900 hover:border hover:border-blue-500"
            pt={{
              body: {
                className: "p-5 py-0",
              },
            }}
          >
            <div className="flex flex-col items-center justify-center my-auto mb-5">
              <MdFoundation className="text-7xl text-blue-400 mb-2" />
              <h1 className="text-center text-2xl font-bold">Frameworks</h1>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 w-full">
              {frameworks.map((language, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between mb-3 text-lg"
                >
                  {index % 2 === 0 ? (
                    <>
                      <span className="text-right flex-1 mr-4">
                        {language.name}
                      </span>
                      <span className="text-blue-400 text-2xl">
                        {language.icon}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-blue-400 text-2xl ">
                        {language.icon}
                      </span>
                      <span className="text-left flex-1 ml-4">
                        {language.name}
                      </span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </Card>
          <Card
            className=" shadow-lg rounded-lg bg-slate-800 hover:bg-slate-900 hover:border hover:border-blue-500"
            pt={{
              body: {
                className: "p-5 py-0",
              },
            }}
          >
            <div className="flex flex-col items-center justify-center my-auto mb-5">
              <PiDotsThreeCircleFill className="text-6xl text-blue-400 mb-5" />
              <h1 className="text-center text-2xl font-bold">Other</h1>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 w-full">
              {otherSkills.map((language, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between mb-3 text-lg"
                >
                  {index % 2 === 0 ? (
                    <>
                      <span className="text-right flex-1 mr-4">
                        {language.name}
                      </span>
                      <span className="text-blue-400 text-2xl">
                        {language.icon}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-blue-400 text-2xl ">
                        {language.icon}
                      </span>
                      <span className="text-left flex-1 ml-4">
                        {language.name}
                      </span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>

        <h1 className="text-3xl text-slate-300 my-10 font-bold ">Experience</h1>
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
        <h1 className="text-3xl text-slate-300 my-10 font-bold ">
          Volunteer Experiences
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {resumeData
            .filter((item) => item.category === "Volunteer")
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
