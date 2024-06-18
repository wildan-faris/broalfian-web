import React from 'react';
import Hamburger from 'hamburger-react';
import { useClickAway } from 'react-use';
import { useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';

const NavbarMobile = () => {
  const routes = [
    { title: 'Home', href: '/', icon: 'fa-solid fa-house' },
    {
      title: 'Projects',
      href: '/#projects',
      icon: 'fa-solid fa-bars-progress',
    },
    { title: 'About', href: '/about', icon: 'fa-regular fa-address-card' },
    { title: 'Contacts', href: '/contact', icon: 'fa-solid fa-phone' },
  ];

  const [isOpen, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div
      ref={ref}
      className="md:hidden"
    >
      <Hamburger
        toggled={isOpen}
        size={20}
        toggle={setOpen}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 shadow-4xl right-0 top-[5rem] p-5 pt-0  border-b border-background1/20 navbar-scroll"
          >
            <ul className="grid gap-2">
              {routes.map((route, idx) => (
                <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + idx / 10,
                  }}
                  key={route.title}
                  className="w-full p-[0.08rem] rounded-xl z-50"
                >
                  <HashLink
                    onClick={() => setOpen((prev) => !prev)}
                    className="flex items-center justify-between w-full p-5 rounded-xl"
                    to={route.href}
                  >
                    <span className="flex gap-1 text-lg text-primary">
                      {route.title}
                    </span>
                    <span className="text-primary">
                      <i className={route.icon}></i>
                    </span>
                  </HashLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavbarMobile;
