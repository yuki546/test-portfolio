import { client } from "@/libs/microcms";

// 実績記事の型定義
type Props = {
  id: string;
  title: string;
  content: string;
  category: { name: string };
};

// microCMSから特定の記事を取得
async function getWorkPost(id: string): Promise<Props> {
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
    <main>
      <h1>{post.title}</h1>
      <div>カテゴリー：{post.category && post.category.name}</div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </main>
  );
}

// 静的パスを生成
export async function generateStaticParams() {
  const contentIds = await client.getAllContentIds({ endpoint: "work" });

  return contentIds.map((contentId) => ({
    id: contentId,
  }));
}
