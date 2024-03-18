import { AppContext } from '@/context/AppContext';
import { useContext } from 'react';
import ResultCard from './ResultCard';

const Results = () => {
  const { searchResults, selectedBook } = useContext(AppContext);
  const { setSelectedBook } = useContext(AppContext);

  const handleBookSelect = (title: string, authorName: string) => {
    setSelectedBook({ title, author_name: authorName });
  };
  return (
    <section className="flex w-11/12 flex-col gap-4">
      <h2 className="text-4xl font-bold">
        Results<span className="text-xl">({searchResults.length})</span>
      </h2>
      <div className="grid grid-cols-1 gap-8 align-top md:grid-cols-2">
        {searchResults?.map((result, index) => (
          <ResultCard
            key={index}
            result={result}
            onClick={() => handleBookSelect(result.title, result.author_name)}
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
