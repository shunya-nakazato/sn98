import Image from "next/image";
import { TbBrandGithubFilled } from "react-icons/tb";

export default function AboutPage() {
  return (
    <main className="w-full flex justify-center pt-6 overflow-y-scroll">
      <div className="flex flex-col gap-4 w-sm max-w-sm">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold">SN98</h1>
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