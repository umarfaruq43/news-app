import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import Bigcard from "../components/Bigcard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Smallcard from "../components/Smallcard";
import HCard from "../components/HCard";
import Subcribe from "../components/Subcribe";
import Popular from "../components/Popular";

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Video({ posts }) {
  SwiperCore.use([Autoplay]);

  return (
    <div className="max-w-6xl px-3 mx-auto py-14">
      <div>
        <Swiper
          modules={[Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          autoplay={{ delay: 4000 }}
          style={{ width: "100%" }}
        >
          {/* {bigData.map((item, i) => {
            return ( */}
          <SwiperSlide>
            {/* <Bigcard item={item} /> */}
            <iframe
              width="100%"
              height="515"
              src="https://www.youtube.com/embed/yziKbLHIcP4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </SwiperSlide>

          <SwiperSlide>
            {/* <Bigcard item={item} /> */}
            <iframe
              width="100%"
              height="515"
              src="https://www.youtube.com/embed/9VbeoDhGzC8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </SwiperSlide>

          <SwiperSlide>
            {/* <Bigcard item={item} /> */}
            <iframe
              width="100%"
              height="515"
              src="https://www.youtube.com/embed/a_uq9qUpjyc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </SwiperSlide>
          {/* );
          })} */}
        </Swiper>
      </div>

      <div className="mt-20 grid grid-cols-1  md:gap-20 md:grid-cols-2">
        <div>
          <h1 className="font-bold text-2xl mb-8 md:text-4xl">Entertainment</h1>

          {posts.slice(6, 9).map((item, i) => {
            return <HCard key={i} item={item} />;
          })}
        </div>

        <div>
          <h1 className="font-bold text-2xl mb-8 md:text-4xl">Business</h1>
          {posts.map((item, i) => {
            return <HCard key={i} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
