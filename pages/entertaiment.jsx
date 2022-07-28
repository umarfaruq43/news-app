import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import Bigcard from "../components/Bigcard";
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

const Entertaiment = ({ posts }) => {
  let lnt = posts && posts.length;
  console.log(lnt);
  const main = posts.slice(6, lnt);
  const bigHead = posts.slice(5, 6);
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
    </div>
  );
};

export default Entertaiment;
