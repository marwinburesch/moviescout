import useLocalStorage from './useLocalStorage';

export default function useBookmarks(): {
  bookmarks: number[];
  addBookmark: (id: number) => void;
  removeBookmark: (id: number) => void;
} {
  const [bookmarks, setBookmarks] = useLocalStorage<number[]>('bookmarks', []);

  function addBookmark(id: number) {
    setBookmarks([...bookmarks, id]);
  }

  function removeBookmark(id: number) {
    setBookmarks(bookmarks.filter((b) => b !== id));
  }

  return { bookmarks, addBookmark, removeBookmark };
}
