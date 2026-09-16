const BASE_URL = "https://api.tvmaze.com";

// Get all movies / shows
export const getShows = async () => {
  const response = await fetch(`${BASE_URL}/shows`);

  if (!response.ok) {
    throw new Error("Failed to fetch shows");
  }

  const data = await response.json();

  return data;
};

// Search movies / shows
export const searchShows = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("Failed to search shows");
  }

  const data = await response.json();

  return data;
};
