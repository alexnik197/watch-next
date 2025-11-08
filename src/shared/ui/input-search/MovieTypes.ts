export interface MovieSearchResponse {
  docs: Movie[]
  total: number
  limit: number
  page: number
  pages: number
}

export interface SearchMoviesParams {
  query: string
  page?: number
  limit?: number
}

export interface Movie {
  id: number
  name: string
  alternativeName: string
  enName: string | null
  type: string
  year: number
  description: string | null
  shortDescription: string | null
  movieLength: number | null
  names: Name[]
  externalId: ExternalId
  logo: Image | null
  poster: Image
  backdrop: Image
  rating: Rating
  votes: Votes
  genres: Genre[]
  countries: Country[]
  releaseYears: ReleaseYear[]
  isSeries: boolean
  ticketsOnSale: boolean
  totalSeriesLength: number | null
  seriesLength: number | null
  ratingMpaa: string | null
  ageRating: number | null
  top10: number | null
  top250: number | null
  typeNumber: number | null
  status: string | null
}

export interface Name {
  name: string
  language: string | null
  type: string | null
}

export interface ExternalId {
  kpHD: string | null
  imdb: string | null
  tmdb: number | null
}

export interface Image {
  url: string
  previewUrl?: string
}

export interface Rating {
  kp: number | null
  imdb: number | null
  tmdb: number | null
  filmCritics: number | null
  russianFilmCritics: number | null
  await: number | null
}

export interface Votes {
  kp: string
  imdb: string
  tmdb: string
  filmCritics: string
  russianFilmCritics: string
  await: string
}

export interface Genre {
  name: string
}

export interface Country {
  name: string
}

export interface ReleaseYear {
  start: number
  end: number | null
}