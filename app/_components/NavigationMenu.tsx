'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TbCategory } from 'react-icons/tb';
import useTheme from '../_hooks/useTheme';
import { ThemeToggle } from './ThemeToggle';

export default function NavigationMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-8 left-8 z-50 rounded-2xl bg-background">
      <NavMenu open={open} />
      <button
        className="flex justify-center items-center cursor-pointer p-3 rounded-2xl border border-contrast"
        onClick={() => setOpen((v) => !v)}
        // onBlur={() => setOpen(false)}
      >
        <TbCategory className="text-2xl" />
      </button>
    </div>
  );
}

function NavMenu({ open }: { open: boolean }) {
  const { toggleTheme } = useTheme();

  return (
    open && (
      <div className="py-4 px-6 flex flex-col gap-3 mb-4 rounded-2xl border border-contrast">
        <Link href="/" className="flex items-center gap-3">
          <span>🏠</span>
          <span>home</span>
        </Link>
        <Link href="/about" className="flex items-center gap-3">
          <span>🙋‍♂️</span>
          <span>about</span>
        </Link>
        <ThemeToggle toggleTheme={toggleTheme} />
      </div>
    )
  );
}
