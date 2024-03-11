import { useContext } from 'react';
import SavedBookCard from './SavedBookCard';
import { SavedBook } from '@/App';
import { AppContext } from '@/context/AppContext';

const SavedBooks = () => {
  const { setSavedBooks, savedBooks } = useContext(AppContext);
  const handleUpdateNotes = (index: number, updatedNotes: string) => {
    setSavedBooks((prevSavedBooks) => {
      const updatedBooks = [...prevSavedBooks];
      updatedBooks[index].notes = updatedNotes;
      return updatedBooks;
    });
  };

  const handleDeleteSavedBook = (index: number) => {
    const newSavedBooks = [...savedBooks];
    newSavedBooks.splice(index, 1);
    setSavedBooks(newSavedBooks);
    localStorage.setItem('savedBooks', JSON.stringify(newSavedBooks));
  };

  return (
    <div className="flex flex-col gap-5">
      {savedBooks.map((book: SavedBook, index) => (
        <SavedBookCard
          key={index}
          book={book}
          onDelete={() => handleDeleteSavedBook(index)}
          onUpdateNotes={(updatedNotes) =>
            handleUpdateNotes(index, updatedNotes)
          }
        />
      ))}
    </div>
  );
};

export default SavedBooks;
