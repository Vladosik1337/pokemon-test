"use client";

import { Pokemon } from "@/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface ProductCardProps {
  product: Pokemon;
}

export const PokemonCard = ({ product }: ProductCardProps) => {
  const router = useRouter();

  const handleNavigate = useCallback(() => {
    router.push(`/products/${product.name}`);
  }, [router, product]);

  return (
    <Link
      href={`/pokemon/${product.name}`}
      className="group rounded-lg border border-transparent  px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      key={name + "Card"}
    >
      <h2 className={`text-2xl font-semibold`}>
        {product.name.charAt(0).toUpperCase() + product.name.slice(1)}
      </h2>
    </Link>
  );
};
