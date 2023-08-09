export interface PersonDetails {
  biography: string;
  birthday: string;
  id: number;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  profile_path: string | null;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieDetails {
  budget: number;
  genres: Genre[];
  homepage: string | null;
  id: number;
  overview: string;
  poster_path: string | null;
  release_date: string;
  revenue: number;
  runtime: number | null;
  status: string;
  tagline: string | null;
  title: string;
  credits: CastMember[];
}

export interface CastMember {
  id: number;
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}
