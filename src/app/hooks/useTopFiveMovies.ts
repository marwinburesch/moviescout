import type { Movie } from '../../lib/types';
import useFetch from './useFetch';

export default function useTopFiveMovies(): {
  topFiveMovies: Movie[] | null;
  topFiveMoviesIsLoading: boolean;
  topFiveMoviesErrorMessage: string | null;
} {
  const {
    data: topFiveMovies,
    isLoading: topFiveMoviesIsLoading,
    errorMessage: topFiveMoviesErrorMessage,
  } = useFetch<Movie[]>(`/api/movie/popular`);

  return {
    topFiveMovies,
    topFiveMoviesIsLoading,
    topFiveMoviesErrorMessage,
  };
}
