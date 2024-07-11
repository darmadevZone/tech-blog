import { headerInfo } from "@/constant/blog-info";

export default function Header({ ...props }) {
  return (
    <section className="container" {...props}>
      <div className="border-b ">
        <h1 className="text-3xl">{headerInfo.title}</h1>
      </div>
    </section>
  );
}
