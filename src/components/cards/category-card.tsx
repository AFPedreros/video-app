"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type CategoryCardProps = {
  slug: string;
  name: string;
};

export function CategoryCard({ slug, name }: CategoryCardProps) {
  const pathname = usePathname();

  const isSelected = pathname === slug;
  return (
    <Link href={slug}>
      <Button
        variant={isSelected ? "shadow" : "bordered"}
        color={isSelected ? "primary" : "default"}
      >
        {name}
      </Button>
    </Link>
  );
}
