import Image from "next/image";
import Link from "next/link";
import React from "react";

const Smallcard = () => {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      <div>
        <Link href="#">
          <a>
            <Image
              src="/images/post.webp"
              alt="News"
              width="100%"
              height="100%"
            />
          </a>
        </Link>
      </div>
      <div className="p-5">
        <Link href="">
          <a>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </div>
  );
};

export default Smallcard;
