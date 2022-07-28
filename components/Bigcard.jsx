import Image from "next/image";
import Link from "next/link";
import React from "react";

const Bigcard = ({ item }) => {
  const { slug, frontmatter } = item;

  // console.log(slug);
  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-12 max-w-md md:max-w-full mx-auto">
      <div className="">
        <div
          className="overflow-hidden rounded-md  mx-auto min-h-image h-300 md:h-400 relative"
          // style={{ maxWidth: "448px" }}
        >
          <Image
            src={`/${item && frontmatter.socialImage}`}
            alt="Post Image "
            //   width="10%"
            //   height="100%"
            layout="fill"
            objectFit="cover"
            //   className=""
          />
        </div>
      </div>
      <div className="md:pr-12">
        <div>
          <div className="mb-4">
            {/* <strong>Business, Travel</strong> — July 2, 2020 */}
            <button className="text-sm text-white bg-gold px-5 rounded-xl mt-8">
              {" "}
              Latest
            </button>
          </div>
          <h1 className=" hidden md:block text-2xl md:text-4xl font-bold   mb-4 max-w-full md:max-w-xl tracking-wider max-h-42 overflow-hidden ">
            <Link href={`/post/${slug}`}>
              <a>{item && frontmatter.title.slice(0, 58)}...</a>
            </Link>
          </h1>

          <h1 className="block md:hidden text-2xl md:text-4xl font-bold   mb-4 max-w-full md:max-w-xl tracking-wider md:max-h-42 overflow-hidden ">
            <Link href={`/post/${slug}`}>
              <a>{item && frontmatter.title.slice(0, 58)}...</a>
            </Link>
          </h1>
        </div>
        <div className="text-ellipsis capitalize overflow-hidden  h-24">
          {item && frontmatter.newsDesc}
        </div>
        <div className="mt-2 text-sm text-fadegray italic">
          {item && item.frontmatter.date}{" "}
          <span className="text-gold text-2xl ">.</span>{" "}
          {item && item.frontmatter.readTime} read
        </div>
      </div>
    </div>
  );
};

export default Bigcard;
