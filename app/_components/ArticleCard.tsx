import Link from "next/link";
import LatexHtmlArticle from '../articles/_components/LatexHtmlArticle';
import { Article } from '../articles/_types/type';
import convertTitleToSlug from '../_utils/convertTitleToSlug';
import cn from "@/common/utils/cn";

type ArticleCardProps = {
  article: Article;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  const slug = convertTitleToSlug(article.title);

  return (
    <Link
      href={`/articles/${slug}`}
      key={article.title}
      className={cn(
        "relative w-full aspect-video hover:scale-105 duration-200 overflow-hidden group",
      )}
    >
      <div className="flex items-center w-full justify-between mb-2">
        <h2 className="text-2xl font-bold">{article.title}</h2>
      </div>
      <LatexHtmlArticle file={article.file} />
      <div className="absolute bottom-0 left-0 w-full flex bg-background">
        ...
      </div>
    </Link>
  );
} 