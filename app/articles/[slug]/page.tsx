import Image from "next/image";
import { articles } from "../data";
import LatexHtmlArticle from '../_components/LatexHtmlArticle';
import { notFound } from 'next/navigation';

// Generate static params for SSG
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.title.toLowerCase(),
  }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find(
    (article) => article.title.toLowerCase() === params.slug
  );

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 dark:from-black dark:to-gray-900 flex flex-col items-center p-8">
      <article className="w-full max-w-4xl bg-white dark:bg-black rounded-lg border-2 border-black p-8 shadow-lg">
        <div className="w-full h-96 relative mb-8 rounded-lg overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold text-black dark:text-white">{article.title}</h1>
          <span>{article.icon}</span>
        </div>
        <LatexHtmlArticle file={article.file} />
      </article>
    </main>
  );
} 