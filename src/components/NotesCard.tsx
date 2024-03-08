import React from 'react';

interface NotesCardProps {
  title?: string;
  onSave: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const NotesCard = ({ title, onSave, onChange }: NotesCardProps) => {
  return (
    <div>
      <div className="rounded-xl bg-white p-8 text-[#545454]">
        <p className="pb-4 font-[2000] text-black">{title}</p>
        <form className="flex flex-col gap-4">
          <label htmlFor="notes" className="font-bold">
            Notes
          </label>
          <textarea
            name="notes"
            rows={4}
            placeholder="Add notes"
            className="rounded bg-[#F4F4F5] p-5"
            onChange={onChange}
          />
          <button
            type="submit"
            className="w-1/2 rounded-lg bg-black px-4 py-2 text-center text-white md:px-8 md:py-4 lg:w-1/4"
            onClick={onSave}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default NotesCard;
