import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import Bigcard from "../components/Bigcard";
import HCard from "../components/HCard";
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

const Opinion = ({ posts }) => {
  let lnt = posts && posts.length;

  const main = posts.slice(18, 21);
  const bigHead = posts.slice(18, 19);
  return (
    <div className="max-w-7xl mx-auto px-5">
      <div className=" mt-12">
        {bigHead.map((item, i) => {
          return <Bigcard item={item} key={i} />;
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 md:mt-16">
        {main.map((item, i) => {
          return <Smallcard item={item} key={i} />;
        })}
      </div>

      {/* ***************  Others ******************** */}

      <div className="mt-20 grid grid-cols-1  md:gap-20 md:grid-cols-2">
        <div>
          <h1 className="font-bold text-2xl mb-8 md:text-4xl">Entertainment</h1>

          {posts.slice(14, 18).map((item, i) => {
            return <HCard key={i} item={item} />;
          })}
        </div>

        <div>
          <h1 className="font-bold text-2xl mb-8 md:text-4xl">Related News</h1>
          {posts.slice(0,4).map((item, i) => {
            return <HCard key={i} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Opinion;
