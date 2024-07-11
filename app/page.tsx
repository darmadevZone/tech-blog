import Blog from "@/components/blog";
import TechStack from "@/components/tech-stack";
import { blogInfo } from "@/constant/blog-info";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-10 items-center   pt-2 w-full">
      <div className="container text-center ">
        <h1 className="text-3xl">{blogInfo.title}</h1>
        <p className="text-lg text-muted-foreground">{blogInfo.description}</p>
        <hr className="mt-3" />
      </div>

      <div className="container">
        <TechStack />
      </div>
      <div className="container">
        <Blog />
      </div>
    </main>
  );
}
