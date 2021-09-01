import { Movie } from '../../lib/types';
import useFetch from './useFetch';

export default function useTopFiveMovies(): {
  topFiveMoviesData: Movie[] | null;
  topFiveMoviesIsLoading: boolean;
  topFiveMoviesErrorMessage: string | null;
  topFiveMoviesRefetch: () => void;
} {
  const {
    data: topFiveMoviesData,
    isLoading: topFiveMoviesIsLoading,
    errorMessage: topFiveMoviesErrorMessage,
    refetch: topFiveMoviesRefetch,
  } = useFetch<Movie[]>(`/api/movie/popular`);

  return {
    topFiveMoviesData,
    topFiveMoviesIsLoading,
    topFiveMoviesErrorMessage,
    topFiveMoviesRefetch,
  };
}
