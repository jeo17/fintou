import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import * as React from "react";

interface NavBar {
  title: string;
  path: string;
}

const navbar: NavBar[] = [
  {
    title: "الرئيسية",
    path: "/",
  },
  { title: "من نحن", path: "#" },
  {
    title: "خدماتنا",
    path: "/order-now",
  },
  {
    title: " أترك تعليق",
    path: "feedback",
  },
];

interface NavBarProps {
  selected: string;
}

const NavBar: React.FC<NavBarProps> = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-[#121A1F] w-full px-6 md:px-[150px] py-4 flex justify-between items-center">
      <Link to="/">
        <img src="/logo.png" alt="logo" className="w-[60px]" />
      </Link>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white rotate-180"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      <div className="hidden md:flex items-center gap-6">
        {navbar.map((item: NavBar, index) =>
          item.path === "feedback" ? (
            <ScrollLink to={item.path} key={index} smooth duration={500}>
              <span
                className={`leading-[140%] text-white ${
                  item.title === props.selected
                    ? "border-b-2 border-b-[#2aa5f5]"
                    : ""
                } transition-all hover:text-[#2aa5f5] duration-300 cursor-pointer`}
              >
                {item.title}
              </span>
            </ScrollLink>
          ) : (
            <Link to={item.path} key={index}>
              <span
                className={`leading-[140%] text-white ${
                  item.title === props.selected
                    ? "border-b-2 border-b-[#2aa5f5]"
                    : ""
                } transition-all hover:text-[#2aa5f5] duration-300 cursor-pointer`}
              >
                {item.title}
              </span>
            </Link>
          )
        )}
      </div>
      <Link to="/signin">
        <button className="bg-[#2aa5f5] px-6 py-2 rounded text-white hidden md:inline-block">
          سجل الدخول
        </button>
      </Link>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-50">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col items-center gap-6">
            {navbar.map((item: NavBar, index) => (

item.path === "feedback" ? (
  <ScrollLink to={item.path} key={index} smooth duration={500} onClick={() => setIsOpen(false)}>
    <span
      className={`leading-[140%] text-white ${
        item.title === props.selected
          ? "border-b-2 border-b-[#2aa5f5]"
          : ""
      } transition-all hover:text-[#2aa5f5] duration-300 cursor-pointer`}
    >
      {item.title}
    </span>
  </ScrollLink>
) : (
  <Link to={item.path} key={index} onClick={() => setIsOpen(false)}>
    <span
      className={`leading-[140%] text-white ${
        item.title === props.selected
          ? "border-b-2 border-b-[#2aa5f5]"
          : ""
      } transition-all hover:text-[#2aa5f5] duration-300 cursor-pointer`}
    >
      {item.title}
    </span>
  </Link>
)



            ))}
            <Link to="/signin">
              <button className="bg-[#2aa5f5] px-6 py-2 rounded text-white mt-2">
                سجل الدخول
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
