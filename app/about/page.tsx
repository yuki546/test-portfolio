import Link from "next/link";
import { SiGithub, SiX } from "react-icons/si";

export default async function About() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center gap-4 px-1 sm:px-0">
      <h1>About</h1>
      <div className="text-center">
        <p>Yuki | Markup to Frontend</p>
        <p>
          Web制作の現場で3年半、マークアップエンジニアとして経験を積んできました。
        </p>
        <p>
          既存のWeb制作の枠にとらわれず、React/Next.jsなどのモダンなエコシステムを用いたアプリケーション開発に挑戦したいと考えています。
        </p>
        <p>現在、フロントエンドエンジニアへの転身を目指して活動中です。</p>
      </div>
      <div className="flex w-full max-w-40 flex-col gap-4">
        <Link
          href="https://github.com/yuki546"
          className="hover:bg-brand-secondary/80 bg-brand-secondary text-brand-base-100 flex items-center justify-center gap-2 rounded-full p-2"
          target="_blank"
        >
          <SiGithub className="h-5 w-5" />
          Github
        </Link>
        <Link
          href="https://x.com/iraka_dev"
          className="hover:bg-brand-secondary/80 bg-brand-secondary text-brand-base-100 flex items-center justify-center gap-2 rounded-full p-2"
          target="_blank"
        >
          <SiX className="h-5 w-5" />X
        </Link>
      </div>
    </section>
  );
}
