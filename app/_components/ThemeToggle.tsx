'use client';


export function ThemeToggle({ toggleTheme }: { toggleTheme: () => void }) {
  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-3 cursor-pointer"
    >
      <span className="text-palette-black dark:hidden">🌞</span>
      <span className="hidden dark:text-palette-white dark:block">🌙</span>
      <span className="">theme</span>
    </button>
  );
} 