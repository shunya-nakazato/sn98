import fs from 'fs/promises';
import path from 'path';

export default async function LatexHtmlArticle({ file }: { file: string }) {
  const filePath = path.join(process.cwd(), 'app/articles/_contents/html', file.replace('.tex', '.html'));
  const html = await fs.readFile(filePath, 'utf8');
  return (
    <div
      className="prose dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
} 