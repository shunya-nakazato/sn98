import ArticleCard from './_components/ArticleCard';
import { articles } from './articles/data';

export default function Home() {
  return (
    <main className="w-full h-full overflow-y-scroll">
      <div className="w-full p-3 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-3">
        {articles.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </div>
    </main>
  );
}
