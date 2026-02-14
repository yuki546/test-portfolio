import { homeWorksLimit } from "@/lib/constants";
import { client, WorkArticle } from "@/libs/microcms";
import { Calendar, Code, Layers, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// microCMSから実績記事を取得
const formatDate = (dateStr?: string) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate();
  return `${year} ${month} ${day}`;
};

async function getBlogPosts(): Promise<WorkArticle[]> {
  const data = await client.getList<WorkArticle>({
    endpoint: "work",
    queries: {
      fields: "id,title,eyecatch,publishedAt,category,tech_stack,overview",
      limit: homeWorksLimit,
    },
  });
  return data.contents;
}

export default async function Home() {
  const posts = await getBlogPosts();

  return (
    <div className="flex flex-col justify-center gap-6 pb-1">
      <Link href="/works">
        <h1 className="flex items-center gap-3">
          <Code className="text-brand-accent h-8 w-8" />
          Latest Works
        </h1>
      </Link>
      <div className="flex flex-col gap-4 px-1">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/works/${post.id}`}
            className="group from-brand-base-100 to-brand-base-200 hover:ring-brand-accent/50 relative flex flex-col gap-2 overflow-hidden rounded-md bg-linear-to-r p-5 shadow-md transition-all duration-200 ease-in-out hover:ring-1"
          >
            <div className="absolute right-4 bottom-4 z-1 flex flex-wrap items-center justify-end gap-2 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
              <Tag className="h-4 w-4" />
              {post.tech_stack?.map((tech) => (
                <span
                  key={tech}
                  className="text-brand-base-100 bg-brand-accent rounded-full px-1.5 py-0.5 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="group-hover:from-brand-base-200 absolute right-0 bottom-0 h-20 w-full opacity-0 transition duration-300 ease-in-out group-hover:bg-linear-to-t group-hover:to-transparent group-hover:opacity-100"></div>
            <h1 className="text-brand-accent font-bold tracking-wide">
              {post.title}
            </h1>
            <div className="flex flex-col items-center gap-2 sm:flex-row">
              <div className="flex w-full items-center justify-start gap-2 sm:w-fit">
                <Calendar className="h-4 w-4" />
                <span className="whitespace-nowrap opacity-50">
                  {formatDate(post.publishedAt)}
                </span>
              </div>
              <span className="hidden opacity-50 sm:block">-</span>
              <div className="flex w-full items-center justify-start gap-3 sm:w-fit">
                <span className="text-brand-secondary flex items-center gap-2">
                  <Layers className="h-4 w-4" />
                  {post.category?.map((category) => (
                    <span key={category.id} className="text-sm">
                      {category.name}
                    </span>
                  ))}
                </span>
              </div>
            </div>
            <div className="postViewSummary flex">
              <div className="text-brand-primary/70 line-clamp-2 overflow-ellipsis">
                {post.eyecatch?.url && (
                  <figure className="group relative mx-auto w-fit py-1">
                    <div className="relative overflow-clip rounded-md">
                      <Image
                        src={post.eyecatch.url}
                        alt={post.eyecatch.alt || ""}
                        width={post.eyecatch.width}
                        height={post.eyecatch.height}
                        className="postImg rounded-md opacity-100"
                      />
                    </div>
                  </figure>
                )}
                <p>{post.overview}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
