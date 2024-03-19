import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';

export interface OpenLibrarySearchResult {
  title: string;
  author_name: string[];
}

export interface FormattedResultData {
  title: string;
  author_name: string;
}

export const useOpenLibrarySearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const [noResultsFound, setNoResultsFound] = useState('');

  const fetchData = async (searchTerm: string) => {
    // Sanitize search term to prevent potential security vulnerabilities e.g. SQL injection
    const sanitizedSearchTerm = searchTerm.replace(/[^\w\s]/gi, '');

    setIsLoading(true);
    setError(null);
    setNoResultsFound('');

    try {
      const response: AxiosResponse = await axios.get(
        `https://openlibrary.org/search.json?q=${sanitizedSearchTerm}&fields=author_name,title&limit=10`,
      );

      if (response.data?.numFound === 0) {
        setNoResultsFound('No results found');
        return [];
      }

      const formattedData = response?.data?.docs.map(
        (doc: OpenLibrarySearchResult) => ({
          author_name: doc.author_name?.[0] || 'Unknown',
          title: doc.title,
        }),
      );

      return formattedData;
    } catch (error: unknown) {
      setError(error);
      return []; // Return empty data on error
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchData, isLoading, error, noResultsFound };
};
