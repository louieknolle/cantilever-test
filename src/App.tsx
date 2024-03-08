import { useState } from 'react';
import Results from './components/Results';
import AddNotes from './components/AddNotes';
import SavedBooks from './components/SavedBooks';
import useOpenLibrarySearch, {
  FormattedResultData,
} from './hooks/useOpenLibrarySearch';
import NoBooksMessage from './components/NoBooksMessage';

export interface SavedBook {
  title: string;
  author_name: string;
  notes: string;
}

const App = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [notesInputValue, setNotesInputValue] = useState<string>('');
  const [searchResults, setSearchResults] = useState<FormattedResultData[]>([]);
  const [selectedBook, setSelectedBook] = useState<FormattedResultData | null>(
    null,
  );
  const [savedBooks, setSavedBooks] = useState<SavedBook[]>([]);
  console.log(notesInputValue);
  const { data, isLoading, error } = useOpenLibrarySearch(searchInputValue);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchInputValue(event.target.value);
  };

  const handleSearchSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    void setSearchInputValue(searchInputValue);
    void setSearchResults(data);
  };

  const handleBookSelect = (title: string, authorName: string) => {
    setSelectedBook({ title, author_name: authorName });
  };

  const handleNotesInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setNotesInputValue(event.target.value);
  };

  const handleSaveBook = (notes: string) => {
    setSavedBooks([...savedBooks, { ...selectedBook, notes }]);
  };

  return (
    <div className="App">
      <header
        className="sticky top-0 z-10 flex max-h-[71] w-full items-center bg-white px-20 py-5"
        id="top"
      >
        <a className="" href="/#top">
          <h1 className="text-4xl font-extrabold">Book Manager</h1>
        </a>
      </header>
      <main className="flex h-screen flex-col gap-10 bg-[#F1EFE7] px-20 py-10 lg:flex-row">
        <div className="flex flex-col gap-20 md:w-1/2">
          <section className="flex flex-col justify-center gap-4">
            <h2 className="text-4xl font-extrabold">Add a Book</h2>
            <div className="w-[530px] max-w-[530px] rounded-xl bg-white p-8 text-[#545454]">
              <form
                className="flex flex-col gap-5"
                onSubmit={handleSearchSubmit}
              >
                <label htmlFor="search" className="text-xl font-bold">
                  Search
                </label>
                <input
                  name="search"
                  type="text"
                  placeholder="Search by name or author"
                  className="rounded bg-[#F4F4F5] p-5"
                  value={searchInputValue}
                  onChange={handleSearchInputChange}
                  required
                />
                <button
                  type="submit"
                  className={`${
                    searchInputValue ? '' : 'cursor-not-allowed opacity-50'
                  } w-1/4 rounded-lg bg-black px-[30px] py-[15px] text-white`}
                  disabled={isLoading || !searchInputValue}
                >
                  Search
                </button>
              </form>
            </div>
          </section>
          {error ? (
            <p>
              Error: No books found. Please double check search or try again.
            </p>
          ) : null}
          {searchResults.length > 0 ? (
            <Results
              searchResults={searchResults}
              onBookSelect={handleBookSelect}
              selectedBook={selectedBook}
            />
          ) : null}
          {selectedBook && (
            <AddNotes
              book={selectedBook}
              onSave={handleSaveBook}
              onChange={handleNotesInputChange}
              notes={notesInputValue}
            />
          )}
        </div>
        <div className="flex flex-col gap-5 md:w-1/2">
          <h2 className="text-4xl font-extrabold">My Books</h2>
          {savedBooks?.length > 0 ? (
            <SavedBooks savedBooks={savedBooks} />
          ) : (
            <NoBooksMessage />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
