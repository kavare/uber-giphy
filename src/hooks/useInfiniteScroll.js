import { useState, useEffect, useCallback, useLayoutEffect } from 'react';
import { isAtBottom } from '../utils';

const useInfiniteScroll = (fetchData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [query, setQuery] = useState('');
  const [pagination, setPagination] = useState({count: 0, total_count: 0, offset: 0});
  const [results, setResults] = useState([]);

  const loadMore = useCallback(() => {
    return fetchData(query, pagination.offset + pagination.count);
  }, [query, pagination, fetchData]);

  const handleScroll = useCallback(() => {
    if (isLoading || !isAtBottom() || results.length === 0) return;
    setIsLoading(true);
  }, [isLoading, results]);

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll])

  useEffect(() => {
    // [NOTE] Prevent request in initial state or reset to empty string
    let shouldLoad = !!query.length;
    setPagination({count: 0, total_count: 0, offset: 0});
    setResults([]);
    setIsLoading(shouldLoad);
  }, [query])


  useEffect(() => {
    if (!isLoading) return;
    if (results.length !== 0 && pagination.total_count === results.length) {
      setIsLoading(false);
      return;
    }

    loadMore()
      .then(({data, pagination}) => {
        if (!Array.isArray(data)) data = [];
        setPagination(pagination);
        setResults(results => [...results, ...data]);
        setIsLoading(false);
        setHasError(false);
      })
      .catch(err => {
        setPagination({count: 0, total_count: 0, offset: 0});
        setResults([]);
        setIsLoading(false);
        setHasError(true);
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])


  return [results, isLoading, hasError, setQuery];
};

export default useInfiniteScroll;
