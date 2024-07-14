import { getBlogs, type Blog } from "@/action/microcms-client";
import Link from "next/link";

export type BlogProps =
  | {
      id: string;
      contents: Blog[];
      totalCount: number;
      offset: number;
      limit: number;
    }
  | undefined;

export default async function BlogComponent() {
  const response = await getBlogs();
  if (response === undefined) {
    return <div>記事がまだありません</div>;
  }
  const { contents } = response;

  return (
    <section>
      <div className="flex flex-col gap-2 items-center pb-4">
        <h2 className="text-xl py-4">今までのブログ記事</h2>

        <div className="grid gap-3 sm:grid-cols-2  md:grid-cols-3">
          {contents ? (
            contents.map((content) => (
              <Link
                key={content.id}
                className="p-10 border rounded-lg shadow-lg"
                href={`/techblog/${content.id}`}
              >
                <p className="text-center">{content.title}</p>
              </Link>
            ))
          ) : (
            <div>ブログの記事はまだありません</div>
          )}
        </div>
      </div>
    </section>
  );
}
