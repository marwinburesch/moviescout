import useFetch from './useFetch';
import { Movie } from '../../lib/types';

export default function useDiscover(genre: string): {
  movies: Movie[] | null;
  isLoading: boolean;
  errorMessage: string | null;
} {
  const {
    data: movies,
    isLoading,
    errorMessage,
  } = useFetch<Movie[]>(`/api/movie/discover?genre=${genre}`);

  return {
    movies,
    isLoading,
    errorMessage,
  };
}
