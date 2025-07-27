"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { LampContainer } from "@/components/ui/lamp";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import ResumeCards from "@/components/resumeCards";
import resumeData from "@/src/resumeData.json";
import { ShootingStars } from "../../components/ui/shooting-stars";
import { StarsBackground } from "../../components/ui/stars-background";
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
import { PiDotsThreeCircle } from "react-icons/pi";
import { MdFoundation } from "react-icons/md";
import { FaGears, FaLightbulb } from "react-icons/fa6";

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
    6;
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
      <LampContainer color="blue" className="-mb-1">
        <h1 className="bg-gradient-to-b from-blue-500 to-slate-800 py-4 bg-clip-text text-center font-medium tracking-tight text-transparent text-7xl md:text-8xl">
          Resume
        </h1>
        {/* <div className="justify-center">
          <Button
            className="border-2 border-blue-400 p-2 mt-8 text-slate-200 text-sm hover:bg-blue-700 -mb-14 rounded-md"
            label="Download Resume"
            onClick={() => window.open("/Bhavik-Naik-Resume.pdf", "_blank")}
          />
        </div> */}
      </LampContainer>
      <div className="container mx-auto -mt-10">
        <div className="fixed right-0 bottom-16 flex flex-col gap-2">
          {showScrollButton && (
            <Button
              icon={<FaArrowUp />}
              aria-label="Scroll to top"
              className="text-xl bg-blue-400 hover:bg-blue-500 text-slate-900 py-1  shadow-md"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              tooltipOptions={{
                position: "left",
                mouseTrack: true,
              }}
              tooltip="Scroll to Top"
            ></Button>
          )}
          <Button
            icon={<FaGears />}
            size="large"
            className="text-3xl bg-blue-400 text-slate-900 p-1 hover:bg-blue-500"
            tooltipOptions={{
              position: "left",
              mouseTrack: true,
            }}
            tooltip="Skills"
            onClick={() => {
              document
                .querySelector("#skills")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
          <Button
            icon={<FaLightbulb />}
            size="large"
            className="text-2xl bg-blue-400 text-slate-900 p-1 hover:bg-blue-500"
            tooltipOptions={{
              position: "left",
              mouseTrack: true,
            }}
            tooltip="Experience"
            onClick={() => {
              document
                .querySelector("#experience")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
          <Button
            icon={<FaGraduationCap />}
            size="large"
            className="text-2xl bg-blue-400 text-slate-900 p-1 hover:bg-blue-500"
            tooltipOptions={{
              position: "left",
              mouseTrack: true,
            }}
            tooltip="Education"
            onClick={() => {
              document
                .querySelector("#education")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
          <Button
            icon={<FaHandsHelping />}
            size="large"
            className="text-2xl bg-blue-400 text-slate-900 p-1 hover:bg-blue-500"
            tooltipOptions={{
              position: "left",
              mouseTrack: true,
            }}
            tooltip="Volunteer"
            onClick={() => {
              document
                .querySelector("#volunteer")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
        <div className="flex justify-center gap-4">
          <Button
            icon={<FaGears />}
            className="text-2xl bg-blue-400 text-slate-900 p-2 hover:bg-blue-500"
            onClick={() => {
              document
                .querySelector("#skills")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
          <Button
            icon={<FaLightbulb />}
            className="text-2xl bg-blue-400 text-slate-900 p-2 hover:bg-blue-500"
            onClick={() => {
              document
                .querySelector("#experience")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
          <Button
            icon={<FaGraduationCap />}
            className="text-2xl bg-blue-400 text-slate-900 p-2 hover:bg-blue-500"
            onClick={() => {
              document
                .querySelector("#education")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
          <Button
            icon={<FaHandsHelping />}
            className="text-2xl bg-blue-400 text-slate-900 p-2 hover:bg-blue-500"
            onClick={() => {
              document
                .querySelector("#volunteer")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
        <h1 id="skills" className="text-3xl text-slate-300 my-10 font-bold ">
          Skills
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card
            className="shadow-lg rounded-2xl bg-slate-800 hover:bg-slate-900 "
            pt={{
              body: {
                className: "p-5 py-0",
              },
            }}
          >
            <div className="flex flex-col items-center mb-5">
              <FaLanguage className="text-5xl text-blue-400 mb-2" />
              <h1 className="text-center text-xl font-bold">Languages</h1>
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
                      <span className="text-blue-400 text-xl">
                        {language.icon}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-blue-400 text-xl ">
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
            className=" shadow-lg rounded-2xl bg-slate-800 hover:bg-slate-900 "
            pt={{
              body: {
                className: "p-5 py-0",
              },
            }}
          >
            <div className="flex flex-col items-center justify-center my-auto mb-5">
              <MdFoundation className="text-5xl text-blue-400 mb-2" />
              <h1 className="text-center text-xl font-bold">Frameworks</h1>
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
                      <span className="text-blue-400 text-xl">
                        {language.icon}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-blue-400 text-xl ">
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
            className=" shadow-lg rounded-2xl bg-slate-800 hover:bg-slate-900 "
            pt={{
              body: {
                className: "p-5 py-0",
              },
            }}
          >
            <div className="flex flex-col items-center justify-center my-auto mb-5">
              <PiDotsThreeCircle className="text-5xl text-blue-400 mb-2 mt-0.5" />
              <h1 className="text-center text-xl font-bold">Other</h1>
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
                      <span className="text-blue-400 text-xl">
                        {language.icon}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-blue-400 text-xl ">
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

        <h1
          id="experience"
          className="text-3xl text-slate-300 my-10 font-bold "
        >
          Experience
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 z-50">
          {resumeData
            .filter((item) => item.category === "Experience")
            .map((item, index) => (
              <ResumeCards key={index} data={item} type={"Experience"} />
            ))}
        </div>
        <h1 id="education" className="text-3xl text-slate-300 my-10 font-bold ">
          Education
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {resumeData
            .filter((item) => item.category === "Education")
            .map((item, index) => (
              <ResumeCards key={index} data={item} type={"Education"} />
            ))}
        </div>
        <h1 id="volunteer" className="text-3xl text-slate-300 my-10 font-bold ">
          Volunteer Experiences
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-10">
          {resumeData
            .filter((item) => item.category === "Volunteer")
            .map((item, index) => (
              <ResumeCards key={index} data={item} type={"Education"} />
            ))}
        </div>
      </div>
      <div className="fixed inset-0 -z-1 pointer-events-none">
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
      <div className="z-50">
        <Footer />
      </div>
    </main>
  );
}
