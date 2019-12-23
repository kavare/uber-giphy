import { useState, useEffect, useCallback } from 'react';
import { isAtBottom } from '../utils';

const useInfiniteScroll = (fetchData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [pagination, setPagination] = useState({count: 0, total: 0, offset: 0});
  const [results, setResults] = useState([]);

  const loadMore = useCallback(() => {
    return fetchData(query, pagination.offset + pagination.count);
  }, [query, pagination, fetchData]);

  const handleScroll = useCallback(() => {
    if (isLoading || !isAtBottom()) return;
    setIsLoading(true);
  }, [isLoading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll])

  useEffect(() => {
    setResults([]);
    setIsLoading(true);
  }, [query])


  useEffect(() => {
    if (!isLoading) return;
    loadMore()
      .then(({data, pagination}) => {
        setPagination(pagination);
        setResults(results => [...results, ...data]);
        setIsLoading(false);
      })
  }, [isLoading, loadMore])


  return [results, setQuery];
};

export default useInfiniteScroll;
