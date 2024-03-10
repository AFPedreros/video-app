"use client";

import { fetchMovieDetails } from "@/actions";
import { Content } from "@/types";
import { Image, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import React from "react";

type ContentDetailsProps = {
  contentId: string;
};

export function ContentDetails({ contentId }: ContentDetailsProps) {
  const [movie, setMovie] = React.useState<Content | null>(null);

  React.useEffect(() => {
    const fetchMovie = async () => {
      const movie = await fetchMovieDetails({ movieId: Number(contentId) });
      setMovie(movie);
    };
    fetchMovie();
  }, [contentId]);

  return (
    <ModalContent>
      <ModalHeader className="flex flex-col gap-1">{movie?.title}</ModalHeader>
      <ModalBody>
        <div className="flex gap-4 flex-col w-full">
          <Image
            alt={movie?.title}
            className="w-full sm:aspect-auto"
            src={
              movie?.backdrop_path
                ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                : "/placeholder.png"
            }
          />
          <div className="space-y-2">
            <h2 className="text-large font-medium">Sinopsis</h2>
            <p className="text-default-500">{movie?.overview}</p>
          </div>
        </div>
      </ModalBody>
    </ModalContent>
  );
}
