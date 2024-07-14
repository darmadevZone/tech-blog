import { getBlogs, getDetailBlog, type Blog } from "@/action/microcms-client";
import parse from "html-react-parser";
import type { MicroCMSListResponse } from "microcms-js-sdk";
import { redirect } from "next/navigation";

interface paramsProps {
  params: {
    blogId: string;
  };
}

export async function generateStaticParams() {
  const response = await getBlogs();
  if (!response) {
    return redirect("/");
  }
  const { contents }: MicroCMSListResponse<Blog> = response;

  const paths = contents.map((blog) => {
    return {
      blogId: blog.id,
    };
  });
  return [...paths];
}

export default async function TechDetailBlog({ params }: paramsProps) {
  const blogId = params.blogId;
  const detailBlog = await getDetailBlog(blogId);
  const content = parse(detailBlog?.content as string);

  return (
    <div>
      {detailBlog && (
        <div className="flex flex-col gap-3 py-4">
          <div>
            <h1 className="text-3xl">{detailBlog.title}</h1>
            <hr className="mt-1s" />
          </div>
          <div>{content}</div>
        </div>
      )}
    </div>
  );
}
