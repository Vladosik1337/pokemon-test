"use client";

import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-zinc-800 shadow-xl fixed top-0 right-0 left-0 py-[4px] lg:px-[80px] px-[20px] flex justify-center z-[100]">
      <div className="max-w-[1440px] flex justify-between items-center w-full">
        <Link href="/#home" className="flex align-middle gap-2">
          <Image src="/assets/icon.svg" alt="logo" width={40} height={40} />
          <p className="text-white text-[34px]">Pokemons</p>
        </Link>
      </div>
    </header>
  );
};
