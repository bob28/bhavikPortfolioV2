import { LampContainer } from "@/components/ui/lamp";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-slate-900">
      <Navbar />
      <div className=" mx-auto rounded-md overflow-hidden">
        <LampContainer color="green">
          <h1 className=" bg-gradient-to-b from-green-400 to-slate-800 py-4 bg-clip-text text-center font-medium tracking-tight text-transparent text-6xl md:text-8xl">
            Hi. I'm Bhavik <br />A Developer
          </h1>
        </LampContainer>
      </div>
      <div className="container mx-auto">hello</div>
      <Footer />

      {/* <div>
        <BackgroundBeamsWithCollision>
          <div className="text-center flex flex-col">
            <div className="text-2xl text-left z-20 md:text-6xl lg:text-7xl font-bold text-white">
              Hi! I&apos;m{" "}
              <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r  from-sky-500 via-cyan-500 to-teal-500 py-4">
                  <span className="">Bhavik Naik</span>
                </div>
              </div>
              <div className="text-gray-300 font-bold text-2xl mt-5">
                <h3>A Software Developer based in the Greater Toronto Area</h3>
              </div>
            </div>
          </div> */}
      {/* <div className="flex flex-col md:flex-row md:gap-40 justify-center items-center">
            <div className="text-2xl text-left z-20 md:text-5xl lg:text-6xl font-bold text-white">
              Hi! I&apos;m{" "}
              <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r  from-sky-500 via-cyan-500 to-teal-500 py-4">
                  <span className="">Bhavik Naik</span>
                </div>
              </div>
              <div className="text-gray-300 font-bold text-2xl mt-5">
                <h3>Software Developer</h3>
                <h3 className="mt-4">Based in the Greater Toronto Area</h3>
              </div>
            </div>
            <div className="hidden md:inline-block h-[250px] min-h-[1em] w-1 self-stretch bg-gradient-to-b  from-sky-500 via-cyan-500 to-teal-500"></div>
            <div className="">
              <ul className="text-gray-300 font-bold text-2xl mt-5 ">
                <li className="">
                  3+ years in I.T, from web dev to blockchain
                </li>
                <li className="mt-3">Master&apos;s in I.T Security & AI</li>
                <li className="mt-3">Writing code at Forged Operations</li>
                <li className="mt-3">
                  Photographer, tennis player, Enactus alumni
                </li>
              </ul>
            </div>
          </div> */}
      {/* <h2 className="text-2xl  z-20 md:text-4xl lg:text-5xl font-bold text-center text-white leading-loose font-sans ">
            Welcome! I'm Bhavik Naik, a developer, located in Toronto. I have
            over 3 years of experience in a wide range of development tools,
            from full stack web development to blockchain network creation. I
            have a Master's in I.T Security, Artificial Intelligence. Have a
            look at my resume to see my experiences so far! Outside of
            development, I am a freelance photographer, an Enactus alumni, and I
            enjoy playing tennis and writing! I look forward to working with
            you! What&apos;s cooler than Beams?{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">Exploding beams.</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span className="">Exploding beams.</span>
              </div>
            </div>
          </h2> */}
      {/* </BackgroundBeamsWithCollision> */}
    </main>
  );
}
