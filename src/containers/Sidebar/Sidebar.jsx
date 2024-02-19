import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.css";
import {
  faHome as HomeIcon,
  faUser as UserIcon,
  faLayerGroup as ProjectIcon,
  faComment as ContactIcon,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ showMenu, toggleMenu }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 transform transition-transform duration-200 ease-in-out z-10 ${
        showMenu ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col items-center justify-start p-2  pt-1 bg-black text-white w-10 h-full">
        <button
          onClick={toggleMenu}
          className="p-2 bg-blue-500 text-xl text-white rounded"
        >
          <FaBars />
        </button>
        <div className="flex flex-col items-center space-y-2">
          <a href="/" className="p-2 bg-black rounded icon" title="Home">
            <FontAwesomeIcon icon={HomeIcon} />
          </a>
          <a href="/about" className="p-2 bg-black rounded icon" title="About">
            <FontAwesomeIcon icon={UserIcon} />
          </a>
          <a
            href="/projects"
            className="p-2 bg-black rounded icon"
            title="Projects"
          >
            <FontAwesomeIcon icon={ProjectIcon} />
          </a>
          <a
            href="/contact"
            className="p-2 bg-black rounded icon"
            title="Contact"
          >
            <FontAwesomeIcon icon={ContactIcon} />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center space-y-3 mt-120 fixed">
          <a
            href="https://github.com/MullaiVen"
            className="icon"
            target="_blank"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/mullai-vendhan333"
            className="icon"
            target="_blank"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <div className="w-px h-12 bg-white mt-0 mb-4"></div>
          <p className="text-lg font-cursive tracking-widest transform rotate-270 mr-2 mt-0">
            Follow
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
