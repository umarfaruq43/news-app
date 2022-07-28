import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import HCard from "../../components/HCard";

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  // Getting the posts

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
      frontmatter,
      content,
      posts,
    },
  };
}

export default function PostPage({ frontmatter, content, posts }) {
  return (
    <div className="prose mx-auto  max-w-5xl py-12 px-3">
      {/* <h1>{frontmatter.title}</h1>
      <h1>{frontmatter.date}</h1> */}
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      <div>
        <div className="mt-20 ">
          <h1 className="font-bold text-2xl mb-8 md:text-4xl">Related</h1>
          <div className="grid grid-cols-1  md:gap-10 md:grid-cols-2 not-prose">
            {posts.map((item, i) => {
              return <HCard key={i} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
