"use client";

import { fetchMovieDetails } from "@/actions";
import { Content } from "@/types";
import { Image, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import React from "react";

type ContentDetailsProps = {
  contentId: string;
};

export function ContentDetails({ contentId }: ContentDetailsProps) {
  const pathname = usePathname();
  const [content, setContent] = React.useState<Content | null>(null);

  const isMovie = pathname.includes("peliculas");

  React.useEffect(() => {
    const fetchMovie = async () => {
      const content = await fetchMovieDetails({
        id: Number(contentId),
        type: isMovie ? "movie" : "tv",
      });
      setContent(content);
    };
    fetchMovie();
  }, [contentId]);

  return (
    <ModalContent>
      <ModalHeader className="flex flex-col gap-1">
        {content?.title}
      </ModalHeader>
      <ModalBody>
        <div className="flex gap-4 flex-col w-full">
          <Image
            alt={content?.title}
            className="w-full sm:aspect-auto"
            src={
              content?.backdrop_path
                ? `https://image.tmdb.org/t/p/original${content.backdrop_path}`
                : "/placeholder.png"
            }
          />
          <div className="space-y-2">
            <h2 className="text-large font-medium">Sinopsis</h2>
            <p className="text-default-500">{content?.overview}</p>
          </div>
        </div>
      </ModalBody>
    </ModalContent>
  );
}
