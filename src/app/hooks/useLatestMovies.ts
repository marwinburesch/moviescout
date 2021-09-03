import type { Movie } from '../../lib/types';
import useFetch from './useFetch';

export default function useLatestMovies(): {
  latestMovies: Movie[] | null;
  latestMoviesIsLoading: boolean;
  latestMoviesErrorMessage: string | null;
} {
  const {
    data: latestMovies,
    isLoading: latestMoviesIsLoading,
    errorMessage: latestMoviesErrorMessage,
  } = useFetch<Movie[]>(`/api/movie/latest`);

  return {
    latestMovies,
    latestMoviesIsLoading,
    latestMoviesErrorMessage,
  };
}
