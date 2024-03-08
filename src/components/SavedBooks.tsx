import React from 'react';
import SavedBookCard from './SavedBookCard';
import { SavedBook } from '@/App';

interface SavedBooksProps {
  savedBooks: SavedBook[];
}

const SavedBooks = ({ savedBooks }: SavedBooksProps) => {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        {savedBooks.map((book, index) => (
          <SavedBookCard key={index} book={book} />
        ))}
      </div>
    </section>
  );
};

export default SavedBooks;
