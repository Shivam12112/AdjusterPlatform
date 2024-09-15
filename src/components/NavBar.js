"use client";
import { appName } from "@/lib/variables";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        marginBottom: "4rem",
      }}
    >
      <nav className="fixed w-full top-0 z-50 border-b border-gray-300 bg-floralwhite dark:bg-gray-900 dark:border-gray-700">
        <div className="flex flex-wrap items-center justify-between p-4 lg:px-20">
          <Link
            href="/home#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              {appName}
              {/* <Image src={'/../../public/ac-logo.png'} width={44} height={'20'}></Image> */}
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded={isOpen ? "true" : "false"}
            onClick={toggleDrawer}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full  md:block md:w-auto ${isOpen ? "" : "hidden"}`}
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col items-center bg-floralwhite font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <a
                  href="/pricing"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Blog
                </a>
              </li>
              <li>
                <button
                  style={{
                    // padding: "1rem 4rem 1rem 4rem",
                    // visibility: "hidden",
                  }}
                  // className="bg-teal-300 text-white py-2 px-6 rounded hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 hover:text-white"
                  className="py-2 px-6 w-full rounded text-left bg-teal-700 text-white  hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
      
                >
                  <a href="#get-early-access" className="font-bold">
                    Login
                  </a>
                </button>
              </li>
              {/* <li>
                <a
                  href="/home#features"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/home#how-it-works"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href="/home#faqs"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  FAQs
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
