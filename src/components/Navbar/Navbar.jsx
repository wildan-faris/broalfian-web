import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import NavbarMobile from './NavbarMobile';

export default function Navbar() {
  const navigate = useNavigate();
  const [scrolling, setScrolling] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full py-4 px-7 md:px-14 z-50 ${
        scrolling ? 'navbar-scroll' : ''
      }`}
    >
      <div className="flex justify-between items-center max-w-screen-xl mx-auto ">
        <div className="flex space-x-10 justify-center items-center">
          <div>
            <Link
              className="text-2xl md:text-3xl font-inter font-semibold text-primary"
              to="/"
            >
              PFOLIO.
            </Link>
          </div>
          <div className="menu space-x-10 text-secondary hidden md:block text-base md:text-sm">
            <Link
              to="/"
              className="nav-link"
            >
              Home
            </Link>
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
              to="/contact"
              className="nav-link"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="action hidden md:flex justify-center items-center gap-4">
          <Link
            className="btn-action text-xs md:text-base bg-text-primary border-primary border-0 px-6 py-2 md:px-6 md:py-2 rounded-full text-primary font-bold hover:bg-primary hover:text-background1 border-b-[1px] text-center"
            to="/contact"
          >
            LET'S TALK
          </Link>
        </div>
        <NavbarMobile />
      </div>
    </nav>
  );
}
