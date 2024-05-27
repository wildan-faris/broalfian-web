import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import NavbarMobile from "./NavbarMobile";


export default function Navbar() {



  const navigate = useNavigate();
  const [scrolling, setScrolling] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const  handleScroll = () => {
    if (window.scrollY > 40   ) {
      setScrolling(true);
    } else {
      setScrolling(false);

    }
  } 
  return (
    <nav
      className={`fixed top-0  w-full py-4 px-7 md:px-7  z-50 rounded-b-xl   ${
        scrolling ? "navbar-scroll" : "navbar-default"
      }`}
    >
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <div className="flex space-x-10 justify-center items-center">
          <div>
            <a
              className="text-2xl md:text-3xl font-inter font-semibold"
              href=""
            >
              PFOLIO.
            </a>
          </div>
          <div className="menu space-x-10 text-slate-300 hidden md:block text-base md:text-sm">
            <HashLink
              to="/"
              className="nav-link"
            >
              Home
            </HashLink>
            <HashLink
              smooth
              to="/#projects"
              className="nav-link"
            >
              Projects
            </HashLink>
            <Link
              to="/about"
              className="nav-link"
            >
              About
            </Link>
            <Link
              to="/blog"
              className="nav-link"
            >
              Blog
            </Link>
          </div>
        </div>
        <div className="action hidden md:flex justify-center items-center">
          <Link
            className="btn-action text-xs md:text-base bg-white border-0 px-6 py-2 md:px-6 md:py-2 rounded-full text-black font-bold hover:bg-black hover:text-white border-b-[1px] text-center"
            to="/contact"
          >
            LET'S TALK
          </Link>
        </div>
        {/* Mobile */}
        <NavbarMobile />
      </div>
    </nav>
  );
}
