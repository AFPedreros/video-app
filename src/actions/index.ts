"use server";

import { getMovieDetails, getMoviesByGenre, getPopular } from "@/lib/utils";

export async function fetchPopular({
  page = 1,
  type,
}: {
  page?: number;
  type: "movie" | "tv";
}) {
  return await getPopular({ page, type });
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

export async function fetchMovieDetails({ movieId }: { movieId: number }) {
  return await getMovieDetails({ movieId });
}
