import useLocalStorage from './useLocalStorage';

export default function useBookmarks(): {
  bookmarkIds: number[];
  addBookmark: (id: number) => void;
  removeBookmark: (id: number) => void;
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

  return { bookmarkIds, addBookmark, removeBookmark };
}
