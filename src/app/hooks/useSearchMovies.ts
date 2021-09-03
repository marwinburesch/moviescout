import type { Movie } from '../../lib/types';
import useFetch from './useFetch';

export default function useSearchMovies(
  query: string,
  genre: string | null
): {
  movies: Movie[] | null;
  errorMessage: string | null;
  isLoading: boolean;
} {
  const result = useFetch<Movie[]>(
    `/api/movie/search?query=${query}${genre ? `&genre=${genre}` : ``}`
  );

  return {
    movies: result.data,
    errorMessage: result.errorMessage,
    isLoading: result.isLoading,
  };
}
