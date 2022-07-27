import Image from "next/image";
import Link from "next/link";
import React from "react";

const Smallcard = () => {
  return (
    <div className="max-w-sm bg-white rounded-lg mx-auto  lg:m-w-card overflow-hidden shadow-md ">
      <div className="h-48 w-full relative">
        <Link href="#">
          <a>
            <Image
              src="/images/post.webp"
              alt="News"
              //   width="100%"
              //   height="100%"
              objectFit="cover"
              layout="fill"
            />
          </a>
        </Link>
      </div>
      <div className="p-4">
        <Link href="">
          <a>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
        </Link>
        {/* <div className="mb-3 font-normal text-gray-700 dark:text-gray-400 max-h-text  text-clip overflow-hidden">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </div> */}
        <div className="mt-2 text-sm text-fadegray italic">
          June 20th <span className="text-gold text-2xl ">.</span> 4min read
        </div>
      </div>
    </div>
  );
};

export default Smallcard;
