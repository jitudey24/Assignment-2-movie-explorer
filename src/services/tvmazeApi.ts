import type { MovieType, SearchResult } from "../types/MovieType";

const BASE_URL = "https://api.tvmaze.com";

interface CrewMember {
  type?: string;
  person?: {
    name?: string;
  };
}

export interface ShowDetails extends MovieType {
  _embedded?: {
    crew?: CrewMember[];
  };
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

export const getShowDetails = async (id: number): Promise<ShowDetails> => {
  const response = await fetch(`${BASE_URL}/shows/${id}?embed=crew`);

  if (!response.ok) {
    throw new Error("Failed to fetch movie details");
  }

  return (await response.json()) as ShowDetails;
};
