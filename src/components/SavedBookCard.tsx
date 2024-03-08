import { SavedBook } from '@/App';
import React from 'react';

interface SavedBookCardProps {
  book: SavedBook;
}

const SavedBookCard = ({ book }: SavedBookCardProps) => {
  const { title, author_name, notes } = book;
  return (
    <div>
      <div className="flex h-[288px] w-[530px] flex-col gap-3.5 rounded-xl bg-white p-10">
        <p className="text-2xl font-extrabold">{title}</p>
        <div>
          <p className="font-bold text-[#545454]">Author:</p>
          <p>{author_name}</p>
        </div>
        <div>
          <p className="font-bold text-[#545454]">Notes:</p>
          <p>{notes}</p>
        </div>
      </div>
    </div>
  );
};

export default SavedBookCard;
