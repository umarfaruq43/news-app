import Image from "next/image";
import Link from "next/link";
import React from "react";

const Bigcard = () => {
  return (
    <div className="grid md:grid-cols-2 gap-3 max-w-md md:max-w-full mx-auto">
      <div className="  ">
        <div
          className="overflow-hidden rounded-md relative mx-auto min-h-image  h-full"
          style={{ maxWidth: "448px" }}
        >
          <Image
            src="/images/post.webp"
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
            <strong>Business, Travel</strong> — July 2, 2020
          </div>
          <h1 className="text-3xl md:text-4xl font-bold  mb-4 max-w-full md:max-w-md  tracking-wider ">
            <Link href="/">
              <a>
                Your most unhappy customers are your greatest source of
                learning.
              </a>
            </Link>
          </h1>
        </div>
        <div className="text-ellipsis overflow-hidden ... h-24">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </div>
        <div className="mt-4 text-sm text-fadegray">June 20th . 4min read</div>
      </div>
    </div>
  );
};

export default Bigcard;
