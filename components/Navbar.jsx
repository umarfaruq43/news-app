import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const navItem = [
    { name: "Home", href: "" },
    { name: "News", href: "news" },
    { name: "Bussiness", href: "bussiness" },
    { name: "Politics", href: "Politics" },
    { name: "Podcast", href: "Podcast" },
    { name: "Videos", href: "video" },
    { name: "Agriculture", href: "agric" },
    { name: "Sports", href: "sport" },
    { name: "Opinion", href: "opinion" },
    { name: "Education", href: "education" },
    { name: "Entertainment", href: "entertaiment" },
    { name: "About", href: "about" },
  ];

  const router = useRouter();
  const currentRouter = router.pathname;

  console.log(currentRouter);
  const [showNav, setShowNav] = useState(false);
  // AVANT-GARDE MEDIA
  // ...fulfilling {`nation's`} information needs.
  return (
    <div className="shadow-md" style={{ zIndex: "100" }}>
      <nav className="bg-white border-gray-200 px-2  py-2.5 rounded ">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/">
            <a className="flex items-center">
              <Image
                width="100px"
                height="100px"
                src="/images/logo.png"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
            </a>
          </Link>

          <div className=" hidden md:block text-center">
            <h1 className="text-2xl font-bold"> AVANT-GARDE MEDIA </h1>
            <span className="text-xs">
              ...fulfilling {`nation's`} information needs.
            </span>
          </div>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setShowNav(!showNav)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={`${
              showNav ? " block " : " hidden "
            } overflow-y-auto shadow-md bg-white fixed top-0 bottom-0 right-0 md:w-auto"
            id="navbar-default`}
            style={{ zIndex: "100" }}
          >
            <ul className=" pr-4 pl-5 md:pl-10 w-64 max-w-xs sm:w-80 ">
              <li>
                <div
                  className="py-5 text-right"
                  onClick={() => setShowNav(!showNav)}
                >
                  <GrClose className="inline text-4xl cursor-pointer" />
                </div>
              </li>

              {navItem.map((item, i) => {
                return (
                  <li key={i} className="scale">
                    <Link href={`/${item.href}`}>
                      <a
                        className={`block py-2 pr-4 pl-3   text-sm  rounded hover:text-gold  ${
                          currentRouter === item.href
                            ? "text-gold "
                            : "text-dark"
                        }`}
                        aria-current="page"
                      >
                        {item.name}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
