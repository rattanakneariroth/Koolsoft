import { AiFillHeart } from "react-icons/ai";
import {
  FaGithubAlt,
  FaGithub,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className=" flex  bg-gray-100 dark:bg-gray-900 py-5 px-3  w-full shadow dark:shadow-2 z-50 transition-all duration-500">
      <div className="flex-1 text-center">
        <p className="flex items-center justify-center font-semibold text-lg dark:text-gray-100">
          Made with <AiFillHeart fill="red" className="mx-1" />
          by Roth
        </p>
      </div>
    </div>
  );
}
