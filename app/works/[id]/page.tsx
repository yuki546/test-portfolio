import { client } from "@/libs/microcms";
import { WorkArticle } from "@/libs/microcms";

// microCMSから特定の記事を取得
async function getWorkPost(id: string): Promise<WorkArticle> {
  const data = await client.get({
    endpoint: `work/${id}`,
  });
  return data;
}

// 記事詳細ページの生成
export default async function WorkPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // IDを取得
  const post = await getWorkPost(id);

  return (
    <div>
      <h1>{post.title}</h1>
      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
      <div>カテゴリー：{post.category && post.category[0].name}</div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
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
