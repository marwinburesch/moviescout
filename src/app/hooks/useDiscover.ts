import type { Movie } from '../../lib/types';
import useFetch from './useFetch';

export default function useDiscover(genre: string | null): {
  movies: Movie[] | null;
  isLoading: boolean;
  errorMessage: string | null;
} {
  const {
    data: movies,
    isLoading,
    errorMessage,
  } = useFetch<Movie[]>(`/api/movie/discover?genre=${genre} `);
  return { movies, isLoading, errorMessage };
}
