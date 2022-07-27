import Image from "next/image";
import Link from "next/link";
import React from "react";

const HCard = ({ item }) => {
  // const { item.slug, item.frontmatter } = item;
  // console.log(item);
  return (
    <div className="rounded-md shadow-sm mb-10 max-w-sm md:max-w-xl mx-auto ">
      <Link href={`/post/${item && item.slug}`}>
        <a className="sm:flex  shadow-md rounded-md overflow-hidden w-full relative">
          <div
            className="h-48 md:h-36 w-full md:w-64 md:max-w-64 relative rounded-md overflow-hidden ..."
            // style={{ maxWidth: "200px" }}
          >
            <Link href={`/post/${item && item.slug}`}>
              <a>
                <Image
                  src={`/${item && item.frontmatter.socialImage}`}
                  alt="News"
                  objectFit="cover"
                  layout="fill"
                />
              </a>
            </Link>
          </div>

          {/* Text of the card */}
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white text-clip overflow-hidden  max-h-82 ...">
              {item && item.frontmatter.title}
            </h5>
            <div className=" text-sm text-fadegray italic">
              June 20th <span className="text-gold text-xl ">.</span> 4min read
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default HCard;
