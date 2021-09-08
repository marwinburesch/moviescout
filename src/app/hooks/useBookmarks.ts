import useLocalStorage from './useLocalStorage';

export default function useBookmarks(): {
  bookmarkIds: number[];
  handleBookmarkClick: (id: number) => void;
} {
  const [bookmarkIds, setBookmarkIds] = useLocalStorage<number[]>(
    'bookmarks',
    []
  );

  function addBookmark(id: number) {
    setBookmarkIds([...bookmarkIds, id]);
  }

  function removeBookmark(id: number) {
    setBookmarkIds(bookmarkIds.filter((bookmarkId) => bookmarkId !== id));
  }

  function handleBookmarkClick(id: number) {
    if (bookmarkIds.includes(id)) {
      removeBookmark(id);
    } else {
      addBookmark(id);
    }
  }

  return { bookmarkIds, handleBookmarkClick };
}
