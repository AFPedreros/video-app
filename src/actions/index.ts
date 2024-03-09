"use server";

import { getPopularMovies } from "@/lib/utils";

export async function fetchPopularMovies({ page = 1 }) {
  return await getPopularMovies({ page });
}
