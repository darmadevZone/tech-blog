import type { Blog } from "@/action/action";
import { getBlogs, getDetailBlog } from "@/action/microcms-client";
import MarkdownProvider from "@/components/markdown";
import type { MicroCMSListResponse } from "microcms-js-sdk";
import { redirect } from "next/navigation";
import parser from "rich-editor-to-markdown-parser";
import "zenn-content-css";

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
  const markdown = parser(detailBlog?.content || "", {});

  return (
    <div>
      {detailBlog && (
        <div className="flex flex-col gap-3 py-4">
          <div>
            <h1 className="text-3xl">{detailBlog.title}</h1>
            <hr className="mt-1s" />
          </div>
          <div>
            <p>{`カテゴリー: ${detailBlog.category?.name}`}</p>
          </div>
          <MarkdownProvider>{markdown}</MarkdownProvider>
        </div>
      )}
    </div>
  );
}
