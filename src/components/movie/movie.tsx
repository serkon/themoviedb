
export interface Movie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: { id: number, name: string, poster_path: string, backdrop_path: string }
  budget: number
  genres: { id, name }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: { id: number, logo_path: string, name: string, origin_country: string }[];
  production_countries: { iso_3166_1: string, name: string }[];
  release_date: string;
  spoken_languages: { english_name: string, iso_639_1: string, name: string }[];
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MoviePoster {
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieGroup {
  title: MovieGroupTitle;
  items: MoviePoster[];
}

export enum MovieGroupTitle {
  FREE = 'Free to Watch',
  TRENDING = 'Trending',
  UPCOMING = 'Upcoming',
  TOP_RATING = 'Top Rating',
  LATEST = 'Latest',
  POPULAR = 'What is Popular',
  NOW_PLAYING = 'Now Playing',
}
