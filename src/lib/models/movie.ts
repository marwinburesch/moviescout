import fetch from 'node-fetch';
import { GENRES } from '../genreMap';
import type {
  GenreID,
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
      genres: movie.genre_ids.map((id: GenreID) =>
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
      genres: movie.genre_ids.map((id: GenreID) =>
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

export async function searchMovie(
  query: string,
  genre?: string
): Promise<Movie[]> {
  const genreId = (Object.keys(GENRES) as GenreID[]).find(
    (key) => GENRES[key] === genre
  );
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  const movies: MoviesFromAPI = await response.json();
  const formattedMovies = movies.results
    .filter((movie: MovieFromAPI) => {
      if (genreId) {
        return movie.genre_ids
          .map((genreId) => genreId.toString())
          .includes(genreId);
      }
      return movie;
    })
    .map((movie: MovieFromAPI) => {
      return {
        title: movie.title,
        rating: movie.vote_average,
        overview: movie.overview,
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        id: movie.id,
        genres: movie.genre_ids.map((id: GenreID) =>
          GENRES[id] ? GENRES[id] : ''
        ),
      };
    });
  return formattedMovies;
}

export async function getMoviesByGenre(genre: string): Promise<Movie[]> {
  const genreId = (Object.keys(GENRES) as GenreID[]).find(
    (key) => GENRES[key] === genre
  );
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`
  );
  const movies: MoviesFromAPI = await response.json();
  const formattedMovies = movies.results.map((movie: MovieFromAPI) => {
    return {
      title: movie.title,
      rating: movie.vote_average,
      overview: movie.overview,
      image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      id: movie.id,
      genres: movie.genre_ids.map((id: GenreID) =>
        GENRES[id] ? GENRES[id] : ''
      ),
    };
  });

  return formattedMovies;
}
