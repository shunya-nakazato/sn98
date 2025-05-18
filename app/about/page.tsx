import Image from "next/image";
import { TbBrandGithubFilled } from "react-icons/tb";

export default function AboutPage() {
  return (
    <main className="w-full flex justify-center">
      <div className="flex flex-col gap-4 w-sm max-w-sm">
        <div className="flex justify-center">
          <Image src="/sn98.svg" alt="profile" width={200} height={200} className="dark:invert" />
        </div>
        <div className="flex flex-col align-start gap-1">
          <div className="text-base font-bold">Shunya Nakazato</div>
          <div className="text-base">1998~</div>
          <div className="text-base">@Japan🇯🇵</div>
        </div>
        <div className="flex items-center gap-2">
          <TbBrandGithubFilled className="text-2xl" />
          <a href="https://github.com/shunya-nakazato" target="_blank" rel="noopener noreferrer">https://github.com/shunya-nakazato</a>
        </div>
      </div>
    </main>
  );
} 