import React, { MouseEventHandler } from 'react';

interface NotesCardProps {
  title?: string;
  onSave: MouseEventHandler<HTMLButtonElement>;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const NotesCard = ({ title, onSave, onChange }: NotesCardProps) => {
  const handleSave: MouseEventHandler<HTMLButtonElement> = (event) => {
    onSave(event);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <div className="rounded-xl bg-white p-8 text-[#545454]">
        <p className="pb-4 text-xl font-[2000] text-black">{title}</p>
        <form className="flex flex-col gap-4">
          <label htmlFor="add-notes" className="font-bold">
            Notes
          </label>
          <textarea
            name="add-notes"
            id="add-notes"
            rows={4}
            placeholder="Add notes"
            className="rounded bg-[#F4F4F5] p-5"
            onChange={onChange}
          />
          <button
            type="submit"
            onClick={handleSave}
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
