import React from "react";
import Wrapper from "../components/Wrapper";
import { getPostSlugs } from "../lib/data";
import FullBlogCard from "../components/BlogCard/FullBlogCard";
import MetaTag from "../components/MetaTag/MetaTag";

function blogs({ blogs }) {
  return (
    <div>
      <Wrapper>
        <MetaTag
          title={"Next Blog"}
          description={"Daily Life"}
          siteUrl={""}
          previewImage={""}
        />
        <main className="pt-24 w-full flex flex-col items-center flex-1">
          <div className="w-5/6 my-4 ">
            <div className="grid md:grid-cols-1 gap-4 ">
              {blogs.map((blog) => (
                <FullBlogCard blog={blog} key={blog.slug} />
              ))}
            </div>
          </div>
        </main>

        {/* <div className="h-96" /> */}
      </Wrapper>
    </div>
  );
}

export default blogs;
export async function getStaticProps(context) {
  const allPosts = getPostSlugs();

  const blogs = allPosts.map((post) => ({ data: post.data, slug: post.slug }));

  // last 3 blogs
  // const latestBlog = data.slice(data.length - 3)
  return {
    props: {
      blogs: blogs,
    }, // will be passed to the page component as props
  };
}
