import type { MovieType } from "../type/MovieType";

const BASE_URL = "https://api.tvmaze.com";

export interface SearchResult {
  score: number;
  show: MovieType;
}

export const getShows = async (): Promise<MovieType[]> => {
  const response = await fetch(`${BASE_URL}/shows`);

  if (!response.ok) {
    throw new Error("Failed to fetch shows");
  }

  return (await response.json()) as MovieType[];
};

export const searchShows = async (query: string): Promise<SearchResult[]> => {
  const response = await fetch(
    `${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to search shows");
  }

  return (await response.json()) as SearchResult[];
};
