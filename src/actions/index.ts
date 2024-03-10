"use server";

import { getByGenre, getDetails, getPopular } from "@/lib/utils";

export async function fetchPopular({
  page = 1,
  type,
}: {
  page?: number;
  type: "movie" | "tv";
}) {
  return await getPopular({ page, type });
}

export async function fetchByGenre({
  type = "movie",
  genreId = 0,
  page = 1,
}: {
  type?: "movie" | "tv";
  genreId?: number;
  page?: number;
}) {
  return await getByGenre({ type, genreId, page });
}

export async function fetchMovieDetails({
  id,
  type,
}: {
  id: number;
  type: "movie" | "tv";
}) {
  return await getDetails({ id, type });
}
