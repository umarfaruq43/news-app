import Image from "next/image";
import Link from "next/link";
import React from "react";

const Bigcard = ({ item }) => {
  const { slug, frontmatter } = item;
  // console.log(slug);
  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-12 max-w-md md:max-w-full mx-auto">
      <div className="">
        {/* <Link href={`/post/${slug}`}>
          <a>
            <Image
              width={650}
              height={340}
              alt={frontmatter.title}
              src={`/${frontmatter.socialImage}`}
            />
            <h1 className="p-4">{frontmatter.title}</h1>
          </a>
        </Link> */}
        <div
          className="overflow-hidden rounded-md relative mx-auto min-h-image h-300 md:h-400"
          // style={{ maxWidth: "448px" }}
        >
          <Image
            src={`/${frontmatter && frontmatter.socialImage}`}
            alt="Post Image "
            //   width="10%"
            //   height="100%"
            layout="fill"
            objectFit="cover"
            //   className=""
          />
        </div>
      </div>
      <div className="">
        <div>
          <div className="mb-4">
            {/* <strong>Business, Travel</strong> — July 2, 2020 */}
            <button className="text-sm text-white bg-gold px-5 rounded-xl mt-8">
              {" "}
              Latest
            </button>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold  mb-4 max-w-full md:max-w-md  tracking-wider ">
            <Link href={`/post/${slug}`}>
              <a>{frontmatter && frontmatter.title}</a>
            </Link>
          </h1>
        </div>
        <div className="text-ellipsis ... overflow-hidden h-24">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </div>
        <div className="mt-4 text-sm text-fadegray italic">
          June 20th <span className="text-gold text-2xl ">.</span> 4min read
        </div>
      </div>
    </div>
  );
};

export default Bigcard;
