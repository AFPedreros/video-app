"use client";

import { getReleaseYear } from "@/lib/utils";
import { Video } from "@/types";
import { Icon } from "@iconify/react";
import { Button, cn, Image, Skeleton } from "@nextui-org/react";

type VideoCardProps = {
  video: Video;
  isLoading?: boolean;
};

export function VideoCard({ video, isLoading }: VideoCardProps) {
  return (
    <article className="relative flex w-full flex-none flex-col gap-3">
      <Image
        isBlurred
        isZoomed
        alt={video.title}
        className="w-full hover:scale-110 sm:aspect-auto"
        src={`https://image.tmdb.org/t/p/w500${video.poster_path}`}
      />
      <h3 className="text-small font-medium text-default-700">{video.title}</h3>
      <p className="truncate text-small text-default-500">
        {getReleaseYear(video)}
      </p>
      <div className="flex items-center gap-1">
        <Icon
          className="text-lg text-warning sm:text-xl"
          icon="solar:star-bold"
        />
        <p>
          <span>{video.vote_average.toFixed(2)}</span>
          <span className="text-default-500"> / 10</span>
        </p>
      </div>
    </article>
  );
}
