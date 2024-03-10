"use client";

import { fetchPopularMovies } from "@/actions";
import { VideoCard } from "@/components/cards/video-card";
import { Video } from "@/types";
import { Spinner } from "@nextui-org/react";
import React from "react";
import { useInView } from "react-intersection-observer";

type InfiniteScrollMoviesProps = {
  initialVideos: Video[] | undefined;
};

export function InfiniteScrollVideos({
  initialVideos,
}: InfiniteScrollMoviesProps) {
  const [videos, setVideos] = React.useState(initialVideos);
  const [page, setPage] = React.useState(1);
  const [ref, inView] = useInView();

  async function loadMoreMovies() {
    const next = page + 1;
    const videos = await fetchPopularMovies({ page: next });
    if (videos?.length) {
      setPage(next);
      setVideos((prev: Video[] | undefined) => [
        ...(prev?.length ? prev : []),
        ...videos,
      ]);
    }
  }

  React.useEffect(() => {
    if (inView) {
      loadMoreMovies();
    }
  }, [inView]);

  return (
    <>
      {videos &&
        videos.length > 0 &&
        videos?.map((video) => <VideoCard key={video.id} video={video} />)}

      <div
        ref={ref}
        className="col-span-1 mt-16 flex items-center justify-center sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5"
      >
        <Spinner />
        <span className="sr-only">Cargando...</span>
      </div>
    </>
  );
}
