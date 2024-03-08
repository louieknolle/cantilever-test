import React, { MouseEventHandler } from 'react';
import NotesCard from './NotesCard';
import { FormattedResultData } from '@/hooks/useOpenLibrarySearch';

interface AddNotesProps {
  book: FormattedResultData | null;
  onSave: MouseEventHandler<HTMLButtonElement>;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const AddNotes = ({ book, onSave, onChange }: AddNotesProps) => {
  return (
    <section
      className="mb-10 flex w-11/12 flex-col justify-center gap-4"
      id="add-notes"
    >
      <h2 className="text-4xl font-extrabold">Add Notes</h2>
      <NotesCard title={book?.title} onSave={onSave} onChange={onChange} />
    </section>
  );
};

export default AddNotes;
