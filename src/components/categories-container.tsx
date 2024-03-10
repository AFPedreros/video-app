import { CategoryCard } from "@/components/cards/category-card";
import { movieCategories } from "@/lib/categories-data";

export function CategoriesContainer() {
  return (
    <div className="flex flex-col md:flex-row rounded-medium bg-default-50 px-4 pb-3 pt-2 md:pt-3 w-full md:items-center justify-between gap-2 ">
      <h2 className="text-large font-medium">Categorías</h2>
      <div className="-ml-2 flex w-full flex-wrap items-center justify-start gap-2 md:ml-0 md:justify-end">
        <CategoryCard slug="/peliculas" name="Películas Populares" />
        {movieCategories.map((category) => (
          <CategoryCard
            key={category.genreId}
            slug={`/peliculas/categorias/${category.slug}`}
            name={category.name}
          />
        ))}
      </div>
    </div>
  );
}
