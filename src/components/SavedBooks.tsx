import SavedBookCard from './SavedBookCard';
import { SavedBook } from '@/App';

interface SavedBooksProps {
  savedBooks: SavedBook[];
  handleDeleteSavedBook: (index: number) => void;
  onUpdateNotes: (index: number, updatedNotes: string) => void; // Include index for update function
}

const SavedBooks = ({
  savedBooks,
  handleDeleteSavedBook,
  onUpdateNotes,
}: SavedBooksProps) => {
  return (
    <div className="flex flex-col gap-5 overflow-scroll">
      {savedBooks.map((book, index) => (
        <SavedBookCard
          key={index}
          book={book}
          onDelete={() => handleDeleteSavedBook(index)}
          onUpdateNotes={(updatedNotes) => onUpdateNotes(index, updatedNotes)}
        />
      ))}
    </div>
  );
};

export default SavedBooks;
