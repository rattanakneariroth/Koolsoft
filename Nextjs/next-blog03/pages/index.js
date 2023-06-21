import Banner from "../components/Banner";
import BlogCard from "../components/BlogCard/BlogCard";
import Wrapper from "../components/Wrapper";
import { getPostSlugs } from "../lib/data";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import MetaTag from "../components/MetaTag/MetaTag";

export default function Home({ blogs }) {
  return (
    <Wrapper>
      <MetaTag
        title={"Next Blog"}
        description={"Daily Life"}
        siteUrl={""}
        previewImage={""}
      />
      <main className="w-full flex flex-col items-center flex-1">
        <Banner />
        <div className="w-5/6 my-4 ">
          <div className="grid md:grid-cols-2 lg:grid-cols-2  gap-4 justify-items-center">
            {blogs.map((blog) => (
              <BlogCard blog={blog} key={blog.slug} />
            ))}
          </div>
        </div>

        <div className="my-4">
          <Link href="/blogs">
            <button className=" py-3 px-6 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-semibold rounded-lg text-xl flex items-center justify-between">
              More <AiOutlineArrowRight className="ml-3" size="28px" />
            </button>
          </Link>
        </div>
      </main>

      {/* <div className="h-96" /> */}
    </Wrapper>
  );
}

export async function getStaticProps(context) {
  //getStaticProps: used with SG to pull page content from external data.
  const allPosts = getPostSlugs();

  const blogs = allPosts.map((post) => ({ data: post.data, slug: post.slug }));

  // last 3 blogs
  // const latestBlog = data.slice(data.length - 3)
  return {
    props: {
      blogs: blogs.slice(0, 4),
    }, // will be passed to the page component as props
  };
}
