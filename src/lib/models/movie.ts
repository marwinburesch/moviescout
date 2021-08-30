import fetch from 'node-fetch';
import { GENRES } from '../genreMap';
import {
  GenreIDs,
  Movie,
  MovieDetailsFromAPI,
  MovieFromAPI,
  MoviesFromAPI,
} from '../types';
const API_KEY = process.env.API_KEY;

export async function getPopularMovies(): Promise<Movie[]> {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`
  );
  const movies: MoviesFromAPI = await response.json();
  const formattedMovies = movies.results.map((movie: MovieFromAPI) => {
    return {
      title: movie.title,
      rating: movie.vote_average,
      overview: movie.overview,
      image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      id: movie.id,
      genres: movie.genre_ids.map((id: GenreIDs) =>
        GENRES[id] ? GENRES[id] : ''
      ),
    };
  });
  return formattedMovies;
}

export async function getLatestMovies(): Promise<Movie[]> {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&region=DE`
  );
  const movies: MoviesFromAPI = await response.json();
  const formattedMovies = movies.results.map((movie: MovieFromAPI) => {
    return {
      title: movie.title,
      rating: movie.vote_average,
      overview: movie.overview,
      image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      id: movie.id,
      genres: movie.genre_ids.map((id: GenreIDs) =>
        GENRES[id] ? GENRES[id] : ''
      ),
    };
  });
  return formattedMovies;
}

export async function getMovie(id: string): Promise<Movie> {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );

  const movie: MovieDetailsFromAPI = await response.json();

  if (!movie.title) {
    throw new Error('Movie not found');
  }

  return {
    title: movie.title,
    rating: movie.vote_average,
    overview: movie.overview,
    image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    id: movie.id,
    genres: movie.genres?.map((genre) => genre.name),
  };
}
