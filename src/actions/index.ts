"use server";

import { getMoviesByGenre, getPopularMovies } from "@/lib/utils";

export async function fetchPopularMovies({ page = 1 }) {
  return await getPopularMovies({ page });
}

export async function fetchMoviesByGenre({
  genreId = 0,
  page = 1,
}: {
  genreId?: number;
  page?: number;
}) {
  return await getMoviesByGenre({ genreId, page });
}
