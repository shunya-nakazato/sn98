import Link from "next/link";
import { Article } from '../articles/_types/type';
import cn from "@/common/utils/cn";

type ArticleCardProps = {
  article: Article;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  const slug = article.file.replace('.tex', '');

  return (
    <Link
      href={`/articles/${slug}`}
      key={article.title}
      className={cn(
        "relative w-full h-fit hover:scale-105 duration-200 overflow-hidden group",
      )}
    >
      <div className="flex items-center w-full justify-between mb-2">
        <h2 className="text-2xl font-bold">{article.title}</h2>
      </div>
      <div className="flex items-center w-full justify-between mb-2">
        <p className="text-sm">{article.description}</p>
      </div>
    </Link>
  );
} 