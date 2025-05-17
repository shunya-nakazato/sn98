import { articles } from "../data";
import LatexHtmlArticle from '../_components/LatexHtmlArticle';
import { notFound } from 'next/navigation';
import { Article } from '../_types/type';
import convertTitleToSlug from '@/app/_utils/convertTitleToSlug';

// Generate static params for SSG
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: convertTitleToSlug(article.title),
  }));
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article: Article | undefined = articles.find(
    (article) => convertTitleToSlug(article.title) === slug
  );

  if (!article) {
    notFound();
  }

  return (
    <main className="w-full flex justify-center mt-6">
      <article className="w-full max-w-2xl">
        <div className="flex items-center mb-6">
          <h1 className="text-4xl font-bold">{article.title}</h1>
        </div>
        <LatexHtmlArticle file={article.file} />
      </article>
    </main>
  );
} 