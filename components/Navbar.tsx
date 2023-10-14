"use client"

import { useState } from "react";

import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";

import { usePathname } from "next/navigation";
import { darkModeToggler } from "@/store/darkModeSlice";
import Link from "next/link";
import { NAV_LINK } from "@/constant";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


const pathName = usePathname();

  

  // dark mode value
  const isDarkModeEnable = useSelector<boolean>((state) => state.darkMode);

  const disapatch = useDispatch();

  // dark mode handler
  const darkModeToggleHandler = () => {
    disapatch(darkModeToggler());
  };

  return (
    <nav
      className={`${
        isDarkModeEnable ? "DarkColor" : "LightColor"
      } py-4 flex justify-between px-4 sm:px-2 shadow-lg`}
    >
      <div className="logo flex gap-2">
        <h1 className="font-sans font-extralight">ShoeShop</h1>
        <button
          className="hidden sm:flex ml-2 text-xl"
          onClick={darkModeToggleHandler}
        >
          {isDarkModeEnable ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
        </button>
      </div>
      <div className="link flex gap-3 sm:hidden ">
        <button className="mr-2 text-xl" onClick={darkModeToggleHandler}>
          {isDarkModeEnable ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
        </button>

        {NAV_LINK.map((nav) => {
          return (
            <Link
              key={nav.id}
              href={nav.url}
              className={`${
                pathName == nav.url
                  ? " underline underline-offset-4 "
                  : ""
              }`}
            >
              {nav.title}
            </Link>
          );
        })}
      </div>

      {/* mobile menu button */}
      <button
        className="hidden sm:flex"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <AiOutlineClose className="text-2xl" />
        ) : (
          <RiMenu3Fill className="text-2xl" />
        )}
      </button>

      {/* mobile  */}

      {isMobileMenuOpen && (
        <div
          className={`mobile- ${
            isDarkModeEnable ? "DarkMobileMenu" : "LightMobileMenu"
          }   absolute  top-16 right-1   py-4 px-4 rounded-lg `}
        >
          <div className="mobile--links flex flex-col justify-center px-4 py-4 gap-4  ">
            {NAV_LINK.map((nav) => {
              return (
                <Link
                  key={nav.id}
                  href={nav.url}
                  className={`${
                    pathName == nav.url
                      ? " underline underline-offset-4 "
                      : ""
                  } 
                  
                  ${ isDarkModeEnable ? ' LightHoverButton ' :' DarkHoverButton '}  w-fit px-2 py-2`}
                >
                  {nav.title}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};
