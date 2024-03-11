import { AppContext } from '@/context/AppContext';
import React, { useContext } from 'react';

const NotesCard = () => {
  const {
    selectedBook,
    setSavedBooks,
    setNotesInputValue,
    savedBooks,
    setSelectedBook,
    notesInputValue,
  } = useContext(AppContext);

  const handleNotesInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setNotesInputValue(event.target.value);
  };

  const handleSaveBook = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSavedBooks([...savedBooks, { ...selectedBook, notes: notesInputValue }]);
    setSelectedBook(undefined);
    setNotesInputValue('');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <div className="rounded-xl bg-white p-8 text-[#545454]">
        <p className="pb-4 text-xl font-[2000] text-black">
          {selectedBook?.title}
        </p>
        <form className="flex flex-col gap-4" onSubmit={handleSaveBook}>
          <label htmlFor="add-notes" className="font-bold">
            Notes
          </label>
          <textarea
            name="add-notes"
            id="add-notes"
            rows={4}
            placeholder="Add notes"
            className="rounded bg-[#F4F4F5] p-5"
            onChange={handleNotesInputChange}
          />
          <button
            type="submit"
            className="w-1/2 rounded-lg bg-black px-4 py-2 text-center text-white outline-none focus:border-2 focus:border-blue-500 md:px-8 md:py-4 lg:w-1/4"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default NotesCard;
