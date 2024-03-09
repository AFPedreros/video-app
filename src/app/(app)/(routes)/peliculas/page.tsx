import { fetchPopularMovies } from "@/actions";
import { VideoCard } from "@/components/cards/video-card";
import InfiniteScrollVideos from "@/components/infinite-scroll-videos";

// import { fetchPopularMovies } from "@/lib/utils";

export default async function MoviesPage() {
  const movies = await fetchPopularMovies({ page: 1 });

  return (
    <div className="flex flex-1 items-center justify-center bg-background p-6 lg:p-8">
      <div className="my-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <InfiniteScrollVideos initialVideos={movies} />
      </div>
    </div>
  );
}
