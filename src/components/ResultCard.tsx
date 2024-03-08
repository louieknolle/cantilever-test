import { FormattedResultData } from '@/hooks/useOpenLibrarySearch';
import React from 'react';

interface ResultCardProps {
  result: FormattedResultData;
  onClick?: (title: string, authorName: string) => void;
  isSelected?: boolean;
}

const ResultCard = ({ result, onClick, isSelected }: ResultCardProps) => {
  const { title, author_name } = result;

  const handleClick = () => {
    if (onClick) {
      onClick(title, author_name); // Call the provided click handler
    }
  };
  return (
    <button aria-label={title} aria-labelledby={title} onClick={handleClick}>
      <div
        className={`${
          !isSelected ? '' : 'border-4 border-solid border-blue-500'
        }flex min-h-[166px] w-[255px] flex-col gap-3.5 rounded-xl bg-white p-10`}
      >
        <p className="text-2xl font-extrabold">{title}</p>
        <div>
          <p className="text-[#545454]font-bold">Author:</p>
          <p>{author_name}</p>
        </div>
      </div>
    </button>
  );
};

export default ResultCard;
