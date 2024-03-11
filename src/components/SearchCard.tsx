import { AppContext } from '@/context/AppContext'
import { useOpenLibrarySearch } from '@/hooks/useOpenLibrarySearch'
import { CircularProgress } from '@mui/material'
import React, { useContext } from 'react'

const SearchCard = () => {
  const {
    setSearchInputValue,
    setSearchResults,
    setSelectedBook,
    searchInputValue
  } = useContext(AppContext)
  const { fetchData, isLoading, noResultsFound } = useOpenLibrarySearch()

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
  return (
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
      {noResultsFound ? (
        <p className="w-11/12 rounded-xl bg-[#E7E3D4] p-5 text-[#545454]">
          No results found, try a new search.
        </p>
      ) : null}
    </section>
  )
}

export default SearchCard
