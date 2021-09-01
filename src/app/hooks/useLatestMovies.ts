import { Movie } from '../../lib/types';
import useFetch from './useFetch';

export default function useLatestMovies(): {
  latestMoviesData: Movie[] | null;
  latestMoviesIsLoading: boolean;
  latestMoviesErrorMessage: string | null;
  latestMoviesRefetch: () => void;
} {
  const {
    data: latestMoviesData,
    isLoading: latestMoviesIsLoading,
    errorMessage: latestMoviesErrorMessage,
    refetch: latestMoviesRefetch,
  } = useFetch<Movie[]>(`/api/movie/latest`);

  return {
    latestMoviesData,
    latestMoviesIsLoading,
    latestMoviesErrorMessage,
    latestMoviesRefetch,
  };
}
