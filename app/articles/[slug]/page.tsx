import { articles } from "../_data/data";
import LatexHtmlArticle from '../_components/LatexHtmlArticle';
import { notFound } from 'next/navigation';
import { Article } from '../_types/type';
import type { Metadata, ResolvingMetadata } from 'next'

// Generate static params for SSG
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.file.replace('.tex', ''),
  }));
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {

  const { slug } = await params;
  const article: Article | undefined = articles.find(
    (article) => article.file.replace('.tex', '') === slug
  );

  if (!article) {
    notFound();
  }

  return {
    title: `${article.title} | SN98`,
    description: article.description,
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article: Article | undefined = articles.find(
    (article) => article.file.replace('.tex', '') === slug
  );

  if (!article) {
    notFound();
  }

  return (
    <main className="w-full flex justify-center">
      <article className="w-full max-w-2xl">
        <div className="flex items-center mb-6">
          <h1 className="text-4xl font-bold">{article.title}</h1>
        </div>
        <LatexHtmlArticle file={article.file} />
      </article>
    </main>
  );
} 