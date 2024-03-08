import ResultCard from './ResultCard';
import { FormattedResultData } from '@/hooks/useOpenLibrarySearch';

interface ResultsProps {
  searchResults: FormattedResultData[];
  onBookSelect: (title: string, authorName: string) => void;
  selectedBook: FormattedResultData | null;
}

const Results = ({
  searchResults,
  onBookSelect,
  selectedBook,
}: ResultsProps) => {
  return (
    <section className="flex w-11/12 flex-col gap-4">
      <h2 className="text-4xl font-extrabold">
        Results<span className="text-xl">({searchResults.length})</span>
      </h2>
      <div className="grid grid-cols-1 gap-8 align-top md:grid-cols-2">
        {searchResults?.map((result, index) => (
          <ResultCard
            key={index}
            result={result}
            onClick={
              onBookSelect
                ? () => onBookSelect(result.title, result.author_name)
                : null
            }
            isSelected={
              result.title === selectedBook?.title &&
              result.author_name === selectedBook?.author_name
            }
          />
        ))}
      </div>
    </section>
  );
};

export default Results;
