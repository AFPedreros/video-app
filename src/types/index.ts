export type Content = {
  id: string;
  title: string;
  overview: string;
  category: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
};

export type Category = {
  genreId: number;
  slug: string;
  name: string;
};
