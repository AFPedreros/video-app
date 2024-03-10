"use client";

import { getReleaseYear } from "@/lib/utils";
import { Content } from "@/types";
import { Icon } from "@iconify/react";
import { Image } from "@nextui-org/react";

type ContentCardProps = {
  content: Content;
};

export function ContentCard({ content }: ContentCardProps) {
  return (
    <article className="relative group flex w-full flex-none flex-col gap-3">
      <Image
        isBlurred
        isZoomed
        alt={content.title}
        className="w-full group-hover:scale-110 sm:aspect-auto"
        src={`https://image.tmdb.org/t/p/w500${content.poster_path}`}
      />
      <h3 className="text-small font-medium text-default-700">
        {content.title}
      </h3>
      <p className="truncate text-small text-default-500">
        {getReleaseYear(content)}
      </p>
      <div className="flex items-center gap-1">
        <Icon
          className="text-lg text-warning sm:text-xl"
          icon="solar:star-bold"
        />
        <p>
          <span>{content.vote_average.toFixed(2)}</span>
          <span className="text-default-500"> / 10</span>
        </p>
      </div>
    </article>
  );
}
