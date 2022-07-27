import Link from "next/link";
import React from "react";
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
const Footer = () => {
  return (
    <div>
      <div className="my-10 max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-6">
          <Link href="/">
            <a className="bg-footer hover:bg-gold hover:text-white rounded-xl text-2xl p-3 ">
              {" "}
              <BsFacebook />
              {/* <BsTwitter /> <BsLinkedin /> <BsYoutube />{" "} */}
            </a>
          </Link>
          <Link href="/">
            <a className="bg-footer hover:bg-gold hover:text-white rounded-xl text-2xl p-3 ">
              {" "}
              <BsTwitter />
            </a>
          </Link>
          <Link href="/">
            <a className="bg-footer hover:bg-gold hover:text-white rounded-xl text-2xl p-3 ">
              {" "}
              <BsLinkedin />
            </a>
          </Link>
          <Link href="/">
            <a className="bg-footer hover:bg-gold hover:text-white rounded-xl text-2xl p-3 ">
              {" "}
              <BsYoutube />
            </a>
          </Link>
        </div>
        <div className="text-center mt-5">
          Copyright ©2022 All rights reserved || Design by
          <a href="http://devdrive.netlify.app" className="underline">
            {" "}
            Umar faruq
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
