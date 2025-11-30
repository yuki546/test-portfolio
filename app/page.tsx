import { client } from "@/libs/microcms";
import Link from "next/link";

// ブログ記事の型定義
type Props = {
  id: string;
  title: string;
};

// microCMSからブログ記事を取得
async function getBlogPosts(): Promise<Props[]> {
  const data = await client.get({
    endpoint: "work",
    queries: {
      fields: "id,title",
      limit: 5,
    },
  });
  return data.contents;
}

export default async function Home() {
  const posts = await getBlogPosts();

  return (
    <main>
      <h1>実績一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/work/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
