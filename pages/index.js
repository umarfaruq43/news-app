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
  return (
    <div className="max-w-6xl px-3 mx-auto py-14">
      <Swiper
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoplay={{ delay: 4000 }}
      >
        <SwiperSlide>
          <Bigcard />
        </SwiperSlide>
        <SwiperSlide>
          <Bigcard />
        </SwiperSlide>
        <SwiperSlide>
          <Bigcard />
        </SwiperSlide>
      </Swiper>
      <div>
        <Smallcard />
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
