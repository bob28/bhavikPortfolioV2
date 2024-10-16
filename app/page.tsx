"use client";
import { LampContainer } from "@/components/ui/lamp";
import { Meteors } from "@/components/ui/meteors";
import { Button } from "primereact/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Chip } from "primereact/chip";

import {
  FaUserTie,
  FaCamera,
  FaBlog,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { MdContactMail } from "react-icons/md";
import { summary } from "framer-motion/client";

const PortfolioProjectContent = () => {
  return (
    <div className="px-4 pb-2 md:px-14 md:pb-10 ">
      <h2 className="text-3xl font-bold text-slate-200 mb-3">Portfolio V2</h2>
      <div className="flex flex-wrap gap-2 mt-2">
        <Chip label="Next.js" className="text-sm" />
        <Chip label="React" className="text-sm" />
        <Chip label="Vercel" className="text-sm" />
        <Chip label="TailwindCSS" className="text-sm" />
        <Chip label="AceternityUI" className="text-sm" />
        <Chip label="PrimeReact" className="text-sm" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-5 mt-4">
        <div>
          <h3 className="text-xl font-semibold text-slate-200">Type</h3>
          <p className="text-slate-300">Frontend development</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-200">URL</h3>
          <a
            href="https://bhaviknaik.com"
            className="text-green-400 hover:underline"
            target="_blank"
          >
            Link to project
          </a>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-200">
            GitHub Repository
          </h3>
          <a href="" className="text-green-400 hover:underline" target="_blank">
            Github
          </a>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-xl font-semibold text-slate-200">Summary</h3>
        <p className="text-slate-300">
          I built this portfolio website to showcase my resume, projects, and
          photography. The site is developed using Next.js and React, styled
          with TailwindCSS, and utilizes components from PrimeReact and
          AceternityUI. It is deployed with Vercel and hosted by GitHub pages.
          It features a dynamic carousel to display my projects, and sections
          dedicated to my professional experience, personal interests, and
          contact information.
        </p>
      </div>
    </div>
  );
};

const ChatVoiceContent = () => {
  return (
    <div className="px-4 pb-2 md:px-14 md:pb-10 ">
      <h2 className="text-3xl font-bold text-slate-200 mb-3">
        Chat and Voice Application
      </h2>
      <div className="flex flex-wrap gap-2 mt-2">
        <Chip label="Python" className="text-sm" />
        <Chip label="Flask" className="text-sm" />
        <Chip label="Node.js" className="text-sm" />
        <Chip label="Bootstrap" className="text-sm" />
        <Chip label="Socket.IO" className="text-sm" />
        <Chip label="Express.js" className="text-sm" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-5 mt-4">
        <div>
          <h3 className="text-xl font-semibold text-slate-200">Type</h3>
          <p className="text-slate-300">Full stack development</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-200">Purpose</h3>
          <p className="text-slate-300">School Project</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-200">
            GitHub Repository
          </h3>
          <a
            href="https://github.com/bob28/Chat-and-Voice-Applcation-Advanced-Comms-Final-Project"
            className="text-green-400 hover:underline"
            target="_blank"
          >
            Github
          </a>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-xl font-semibold text-slate-200">Summary</h3>
        <p className="text-slate-300">
          I developed a school project that created a robust real-time chat and
          voice application. Utilizing a combination of Flask, Python, Node.js,
          and Express, I built a platform that enabled users to seamlessly
          communicate through both text and voice channels. Powered by
          Socket.io, the application facilitated instant messaging and real-time
          audio interactions. This project served as a valuable learning
          experience, allowing me to explore and integrate various technologies
          for building interactive and dynamic communication features.
        </p>
      </div>
    </div>
  );
};

/**
 * SchoolProjects component renders a list of school projects with their details.
 * Each project includes a title, technologies used, type, purpose, GitHub repository link, and a summary.
 *
 * @component
 * @example
 * return (
 *   <SchoolProjects />
 * )
 *
 * @returns {JSX.Element} A React component that displays school projects.
 */
const SchoolProjects = () => {
  return (
    <div className="px-4 pb-2 md:px-14 md:pb-10 ">
      <h2 className="text-3xl font-bold text-slate-200 mb-3">
        School Projects
      </h2>
      <p className="text-slate-300 my-3">
        These are the projects that I worked on during my Master's and Bachelors
        degree
      </p>
      <div>
        <h3 className="text-2xl mt-2 text-slate-200">
          Machine Learning - Predicting English Premier League Match Results
        </h3>
        <div className="flex flex-wrap gap-2 mt-2">
          <Chip label="Python" className="text-sm" />
          <Chip label="Numpy" className="text-sm" />
          <Chip label="Pandas" className="text-sm" />
          <Chip label="Tensorflow" className="text-sm" />
          <Chip label="Keras" className="text-sm" />
          <Chip label="Scikit-learn" className="text-sm" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-5 mt-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-200">Type</h3>
            <p className="text-slate-300">Machine Learning</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-200">Purpose</h3>
            <p className="text-slate-300">Masters degree, final project</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-200">
              GitHub Repository
            </h3>
            <a
              href="https://github.com/bob28/Projects-At-School/tree/main/Machine%20Learning-Masters"
              className="text-green-400 hover:underline"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-semibold text-slate-200">Summary</h3>
          <p className="text-slate-300">
            The project aimed to predict English Premier League games using
            machine learning. Python libraries like Numpy, Pandas, Tensorflow,
            Keras, Scikit-learn, Matplotlib, and Plotly were employed. After
            data cleaning and visualization, three machine learning algorithms
            were implemented: a deep neural network, linear regression, and SDG
            regressor. The models were trained and tested using a 60-40 split,
            with performance evaluated using mean squared error and mean
            absolute error. Linear regression emerged as the top-performing
            algorithm, and its results were visualized using Matplotlib. The
            Python code for the analysis is provided in the report's appendix.
          </p>
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-500 border-0 " />
      <div>
        <h3 className="text-2xl mt-2 text-slate-200">
          Blockchain Inventory Management System
        </h3>
        <div className="flex flex-wrap gap-2 mt-2">
          <Chip label="Python" className="text-sm" />
          <Chip label="Flask" className="text-sm" />
          <Chip label="JavaScript" className="text-sm" />
          <Chip label="Bootstrap" className="text-sm" />
          <Chip label="HTML/CSS" className="text-sm" />
          <Chip label="RSA" className="text-sm" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-5 mt-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-200">Type</h3>
            <p className="text-slate-300">Backend Development</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-200">Purpose</h3>
            <p className="text-slate-300">Masters degree, final project</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-200">
              GitHub Repository
            </h3>
            <a
              href="https://github.com/bob28/Projects-At-School/tree/main/Blockchain-Masters"
              className="text-green-400 hover:underline"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-semibold text-slate-200">Summary</h3>
          <p className="text-slate-300">
            This project developed a custom inventory management system
            leveraging blockchain technology for secure and transparent
            tracking. Built with Python, Flask, and a user-friendly Bootstrap
            web interface, the system utilizes smart contracts to manage
            inventory actions like adding, removing, or retrieving information.
            RSA encryption ensures user authentication while SHA256 hashing and
            digital signatures guarantee data integrity on the custom
            blockchain. Users can interact with the system, verify its validity,
            and ensure data hasn't been tampered with.
          </p>
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-500 border-0 " />
      <div>
        <h3 className="text-2xl mt-2 text-slate-200">
          Machine Learning - Predicting College Acceptances
        </h3>
        <div className="flex flex-wrap gap-2 mt-2">
          <Chip label="Python" className="text-sm" />
          <Chip label="Numpy" className="text-sm" />
          <Chip label="Pandas" className="text-sm" />
          <Chip label="Tensorflow" className="text-sm" />
          <Chip label="Keras" className="text-sm" />
          <Chip label="Scikit-learn" className="text-sm" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-5 mt-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-200">Type</h3>
            <p className="text-slate-300">Machine Learning</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-200">Purpose</h3>
            <p className="text-slate-300">Bachelors degree, final project</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-200">
              GitHub Repository
            </h3>
            <a
              href="https://github.com/bob28/Projects-At-School/tree/main/Machine%20Learning-Bachelors"
              className="text-green-400 hover:underline"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-semibold text-slate-200">Summary</h3>
          <p className="text-slate-300">
            This project aimed to predict college acceptances using machine
            learning. Python libraries like Numpy, Pandas, Tensorflow, Keras,
            Scikit-learn, Matplotlib, and Plotly were employed. After data
            cleaning and visualization, three machine learning algorithms were
            implemented: a deep neural network, linear regression, and SDG
            regressor. The models were trained and tested using a 50-50 split,
            with performance evaluated using mean squared error and mean
            absolute error. Linear regression emerged as the top-performing
            algorithm, and its results were visualized using Matplotlib.
            Additionally, two hypothetical students were created and their
            predicted admissions were analyzed to assess the model's
            effectiveness. The Python code for the analysis is provided in the
            report's appendix.
          </p>
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-500 border-0 " />
      <div>
        <h3 className="text-2xl mt-2 text-slate-200">
          Network Analysis of Wikipedia Categorization and the Influence of
          Article Quality
        </h3>
        <div className="flex flex-wrap gap-2 mt-2">
          <Chip label="Python" className="text-sm" />
          <Chip label="Numpy" className="text-sm" />
          <Chip label="NetworkX" className="text-sm" />
          <Chip label="Matplotlib" className="text-sm" />
          <Chip label="Excel" className="text-sm" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-5 mt-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-200">Type</h3>
            <p className="text-slate-300">Network Analysis</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-200">Purpose</h3>
            <p className="text-slate-300">Masters degree, final project</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-200">
              GitHub Repository
            </h3>
            <a
              href="https://github.com/bob28/Projects-At-School/tree/main/Network-Data-Analysis-Masters"
              className="text-green-400 hover:underline"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-semibold text-slate-200">Summary</h3>
          <p className="text-slate-300">
            This project aimed to analyze Wikipedia's network structure and the
            influence of article quality. Python libraries like NetworkX,
            Matplotlib, and Excel were employed. After reviewing existing
            literature on Wikipedia research, the project focused on analyzing a
            graphical dataset of Wikipedia page links. Network analysis
            techniques were applied to calculate metrics like PageRank,
            centrality, and community structure. The findings revealed a network
            with numerous hubs and identified distinct communities within
            Wikipedia. These results contribute to a better understanding of
            Wikipedia's editorial dynamics and article quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const data = [
    {
      category: "Frontend",
      title: "Portfolio V2",
      content: <PortfolioProjectContent />,
      summary:
        "Portfolio V2 is this current site showcasing a frontend React and Next.js personal website deployed with Vercel",
    },
    {
      category: "Fullstack",
      title: "Chat and Voice Application",
      summary:
        "A application built on Node and Flask that enabled text and voice communication",
      content: <ChatVoiceContent />,
    },
    {
      category: "Fullstack",
      title: "School Final Projects",
      summary:
        "School projects that focused on machine learning, blockchain, or network data analysis",
      content: <SchoolProjects />,
    },
  ];

  const cards = data.map((card, index) => (
    <Card key={card.title} card={card} index={index} />
  ));

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
      <div className="container mb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 justify-center gap-5 mx-auto mb-10">
          <div className="relative shadow-xl text-center align-middle justify-center bg-slate-800 border border-gray-800 px-5 py-6 h-full overflow-hidden rounded-2xl flex flex-col items-center">
            <FaUserTie className="text-green-400 text-5xl mb-4 text-center " />
            <h1 className="font-bold text-xl text-white mb-4 relative ">
              About Me
            </h1>

            <div className="font-normal text-base text-slate-200 mb-4 relative ">
              <ul>
                <li>3 years of development experience</li>
                <li>Master of I.T Security in AI</li>
                <li>Enactus alumni</li>
                <li>Photographer & tennis player</li>
              </ul>
            </div>

            <Button
              className="border border-green-400 p-2 hover:bg-green-400 hover:text-slate-800"
              label="My Resume"
              onClick={() => (window.location.href = "/resume")}
            />

            <Meteors number={17} />
          </div>
          <div className="relative shadow-xl text-center align-middle justify-center bg-slate-800 border border-gray-800 px-5 py-6 h-full overflow-hidden rounded-2xl flex flex-col items-center">
            <GoProjectSymlink className="text-green-400 text-5xl mb-4 text-center " />
            <h1 className="font-bold text-xl text-white mb-4 relative ">
              Projects
            </h1>

            <div className="font-normal text-base text-slate-200 mb-4 relative ">
              Scroll down to explore my recent projects, where I've applied my
              skills in full-stack development. You can find the source code on
              my GitHub.
            </div>

            <Button
              className="border border-green-400 p-2 hover:bg-green-400 hover:text-slate-800"
              label="View Github"
              onClick={() => window.open("https://github.com/bob28")}
            />

            <Meteors number={17} />
          </div>
          <div className="relative shadow-xl text-center align-middle justify-center bg-slate-800 border border-gray-800 px-5 py-6 h-full overflow-hidden rounded-2xl flex flex-col items-center">
            <FaCamera className="text-green-400 text-5xl mb-4 text-center " />
            <h1 className="font-bold text-xl text-white mb-4 relative ">
              Photography
            </h1>

            <div className="font-normal text-base text-slate-200 mb-4 relative ">
              Explore my portfolio of freelance car photography projects. I also
              specialize in sports and event photography.
            </div>

            <Button
              className="border border-green-400 p-2 hover:bg-green-400 hover:text-slate-800"
              label="Photography"
              onClick={() => (window.location.href = "/photography")}
            />

            <Meteors number={17} />
          </div>
          <div className="relative shadow-xl text-center align-middle justify-center bg-slate-800 border border-gray-800 px-5 py-6 h-full overflow-hidden rounded-2xl flex flex-col items-center">
            <FaBlog className="text-green-400 text-5xl mb-4 text-center " />
            <h1 className="font-bold text-xl text-white mb-4 relative ">
              Blog
            </h1>

            <div className="font-normal text-base text-slate-200 mb-4 relative ">
              Read my blog posts where I dive into topics that I relate to. You
              can find my deep dive into the Canadian post-secondary school
              problem.
            </div>

            <Button
              className="border border-green-400 p-2 hover:bg-green-400 hover:text-slate-800"
              label="Read Blog"
              onClick={() => window.open("https://bhaviksblogs.wordpress.com/")}
            />

            <Meteors number={17} />
          </div>
        </div>
        <div className="relative">
          <Carousel items={cards} />
        </div>
        <div className="justify-center flex">
          <div className="relative shadow-lg text-center align-middle justify-center w-full md:w-2/3 bg-slate-900 px-5 py-6 h-full overflow-hidden rounded-2xl flex flex-col items-center">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-100"
              style={{ backgroundImage: "url('map.png')" }}
            ></div>
            <div className="absolute inset-0 bg-slate-800 opacity-50"></div>
            <h1 className="font-bold text-5xl text-green-400 mb-4 relative ">
              <MdContactMail />
            </h1>
            <div className="font-normal text-base text-slate-200 mb-4 relative  flex flex-col gap-4">
              I'm actively seeking new opportunities, so please don't hesitate{" "}
              <br />
              to reach out to me or simply say hello!
              <div>
                <div className="font-bold mb-1">Email</div>
                <a
                  href="mailto:bhavik.naik28@gmail.com"
                  className="hover:underline"
                >
                  bhavik.naik28@gmail.com
                </a>
              </div>
              <div>
                <div className="font-bold mb-1">Location</div>
                <p> Greater Toronto Area</p>
              </div>
              <div>
                <div className="font-bold mb-1">Socials</div>
                <div className="text-center align-middle justify-center mt-4 flex flex-row text-lg">
                  <a
                    href="https://linkedin.com/in/bhavik-naik"
                    className="mx-2 hover:opacity-75 text-slate-200"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://twitter.com/bhavikn28"
                    target="_blank"
                    className="mx-2 hover:opacity-75 text-slate-200"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://instagram.com/bhavikn28"
                    target="_blank"
                    className="mx-2 hover:opacity-75 text-slate-200"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
