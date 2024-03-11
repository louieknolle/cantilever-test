import { SavedBook } from '@/App'
import { FormattedResultData } from '@/hooks/useOpenLibrarySearch'
import React, { PropsWithChildren, createContext, useState } from 'react'

interface AppContextValue {
  searchInputValue: string
  setSearchInputValue: React.Dispatch<React.SetStateAction<string>>
  notesInputValue: string
  setNotesInputValue: React.Dispatch<React.SetStateAction<string>>
  searchResults: FormattedResultData[]
  setSearchResults: React.Dispatch<React.SetStateAction<FormattedResultData[]>>
  selectedBook: FormattedResultData | undefined
  setSelectedBook: React.Dispatch<
    React.SetStateAction<FormattedResultData | undefined>
  >
  savedBooks: SavedBook[]
  setSavedBooks: React.Dispatch<React.SetStateAction<SavedBook[]>>
}

export const AppContext = createContext<AppContextValue>({} as AppContextValue)

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [searchInputValue, setSearchInputValue] = useState<string>('')
  const [notesInputValue, setNotesInputValue] = useState<string>('')
  const [searchResults, setSearchResults] = useState<FormattedResultData[]>([])
  const [selectedBook, setSelectedBook] = useState<FormattedResultData>()
  const [savedBooks, setSavedBooks] = useState<SavedBook[]>([])

  return (
    <AppContext.Provider
      value={{
        searchInputValue,
        setSearchInputValue,
        notesInputValue,
        setNotesInputValue,
        searchResults,
        setSearchResults,
        selectedBook,
        setSelectedBook,
        savedBooks,
        setSavedBooks
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
