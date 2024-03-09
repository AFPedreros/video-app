import { Video } from "@/types";
import axios from "axios";

export function getReleaseYear(video: Video) {
  const date = video?.release_date;

  if (!date) {
    return null;
  }

  const year = new Date(video.release_date).getFullYear();
  return year;
}

export async function getPopularMovies({ page }: { page?: number }) {
  const apiKey = process.env.TMDB_API_KEY;
  const apiUrl = `${process.env.TMDB_API_URL}/movie/popular?api_key=${apiKey}&language=es-US&page=${page}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data.results as Video[];
  } catch (error) {
    console.error("Failed to fetch popular movies:", error);
    return [];
  }
}
