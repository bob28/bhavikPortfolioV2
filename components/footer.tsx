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
    <footer className="relative z-50 bg-slate-950 p-4 flex justify-between items-center w-full">
      <div className="text-left text-xs text-slate-400">
        &copy; {new Date().getFullYear()} Bhavik Naik
      </div>
      <div className="text-right flex flex-row items-center gap-4">
        <div className="flex flex-row text-2xl items-center">
          <a
            href="mailto:bhavik.naik28@gmail.com"
            className="mx-2 hover:opacity-75 text-slate-200"
            target="_blank"
          >
            <MdEmail size={22} />
          </a>
          <a
            href="https://linkedin.com/in/bhavik-naik"
            className="mx-2 hover:opacity-75 text-slate-200"
            target="_blank"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://twitter.com/bhavikn28"
            target="_blank"
            className="mx-2 hover:opacity-75 text-slate-200"
          >
            <FaTwitter size={22} />
          </a>
          <a
            href="https://instagram.com/bhavikn28"
            target="_blank"
            className="mx-2 hover:opacity-75 text-slate-200"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="https://github.com/bob28"
            target="_blank"
            className="mx-2 hover:opacity-75 text-slate-200"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://bhaviksblogs.wordpress.com/"
            target="_blank"
            className="mx-2 hover:opacity-75 text-slate-200"
          >
            <FaWordpress size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
