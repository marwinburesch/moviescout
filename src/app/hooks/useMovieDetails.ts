import type { Movie } from '../../lib/types';
import useFetch from './useFetch';

export default function useMovieDetails(id: string): {
  movie: Movie | null;
  isLoading: boolean;
  errorMessage: string | null;
} {
  const {
    data: movie,
    isLoading,
    errorMessage,
  } = useFetch<Movie>(`/api/movie/${id}`);

  return { movie, isLoading, errorMessage };
}
