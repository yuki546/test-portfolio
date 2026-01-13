import { formatRichText } from "@/lib/markdown";
import { client, getWorkDetail } from "@/libs/microcms";
import { Layers, LinkIcon, Calendar } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

// 日付フォーマット関数
const formatDate = (dateStr?: string) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDate();
  return `${year} ${month} ${day}`;
};

export default async function WorkPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getWorkDetail(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-8 pb-10">
      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
      {/* Header Section */}
      <div className="flex flex-col gap-4">
        <h1 className="text-brand-primary text-3xl font-bold tracking-tight sm:text-4xl">
          {post.title}
        </h1>

        <div className="text-brand-secondary flex flex-wrap items-center gap-4 text-sm">
          {/* Date */}
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>

          <span className="opacity-50">|</span>

          {/* Categories */}
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4" />
            {post.category?.map((category, index) => (
              <span key={category.id}>
                {category.name}
                {index < (post.category?.length || 0) - 1 && ", "}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Eyecatch Image */}
      {post.eyecatch?.url && (
        <div className="border-brand-accent/20 relative aspect-video w-full overflow-hidden rounded-xl border shadow-lg">
          <Image
            src={post.eyecatch.url}
            alt={post.eyecatch.alt || post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Tech Stack & Links */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Tech Stack */}
        {post.tech_stack && post.tech_stack.length > 0 && (
          <div className="bg-brand-base-200 rounded-lg p-5">
            <h3 className="text-brand-primary mb-3 font-semibold">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tech_stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-brand-base-100 text-brand-secondary ring-brand-accent/20 rounded-md px-3 py-1 text-sm shadow-sm ring-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        {post.links && post.links.length > 0 && (
          <div className="bg-brand-base-200 rounded-lg p-5">
            <h3 className="text-brand-primary mb-3 font-semibold">Links</h3>
            <div className="flex flex-col gap-2">
              {post.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-accent flex items-center gap-2 text-sm break-all hover:underline"
                >
                  <LinkIcon className="h-3 w-3 shrink-0" />
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="prose prose-zinc dark:prose-invert max-w-none">
        <div
          dangerouslySetInnerHTML={{ __html: formatRichText(post.content) }}
        />
      </div>
    </div>
  );
}

// 静的パスを生成
export async function generateStaticParams() {
  const contentIds = await client.getAllContentIds({ endpoint: "work" });

  return contentIds.map((contentId) => ({
    id: contentId,
  }));
}
