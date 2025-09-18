import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  console.log("✅ App render");
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([])
  const getMovies = async() => {
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year');
    const json = await response.json();

    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
  <div>
    {loading ? (<h1>Loading...</h1>)
    : (movies.map (movie => <div key={movie.id}>{movie.title}</div>))}
    </div>
);
}


export default App
