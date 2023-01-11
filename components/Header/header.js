import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const [isActive, setIsActive] = useState(true);
  const [isOpen, setOpen] = useState(false);

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const navbar = useRef(null);
  const controlNavbar = () => {
    if (window.scrollY > 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);
  useEffect(() => {
    if (visible) {
      navbar.current.classList.remove('bg-gray-50');
      navbar.current.classList.add('bg-white');
    } else {
      navbar.current.classList.remove('bg-white');
      navbar.current.classList.add('bg-gray-50');
    }
  }, [visible]);

  const toggleNavbar = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <header
        ref={navbar}
        className=" h-15 px-[100px] py-4 fixed top-0 z-[100] inset-x-0 bg-gray-50 dark:bg-black flex flex-auto  "
      >
        <div className="  flex justify-between items-center w-full  ">
          {/* Logo */}
          <Link href="/">
            <span className="font-bold text-[20px] text-black dark:text-white">
              Teletherapy
            </span>
            {/* <Image
              src={'/images/logo.png'}
              width={50}
              height={50}
              object-contain="true"
              alt="logo"
            /> */}
          </Link>

          <div className="md:flex hidden  gap-6 items-center font-[400]  text-[14px] ">
            <Link href="/">
              <span className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white">
                Home
              </span>
            </Link>
            <Link href="aboutus">
              <span className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white">
                About Us
              </span>
            </Link>
            <Link href="/services">
              <span className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white">
                Services
              </span>
            </Link>
            <Link href="/articles">
              <span className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white">
                Articles
              </span>
            </Link>
            <Link href="/faqs">
              <span className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white">
                FAQ's
              </span>
            </Link>
            <Link href="/contacts">
              <span className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white">
                Contacts
              </span>
            </Link>
            <Link href="/login">
              <span className="   rounded-lg bg-backgroundColor py-2 px-3 text-black font-semibold">
                Start For Free
              </span>
            </Link>
          </div>
        </div>

        {/* 
          mobile navbar */}

        <div
          className="md:hidden group cursor-pointer origin-right md:scale-100 h-8 w-9 md:w-10 my-auto ml-auto relative  flex items-center   "
          onClick={toggleNavbar}
        >
          <div
            className={`transition m-auto origin-center h-[5px] w-full  bg-[#9E00FF] rounded-xl absolute ${
              isOpen
                ? 'rotate-45 left-0 top-0 bottom-0 right-0 '
                : 'left-0 top-0 '
            }`}
          ></div>
          <div
            className={`transition m-auto origin-center h-[5px]   rounded-xl bg-[#9E00FF] absolute ${
              isOpen
                ? '-rotate-45 w-full left-0 top-0 bottom-0 right-0'
                : 'right-0 top-3 w-2/3 group-hover:w-full transition-all duration-200 ease-linear'
            }`}
          ></div>
          <div
            className={`transition m-auto origin-center h-[5px]   rounded-xl bg-[#9E00FF] absolute ${
              isOpen
                ? '-rotate-45 w-full left-0 top-0 bottom-0 right-0'
                : 'left-0 top-6 w-full'
            }`}
          ></div>
        </div>
      </header>
    </>
  );
};

export default Header;
