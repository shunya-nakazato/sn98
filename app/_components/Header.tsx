import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-center pt-3">
      <Link href="/" className="text-4xl font-bold">
        SN98
      </Link>
    </header>
  );
}
