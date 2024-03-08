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
    <section className="flex min-h-[221px] w-[530px] flex-col gap-4">
      <h2 className="text-4xl font-extrabold">Results</h2>
      <div className="col-auto grid max-h-[180px] min-h-[166px] grid-cols-2 items-center gap-5 overflow-scroll">
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
