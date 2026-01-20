// src/components/SearchBar.jsx
useEffect(() => {
  const timer = setTimeout(() => {
    if (query) fetchMovies(query);
  }, 500); // Only search after 500ms of silence

  return () => clearTimeout(timer); // Cleanup: cancels the timer if user types again
}, [query]);