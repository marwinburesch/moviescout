import { useEffect } from 'react';
import type { Movie } from '../../lib/types';
import useBookmarks from './useBookmarks';
import useFetch from './useFetch';

export default function useBookmarkedMovies(): {
  bookmarkedMovies: Movie[] | null;
  isLoading: boolean;
  errorMessage: string | null;
  handleBookmarkClick: (id: number) => void;
} {
  const { bookmarkIds, handleBookmarkClick } = useBookmarks();

  const {
    data: bookmarkedMovies,
    isLoading,
    errorMessage,
    refetch,
  } = useFetch<Movie[]>(`/api/movie/list?ids=${bookmarkIds} `);

  useEffect(() => {
    refetch();
  }, [bookmarkIds]);

  return { bookmarkedMovies, isLoading, errorMessage, handleBookmarkClick };
}
