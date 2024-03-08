import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

export interface OpenLibrarySearchResult {
  title: string;
  author_name: string[];
}

export interface FormattedResultData {
  title: string;
  author_name: string;
}

const useOpenLibrarySearch = (searchTerm: string) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Sanitize search term to prevent potential security vulnerabilities e.g. SQL injection
  const sanitizedSearchTerm = searchTerm.replace(/[^\w\s]/gi, '');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response: AxiosResponse = await axios.get(
          `https://openlibrary.org/search.json?q=${sanitizedSearchTerm}&fields=author_name,title&limit=10`,
        );
        console.log(response);
        if (response.data.docs) {
          const formattedData = response.data.docs.map(
            (doc: OpenLibrarySearchResult) => ({
              author_name: doc.author_name?.[0] || 'Unknown',
              title: doc.title,
            }),
          );
          setData(formattedData);
        } else {
          setData([]); // Set empty data if no results found
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (searchTerm) {
      fetchData();
    }
  }, [sanitizedSearchTerm, searchTerm]);

  return { data, isLoading, error };
};

export default useOpenLibrarySearch;
