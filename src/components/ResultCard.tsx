import { FormattedResultData } from '@/hooks/useOpenLibrarySearch';

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
    <button
      aria-label={title}
      aria-labelledby={title}
      onClick={handleClick}
      className="result-card"
    >
      <a
        href="/#add-notes"
        className={`${
          !isSelected ? '' : 'border-4 border-solid border-blue-500'
        } flex flex-col gap-3.5 rounded-xl bg-white p-10`}
      >
        <p
          className={`${
            title[0].length > 12 ? 'overflow-hidden overflow-ellipsis' : ''
          }text-2xl font-bold`}
        >
          {title}
        </p>
        <div>
          <p className="text-[#545454]font-bold">Author:</p>
          <p>{author_name}</p>
        </div>
      </a>
    </button>
  );
};

export default ResultCard;
