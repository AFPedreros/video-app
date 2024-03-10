import { CategoryCard } from "@/components/cards/category-card";
import { Category } from "@/types";

type CategoriesContainerProps = {
  categories: Category[];
  type: "movie" | "tv";
};

export function CategoriesContainer({
  categories,
  type,
}: CategoriesContainerProps) {
  const isMovie = type === "movie";
  return (
    <div className="flex flex-col md:flex-row rounded-medium bg-default-50 px-4 pb-3 pt-2 md:pt-3 w-full md:items-center justify-between gap-2 ">
      <h2 className="text-large font-medium">Categorías</h2>
      <div className="-ml-2 flex w-full flex-wrap items-center justify-start gap-2 md:ml-0 md:justify-end">
        <CategoryCard
          slug={isMovie ? "/peliculas" : "/series"}
          name={`${isMovie ? "Películas" : "Series"} Populares`}
        />
        {categories.map((category) => (
          <CategoryCard
            key={category.genreId}
            slug={`${isMovie ? "/peliculas" : "/series"}/categorias/${category.slug}`}
            name={category.name}
          />
        ))}
      </div>
    </div>
  );
}
