"use client";

import { Button } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";

type CategoryCardProps = {
  slug: string;
  name: string;
};

export function CategoryCard({ slug, name }: CategoryCardProps) {
  const router = useRouter();
  const pathname = usePathname();

  const isSelected = pathname === slug;
  return (
    <Button
      variant={isSelected ? "shadow" : "bordered"}
      color={isSelected ? "primary" : "default"}
      onClick={() => router.push(slug)}
    >
      {name}
    </Button>
  );
}
