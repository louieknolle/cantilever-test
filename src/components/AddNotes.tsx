import React from 'react';
import NotesCard from './NotesCard';
import { FormattedResultData } from '@/hooks/useOpenLibrarySearch';
import { SavedBook } from '@/App';

interface AddNotesProps {
  book: FormattedResultData | null;
  onSave: (notes: string) => void;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  notes: string;
}

const AddNotes = ({ book, onSave, onChange, notes }: AddNotesProps) => {
  return (
    <section className="flex h-[407px] w-[530px] flex-col justify-center gap-4">
      <h2 className="text-4xl font-extrabold">Add Notes</h2>
      <NotesCard
        title={book?.title}
        notes={notes}
        onSave={onSave}
        onChange={onChange}
      />
    </section>
  );
};

export default AddNotes;
