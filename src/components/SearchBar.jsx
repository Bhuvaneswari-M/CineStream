
useEffect(() => {
  const timer = setTimeout(() => {
    if (query) fetchMovies(query);
  }, 500); 

  return () => clearTimeout(timer); // Cleanup: cancels the timer if user types again
}, [query]);