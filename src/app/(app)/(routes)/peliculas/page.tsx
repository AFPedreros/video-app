import { fetchPopular } from "@/actions";
import { CategoriesContainer } from "@/components/categories-container";
import { InfiniteScrollContent } from "@/components/infinite-scroll-content";

export default async function MoviesPage() {
  const movies = await fetchPopular({ page: 1, type: "movie" });

  return (
    <div className="flex flex-col items-center justify-center gap-6 bg-background p-6 lg:p-8">
      <CategoriesContainer />

      <h1 className="w-full text-3xl font-extrabold tracking-tight">
        Películas Populares
      </h1>

      <div className="grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <InfiniteScrollContent initialContent={movies} />
      </div>
    </div>
  );
}
