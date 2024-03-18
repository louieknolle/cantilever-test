import { SavedBook } from '@/App';
import { Delete } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import { Tooltip } from '@mui/material';
import { useState } from 'react';

interface SavedBookCardProps {
  book: SavedBook;
  onDelete: () => void;
  onUpdateNotes: (updatedNotes: string) => void;
}

const SavedBookCard = ({
  book,
  onDelete,
  onUpdateNotes,
}: SavedBookCardProps) => {
  const { title, author_name, notes } = book;
  const [isEditingNotes, setIsEditingNotes] = useState(false);
  const [currentNotes, setCurrentNotes] = useState(notes);

  const handleEditNotes = () => {
    setIsEditingNotes(true);
    setCurrentNotes(notes);
  };

  const handleSaveNotes = () => {
    const updatedNotes = currentNotes;
    onUpdateNotes(updatedNotes);
    setIsEditingNotes(false);
  };

  return (
    <div className="w-11/12 flex-col gap-3.5 rounded-xl bg-white p-8">
      <div className="flex w-full flex-col gap-3.5">
        <p className="text-2xl font-bold">{title}</p>
        <div>
          <p className="pb-2 font-bold text-[#545454]">Author:</p>
          <p>{author_name}</p>
        </div>
        <div className="w-3/4">
          <div className="flex items-center pb-2">
            <p className="font-bold text-[#545454]">Notes:</p>
            <Tooltip title="Edit notes" arrow>
              <button
                className="ml-4 text-blue-500 hover:text-blue-700"
                onClick={handleEditNotes}
              >
                <EditIcon fontSize="small" sx={{ color: '#545454' }} />
              </button>
            </Tooltip>
          </div>
          {isEditingNotes ? (
            <form className="flex flex-col items-start">
              <label htmlFor="edit-notes" className="font-bold">
                Edit Notes
              </label>
              <textarea
                className="w-10/12 rounded bg-[#F4F4F5] p-2"
                value={currentNotes}
                name="edit-notes"
                id="edit-notes"
                onChange={(event) => setCurrentNotes(event.target.value)}
                rows={4}
                cols={40}
              />
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={handleSaveNotes}
              >
                Save
              </button>
            </form>
          ) : (
            <p className="overflow-hidden overflow-ellipsis whitespace-normal">
              {notes}
            </p>
          )}
        </div>
        <button
          className="flex w-1/3 justify-center rounded-xl text-center  text-red-500 hover:border-2 hover:border-red-400 hover:text-red-700"
          onClick={onDelete}
        >
          Remove Book <Delete />
        </button>
      </div>
    </div>
  );
};

export default SavedBookCard;
