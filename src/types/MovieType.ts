export interface CrewMember {
  type?: string;
  person?: {
    name?: string;
  };
}

export interface MovieType {
  id: number;
  name: string;

  image?: {
    medium?: string;
    original?: string;
  };

  premiered?: string;

  rating?: {
    average?: number;
  };

  genres?: string[];

  summary?: string;

  status?: string;

  language?: string;

  runtime?: number;

  network?: {
    name?: string;
  };

  type?: string;

  _embedded?: {
    crew?: CrewMember[];
  };
}

export interface SearchResult {
  score: number;
  show: MovieType;
}
