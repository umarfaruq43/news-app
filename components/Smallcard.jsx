import Image from "next/image";
import Link from "next/link";
import React from "react";

const Smallcard = ({ item }) => {
  return (
    <div className="max-w-sm w-full bg-white rounded-lg mx-auto  lg:m-w-card overflow-hidden shadow-md ">
      <div className="">
        <Link href={`/post/${item && item.slug}`}>
          <a className=" block relative h-48 w-full">
            <Image
              src={`/${item && item.frontmatter.socialImage}`}
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
        <Link href={`/post/${item && item.slug}`}>
          <a>
            <h5 className="mb-2 text-lg md:text-xl font-bold overflow-hidden tracking-tight text-gray-900 text-ellipsis max-h-14 ...">
              {item && item.frontmatter.title}
            </h5>
          </a>
        </Link>
        {/* <div className="mb-3 font-normal text-gray-700 dark:text-gray-400 max-h-text  text-clip overflow-hidden">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </div> */}
        <div className="mt-2 text-sm text-fadegray italic">
          {item && item.frontmatter.date}{" "}
          <span className="text-gold text-2xl ">.</span>{" "}
          {item && item.frontmatter.readTime} read
        </div>
      </div>
    </div>
  );
};

export default Smallcard;
