import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWordpress,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

/**
 * Footer component that renders a footer section with social media links and copyright information.
 *
 * @returns {JSX.Element} The rendered footer component.
 *
 * @component
 * @example
 * return (
 *   <Footer />
 * )
 *
 */
export default function Footer() {
  return (
    <footer className="bg-slate-950  p-4 flex justify-between items-center">
      <div className="text-left text-sm text-slate-300">
        &copy; {new Date().getFullYear()} Bhavik Naik
      </div>
      <div className="text-right flex flex-row text-2xl  ">
        <a
          href="mailto:bhavik.naik28@gmail.com"
          className="mx-2 hover:opacity-75 text-slate-200"
          target="_blank"
        >
          <MdEmail />
        </a>
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
        <a
          href="https://github.com/bob28"
          target="_blank"
          className="mx-2 hover:opacity-75 text-slate-200"
        >
          <FaGithub />
        </a>
        <a
          href="https://bhaviksblogs.wordpress.com/"
          target="_blank"
          className="mx-2 hover:opacity-75 text-slate-200"
        >
          <FaWordpress />
        </a>
      </div>
    </footer>
  );
}
