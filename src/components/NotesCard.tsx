import { FormattedResultData } from '@/hooks/useOpenLibrarySearch';
import React from 'react';

interface NotesCardProps {
  title?: string;
  onSave: () => void;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const NotesCard = ({ title, onSave, onChange }: NotesCardProps) => {
  return (
    <div>
      <div className="w-[530px] max-w-[530px] rounded-xl bg-white p-8 text-[#545454]">
        <p>{title}</p>
        <form className="flex flex-col gap-4">
          <label htmlFor="notes" className="text-lg font-bold">
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
            className="w-1/4 rounded-lg bg-black px-[30px] py-[15px] text-white"
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
