import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className=" mx-auto ">
        <div className="grid md:grid-cols-2 md:h-screen">
          <div className="relative w-full h-full min-h-image ">
            <Image
              src="/images/radio.webp"
              alt="Post Image "
              //   width="10%"
              //   height="100%"
              layout="fill"
              objectFit="cover"
              //   className=""
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="px-5 max-w-2xl">
              <h1 className="font-bold text-2xl md:text-4xl mt-5 md:mt-0 mb-4">
                Avant-Garde Limited
              </h1>
              <p className="mb-4 text-xl">
                Avant-Garde Limited, publishers of AG.News.Media, is a Nigerian
                media organization based in Kwara State with a mission to
                strengthen and advance the socio-economic wellbeing and rights
                of the people in Nigeria.
              </p>

              <p className="mb-4 text-xl">
                The online media help in enhancing the cultural practices, and
                advocate for best practices, good governance, transparency and
                human rights. It can help forge new communities, pursue
                political and social agenda in support of a better society, and
                help build visions of hope and resistance.
              </p>
              <p className="mb-4 text-xl">
                We are always motivated by the old saying that the press is
                “voice of the voiceless”, and we continue to build on that
                legacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
