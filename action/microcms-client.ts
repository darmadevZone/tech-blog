import { createClient } from "microcms-js-sdk";
import type { Blog, Category } from "./action";

if (!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.NEXT_PUBLIC_MICROCMS_API_KEY) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

export const microcmsClient = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN as string,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY as string,
  retry: true,
});

export const getCategory = async () => {
  try {
    const data = await microcmsClient.get<Category>({ endpoint: "categories" });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getBlogs = async () => {
  try {
    const data = await microcmsClient.getList<Blog>({ endpoint: "blogs" });
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getDetailBlog = async (blogId: string) => {
  try {
    const data = await microcmsClient.getListDetail<Blog>({
      endpoint: "blogs",
      contentId: blogId,
    });
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
