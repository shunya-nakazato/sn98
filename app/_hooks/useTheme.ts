
import { useEffect, useRef } from 'react';

type Theme = 'light' | 'dark';

export default function useTheme() {
  const htmlRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // HTML要素への参照を取得
    htmlRef.current = document.documentElement;

    // ローカルストレージからテーマを取得
    const storedTheme = localStorage.getItem('theme') as Theme | null;

    if (storedTheme) {
      htmlRef.current.classList.remove('light', 'dark');
      htmlRef.current.classList.add(storedTheme);
    } else {
      // システム設定からテーマを取得
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      htmlRef.current.classList.remove('light', 'dark');
      htmlRef.current.classList.add(initialTheme);
      localStorage.setItem('theme', initialTheme);
    }
  }, []);

  const toggleTheme = () => {
    if (!htmlRef.current) return;

    const currentTheme = htmlRef.current.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    htmlRef.current.classList.remove(currentTheme);
    htmlRef.current.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return { toggleTheme };
} 