import React, { useState } from "react";
import "./index.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Circles } from "react-loader-spinner"; 
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { format } from "date-fns";
import LazyLoad from 'react-lazyload';
import { FaSearch, FaStar, FaCalendarAlt, FaClock } from 'react-icons/fa';
import VotePieChart from "./components/VotePieChart";
import ScrollToTopButton from "./components/ScrollToTopButton";

import NewsSection from "./components/NewsSection";
import DummyReviewers from "./components/DummyReviewers";
import Footer from './components/Footer';

import formatDuration from "../movie-duration-formatter/index.js";  // Customized Package

 

const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
console.log("API Key:", API_KEY);

const App = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchMovies = async () => {
    setLoading(true); 
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); 
  
      
      const lowerCaseQuery = query.toLowerCase();
  
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
      const res = await axios.get(url);
      const data = res.data;
  
      if (Array.isArray(data.results) && data.results.length > 0) {
 
        const filteredMovies = data.results.filter(movie => 
          movie.title.toLowerCase().includes(lowerCaseQuery) 
        );
  
        if (filteredMovies.length > 0) {
         
          const movieDetailsPromises = filteredMovies.map(async (movie) => {
            const movieDetailRes = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}`);
            const movieDetails = movieDetailRes.data;
            return {
              ...movie,  
              runtime: movieDetails.runtime,  
            };
          });
  
 
          const moviesWithDetails = await Promise.all(movieDetailsPromises);
          setMovies(moviesWithDetails);  
  
          toast.success(`Found ${moviesWithDetails.length} movie(s)!`);
        } else {
          setMovies([]);
          toast.info("No results found.");
        }
      } else {
        setMovies([]);
        toast.info("No results found.");
      }
    } catch (error) {
      console.error("Fetch error:", error.message);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  
  

  const handleSearch = () => {
    if (!query.trim()) {
      toast.warning('Please enter a movie name!');
      return;
    }
    searchMovies(query);
  };

  return (
    <div className="app" data-lenis-scroll>
      <h1>CineConnect 🎬</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>
          <FaSearch style={{ marginRight: "5px" }} />
          Search
        </button>
      </div>

      {loading ? (
        <div className="loader-container">
          <Circles height="80" width="80" color="#4e5afe" />
        </div>
      ) : (
        <div className="movies-container">
          {movies.map((movie) => {
  // console.log(movie.runtime);
  return (
    <div className="movie-card" key={uuidv4()}>
      <LazyLoad height={450} offset={100} once>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
              : "https://placehold.co/300x450?text=No+Image&font=roboto"
          }
          alt={movie.title}
        />
      </LazyLoad>
      <h3>{movie.title}</h3>
      <p>
        <FaStar style={{ color: "#facc15", marginRight: "5px" }} />
        {movie.vote_average}
        &nbsp;|&nbsp;
        <FaCalendarAlt style={{ marginRight: "5px" }} />
        {movie.release_date ? format(new Date(movie.release_date), "MMM d, yyyy") : "Unknown"}
        &nbsp;|&nbsp;
        {movie.runtime && (
          <>
            <FaClock style={{ marginRight: "5px" }} />
            {formatDuration(movie.runtime)} 
          </>
        )}
      </p>
    </div>
  );
})}

        </div>
      )}

      {movies.length > 0 && <VotePieChart movies={movies} />}

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <ScrollToTopButton />
      <NewsSection />
      <DummyReviewers />
      <Footer />
    </div>
  );
};

export default App;
