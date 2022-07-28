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

export default function Home({ posts }) {
  SwiperCore.use([Autoplay]);
  console.log(posts);
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
          {posts.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <Bigcard item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-9">
        {posts.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <Smallcard item={item} />
            </SwiperSlide>
          );
        })}
      </div>
      <div>
        <h1 className="font-bold text-2xl text-center  mt-20 mb-8 md:text-4xl">
          Most Popular News
        </h1>
        <Popular posts={posts} />
      </div>
      <div className="mt-20 grid grid-cols-1  md:gap-20 md:grid-cols-2">
        <div>
          <h1 className="font-bold text-2xl mb-8 md:text-4xl">Sports</h1>

          {posts.map((item, i) => {
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
      {/* {posts.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className="border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col"
        >
          <Link href={`/post/${slug}`}>
            <a>
              <Image
                width={650}
                height={340}
                alt={frontmatter.title}
                src={`/${frontmatter.socialImage}`}
              />
              <h1 className="p-4">{frontmatter.title}</h1>
            </a>
          </Link>
        </div>
      ))} */}
    </div>
  );
}
