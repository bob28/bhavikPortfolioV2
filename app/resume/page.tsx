"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { LampContainer } from "@/components/ui/lamp";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import ResumeCards, { ResumeData } from "@/components/resumeCards";
import resumeData from "@/src/resumeData.json";
import { ShootingStars } from "../../components/ui/shooting-stars";
import { StarsBackground } from "../../components/ui/stars-background";
import { motion } from "framer-motion";
import {
  FaArrowUp,
  FaJava,
  FaNode,
  FaVuejs,
  FaAws,
  FaNetworkWired,
  FaLanguage,
  FaGraduationCap,
  FaHandsHelping,
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
  SiClaude,
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
  SiGooglecloud,
  SiJira,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { PiDotsThreeCircle } from "react-icons/pi";
import { MdFoundation } from "react-icons/md";
import { FaGears, FaLightbulb } from "react-icons/fa6";

export default function Resume() {
  const [showScrollButton, setShowScrollButton] = useState(false);

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

  const skillCategories = [
    {
      title: "Languages & Databases",
      icon: <FaLanguage className="text-3xl text-blue-400" />,
      items: [
        { name: "Python", icon: <SiPython /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "C", icon: <SiC /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Go", icon: <SiGo /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Terraform", icon: <SiTerraform /> },
        // { name: "Solidity", icon: <SiSolidity /> },
      ],
    },
    {
      title: "Frameworks",
      icon: <MdFoundation className="text-3xl text-blue-400" />,
      items: [
        { name: "Node.js", icon: <FaNode /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "Vue", icon: <FaVuejs /> },
        { name: "Nuxt.js", icon: <SiNuxtdotjs /> },
        { name: "React.js", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Flask", icon: <SiFlask /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "Langchain", icon: <CiLink /> },

      ],
    },
    {
      title: "Tools & Platforms",
      icon: <PiDotsThreeCircle className="text-3xl text-blue-400" />,
      items: [
        { name: "GCP", icon: <SiGooglecloud /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "Azure", icon: <VscAzure /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "Git", icon: <SiGit /> },
        { name: "REST", icon: <TbApi /> },
        { name: "Jira", icon: <SiJira /> },
        { name: "Claude Code", icon: <SiClaude /> },
        // { name: "Networking", icon: <FaNetworkWired /> },
      ],
    },
  ];

  // Prepare unified chronological timeline data
  const timelineData = (resumeData as ResumeData[])
    .filter((item) => ["Experience", "Education", "Volunteer"].includes(item.category))
    .sort((a, b) => {
      const getEpoch = (item: ResumeData) => {
        if (!item.endDate || item.endDate.toLowerCase() === "present") return new Date().getTime();
        const epoch = new Date(item.endDate).getTime();
        if (isNaN(epoch)) return new Date(item.startDate).getTime();
        return epoch;
      };

      const dateA = getEpoch(a);
      const dateB = getEpoch(b);

      if (isNaN(dateA) || isNaN(dateB)) {
        const yearA = parseInt(a.years[0] || "0");
        const yearB = parseInt(b.years[0] || "0");
        return yearB - yearA;
      }

      if (dateB === dateA) {
        const startA = new Date(a.startDate).getTime();
        const startB = new Date(b.startDate).getTime();
        return startB - startA;
      }
      return dateB - dateA;
    });

  return (
    <main className="bg-slate-900 relative min-h-screen">
      <div className="relative z-10 w-full overflow-hidden">
        <Navbar />
        <LampContainer color="blue" className="-mb-1">
          <h1 className="bg-gradient-to-b from-blue-500 to-slate-800 py-4 bg-clip-text text-center font-medium tracking-tight text-transparent text-7xl md:text-8xl">
            Resume
          </h1>
        </LampContainer>

        <div className="container mx-auto -mt-10 relative z-10 px-4 md:px-5">
          <div className="fixed right-4 md:right-8 bottom-8 md:bottom-16 flex flex-col gap-2 z-50">
            {showScrollButton && (
              <Button
                icon={<FaArrowUp />}
                aria-label="Scroll to top"
                className="text-xl bg-blue-400 hover:bg-blue-500 text-slate-900 py-2 shadow-lg rounded-full"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                tooltipOptions={{ position: "left", mouseTrack: true }}
                tooltip="Scroll to Top"
              ></Button>
            )}
            {/* <Button
              icon={<FaGears />}
              size="large"
              className="text-2xl bg-slate-800 text-blue-400 p-2 hover:bg-slate-700 rounded-full shadow-lg border border-slate-700"
              tooltipOptions={{ position: "left", mouseTrack: true }}
              tooltip="Skills"
              onClick={() => {
                document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            />
            <Button
              icon={<FaLightbulb />}
              size="large"
              className="text-2xl bg-slate-800 text-blue-400 p-2 hover:bg-slate-700 rounded-full shadow-lg border border-slate-700"
              tooltipOptions={{ position: "left", mouseTrack: true }}
              tooltip="Timeline"
              onClick={() => {
                document.querySelector("#timeline")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            /> */}
          </div>

          {/* Skills Section */}
          <h1 id="skills" className="text-3xl text-slate-300 mb-8 font-bold scroll-mt-24 text-center md:text-left">
            Skills
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-15 z-20 relative">
            {skillCategories.map((category, catIdx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="relative flex flex-col items-center p-2 lg:p-2 bg-slate-800/40 rounded-2xl border border-slate-700/50 backdrop-blur-md hover:bg-slate-800/60 hover:border-slate-500/50 transition-all group shadow-xl mx-5 md:mx-0"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-[2rem] transition-opacity duration-500 pointer-events-none" />

                <div className="flex flex-col items-center mb-6 mt-2 relative z-10 w-full">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-slate-900/50 rounded-xl group-hover:scale-110 group-hover:-translate-y-0.5 transition-all duration-300 shadow-inner flex items-center justify-center">
                      {category.icon}
                    </div>
                    <h2 className="text-lg lg:text-xl font-bold text-slate-100 tracking-wide">
                      {category.title}
                    </h2>
                  </div>
                  <div className="h-1 w-12 bg-blue-500/50 rounded-full mt-4 group-hover:w-24 group-hover:bg-blue-400 transition-all duration-300" />
                </div>

                <div className="flex flex-wrap justify-center gap-3 w-full relative z-10">
                  {category.items.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2.5 px-3 py-1.5 bg-slate-900/80 rounded-full border border-slate-700/50 text-slate-300 text-sm md:text-base hover:text-white hover:border-blue-500/50 hover:bg-slate-800 transition-all shadow-sm hover:shadow-blue-500/20 cursor-default"
                    >
                      <span className="text-blue-400 text-lg transition-transform group-hover:scale-110">
                        {skill.icon}
                      </span>
                      <span className="font-medium text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline Section */}
          <h1 id="timeline" className="text-3xl text-slate-300 mb-12 font-bold scroll-mt-24 text-center md:text-left">
            Career Timeline
          </h1>

          <div className="relative w-full max-w-5xl mx-auto pb-5 z-20">
            {/* The Vertical Line */}
            {/* Desktop Line (Center) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-[3px] border-slate-700/50"></div>
            {/* Mobile Line (Left) */}
            <div className="md:hidden absolute left-5 h-full border-l-[3px] border-slate-700/50"></div>

            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;

              // Dot colors based on category
              let dotColor = "bg-rose-400 border-rose-900";
              if (item.category === "Education") {
                dotColor = "bg-amber-400 border-amber-900";
              }
              if (item.category === "Volunteer") {
                dotColor = "bg-emerald-400 border-emerald-900";
              }

              return (
                <div key={index} className="relative flex items-center justify-between w-full mb-5 md:mb-0">
                  {/* Desktop Right Alignment Spacing */}
                  {!isEven && <div className="hidden md:block w-5/12"></div>}

                  {/* The Card */}
                  <div className={`w-full md:w-[45%] pl-14 pr-4 md:px-0 ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <ResumeCards data={item} type={item.category} />
                  </div>

                  {/* Desktop Left Alignment Spacing */}
                  {isEven && <div className="hidden md:block w-5/12"></div>}

                  {/* The Timeline Dot */}
                  <div className={`absolute left-5 md:left-1/2 flex items-center justify-center w-6 h-6 rounded-full border-[3px] transform -translate-x-1/2 shadow-lg ${dotColor} z-10 top-6 md:top-1/2 md:-translate-y-1/2`}>
                    {/* {dotIcon} */}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Background Elements */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <ShootingStars
            maxDelay={9000}
            minDelay={4000}
            starColor={"#3b82f6"}
            trailColor="#3b82f6"
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
