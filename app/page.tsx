import Image from "next/image";
import Link from "next/link";
import LatexHtmlArticle from './articles/_components/LatexHtmlArticle';
import { articles } from './articles/data';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link
            href={`/articles/${article.title.toLowerCase()}`}
            key={article.title}
            className="rounded-lg border-2 border-black bg-white dark:bg-black p-4 flex flex-col items-center shadow-lg transition hover:scale-105 hover:shadow-2xl duration-200"
          >
            <div className="w-full h-56 relative mb-4 rounded-lg overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
            <div className="flex items-center w-full justify-between mb-2">
              <h2 className="text-2xl font-bold text-black dark:text-white">{article.title}</h2>
              <span>{article.icon}</span>
            </div>
            <LatexHtmlArticle file={article.file} />
          </Link>
        ))}
      </div>
    </main>
  );
}
