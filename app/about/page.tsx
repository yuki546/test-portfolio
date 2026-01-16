import Link from "next/link";
import { SiGithub, SiX } from "react-icons/si";

export default async function About() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center gap-4 px-1 sm:px-0">
      <h1>About</h1>
      <div className="text-center">
        <p>Yuki | Markup to Frontend</p>
        <p>
          Web制作の現場で3年半、マークアップエンジニアとして実務経験を積んできました。
        </p>
        <p>
          単なるUI実装にとどまらず、アプリケーションの堅牢性やパフォーマンスを追求したいと考え、現在はReact/Next.jsを中心としたモダン開発を学習・実践しています。
        </p>
        <p>
          サーバーサイドの連携やアーキテクチャへの理解も深めながら、長期的にはフルスタックに活躍できるエンジニアを目指して活動中です。
        </p>
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
