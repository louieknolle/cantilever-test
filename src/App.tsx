import { useEffect, useState } from 'react'
import Results from './components/Results'
import AddNotes from './components/AddNotes'
import SavedBooks from './components/SavedBooks'
import {
  useOpenLibrarySearch,
  FormattedResultData
} from './hooks/useOpenLibrarySearch'
import NoBooksMessage from './components/NoBooksMessage'
import CircularProgress from '@mui/material/CircularProgress'

export interface SavedBook {
  title: string
  author_name: string
  notes: string
}

const App = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>('')
  const [notesInputValue, setNotesInputValue] = useState<string>('')
  const [searchResults, setSearchResults] = useState<FormattedResultData[]>([])
  const [selectedBook, setSelectedBook] = useState<FormattedResultData>()
  const [savedBooks, setSavedBooks] = useState<SavedBook[]>([])
  const { fetchData, isLoading, noResultsFound } = useOpenLibrarySearch()

  useEffect(() => {
    const savedBooksFromLocalStorage = localStorage.getItem('savedBooks')
    if (savedBooksFromLocalStorage) {
      setSavedBooks(JSON.parse(savedBooksFromLocalStorage))
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('savedBooks', JSON.stringify(savedBooks))
  }, [savedBooks])

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchInputValue(event.target.value)
  }

  const handleSearchSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()
    setSearchResults([])
    setSelectedBook(undefined)
    try {
      const formattedData = await fetchData(searchInputValue)
      setSearchResults(formattedData)
    } catch (error) {
      console.error('Error fetching data:', error)
      setSearchInputValue('')
    }
  }

  const handleBookSelect = (title: string, authorName: string) => {
    setSelectedBook({ title, author_name: authorName })
  }

  const handleNotesInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNotesInputValue(event.target.value)
  }

  const handleSaveBook = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSavedBooks([...savedBooks, { ...selectedBook, notes: notesInputValue }])
    setSelectedBook(undefined)
    setNotesInputValue('')
  }

  const handleUpdateNotes = (index: number, updatedNotes: string) => {
    setSavedBooks((prevSavedBooks) => {
      const updatedBooks = [...prevSavedBooks]
      updatedBooks[index].notes = updatedNotes
      return updatedBooks
    })
  }

  const handleDeleteSavedBook = (index: number) => {
    const newSavedBooks = [...savedBooks]
    newSavedBooks.splice(index, 1)
    setSavedBooks(newSavedBooks)
    localStorage.setItem('savedBooks', JSON.stringify(newSavedBooks))
  }

  console.log(noResultsFound)

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
          <section className="flex flex-col justify-center gap-5">
            <h2 className="text-4xl font-extrabold">Add a Book</h2>
            <div className="w-11/12 rounded-xl bg-white p-8 text-[#545454]">
              <form
                className="flex w-full flex-col gap-5"
                onSubmit={handleSearchSubmit}
              >
                <label htmlFor="search" className="text-xl font-bold">
                  Search
                </label>
                <input
                  name="search"
                  id="search"
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
                  } w-1/2 rounded-lg bg-black px-4 py-2 text-center text-white md:px-8 md:py-4 lg:w-1/4`}
                  disabled={isLoading ?? !searchInputValue}
                >
                  Search
                </button>
              </form>
            </div>
            {isLoading ? (
              <CircularProgress
                color="inherit"
                sx={{ alignSelf: 'center', marginTop: '20%' }}
              />
            ) : null}
          </section>
          {noResultsFound ? (
            <p className="w-11/12 rounded-xl bg-[#E7E3D4] p-5 text-[#545454]">
              No results found, try a new search.
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
            />
          )}
        </div>
        <section className="flex flex-col gap-5 md:w-1/2" id="saved-books">
          <h2 className="text-4xl font-extrabold">My Books</h2>
          {savedBooks?.length > 0 ? (
            <SavedBooks
              savedBooks={savedBooks}
              handleDeleteSavedBook={handleDeleteSavedBook}
              onUpdateNotes={handleUpdateNotes}
            />
          ) : (
            <NoBooksMessage />
          )}
        </section>
      </main>
    </div>
  )
}

export default App
