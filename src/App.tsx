import { useContext } from 'react';
import Results from './components/Results';
import AddNotes from './components/AddNotes';
import SavedBooks from './components/SavedBooks';
import NoBooksMessage from './components/NoBooksMessage';
import { AppContext } from './context/AppContext';
import SearchCard from './components/SearchCard';

export interface SavedBook {
  title?: string | undefined;
  author_name?: string | undefined;
  notes?: string | undefined;
}

const App = () => {
  const { searchResults, selectedBook, savedBooks } = useContext(AppContext);

  return (
    <div className="h-screen overflow-scroll scroll-smooth bg-[#F1EFE7] pb-10">
      <header
        className="sticky top-0 z-10 flex max-h-[71] w-full items-center bg-white px-20 py-5"
        id="top"
      >
        <a className="" href="/#top">
          <h1 className="text-4xl font-extrabold">Book Manager</h1>
        </a>
      </header>
      <main className="flex h-full flex-col gap-10 overflow-auto scroll-smooth px-20 py-10 lg:flex-row">
        <div className="flex w-full flex-col gap-20 pb-10 lg:w-1/2">
          <SearchCard />
          {searchResults.length > 0 ? <Results /> : null}
          {selectedBook && <AddNotes />}
        </div>
        <section className="flex flex-col gap-5 md:w-1/2" id="saved-books">
          <h2 className="text-4xl font-extrabold">My Books</h2>
          {savedBooks?.length > 0 ? <SavedBooks /> : <NoBooksMessage />}
        </section>
      </main>
    </div>
  );
};

export default App;
