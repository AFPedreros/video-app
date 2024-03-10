import { Content } from "@/types";
import axios from "axios";

const apiKey = process.env.TMDB_API_KEY;

export function getReleaseYear(content: Content) {
  const date = content?.release_date;

  if (!date) {
    return null;
  }

  const year = new Date(content.release_date).getFullYear();
  return year;
}

export async function getPopular({
  type,
  page = 1,
}: {
  type: "movie" | "tv";
  page?: number;
}) {
  const apiUrl = `${process.env.TMDB_API_URL}/${type}/popular?api_key=${apiKey}&language=es-US&page=${page}`;

  try {
    const response = await axios.get(apiUrl);
    let results = response.data.results as any[];

    if (type === "tv") {
      results = results.map((item) => ({
        ...item,
        title: item.name,
        release_date: item.first_air_date,
      }));
    }

    return results as Content[];
  } catch (error) {
    console.error(`Failed to fetch popular ${type}:`, error);
    return [];
  }
}

export async function getMoviesByGenre({
  genreId,
  page,
}: {
  genreId: number;
  page?: number;
}) {
  const apiUrl = `${process.env.TMDB_API_URL}/discover/movie?api_key=${apiKey}&language=es-US&page=${page}&with_genres=${genreId}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data.results as Content[];
  } catch (error) {
    console.error("Failed to fetch movies by genre:", error);
    return [];
  }
}

export async function getMovieDetails({ movieId }: { movieId: number }) {
  const apiUrl = `${process.env.TMDB_API_URL}/movie/${movieId}?api_key=${apiKey}&language=es-US`;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch movie details:", error);
    return null;
  }
}
