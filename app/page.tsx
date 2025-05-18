import ArticleCard from './_components/ArticleCard';
import { articles } from './articles/_data/data';

export default function Home() {
  return (
    <main className="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-3">
      {articles.map((article) => (
        <ArticleCard key={article.title} article={article} />
      ))}
    </main>
  );
}
