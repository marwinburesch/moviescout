import { Movie } from '../../lib/types';
import useFetch from './useFetch';

export default function useSearchMovies(query: string): {
  data: Movie[] | null;
  errorMessage: string | null;
  isLoading: boolean;
  refetch: () => void;
} {
  return useFetch(`/api/movie/search?query=${query}`);
}
