// import { useState } from "react";
// import { searchMovies } from "../services/movieApi";
// import { ToastContainer, toast } from "react-toastify";
// import { FaSearch } from "react-icons/fa";
// import "react-toastify/dist/ReactToastify.css";

// export default function MovieSearch() {
//   const [query, setQuery] = useState("");
//   const [movies, setMovies] = useState([]);

//   const handleSearch = async () => {
//     if (!query) return toast.error("Enter a movie name!");
//     try {
//       const results = await searchMovies(query);
//       setMovies(results);
//     } catch (err) {
//       toast.error("API error occurred.");
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-4xl font-bold text-center mb-6 text-indigo-600">🎬 CineConnect</h1>
      
//       <div className="flex gap-2 mb-6">
//         <input
//           className="flex-1 p-2 border border-gray-300 rounded"
//           placeholder="Search for a movie..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <button
//           className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
//           onClick={handleSearch}
//         >
//           <FaSearch />
//         </button>
//       </div>

//       <div className="grid gap-6 md:grid-cols-2">
//         {movies.map((movie) => (
//           <div
//             key={movie.id}
//             className="bg-white rounded-lg shadow p-4 flex gap-4"
//           >
//             {movie.poster_path && (
//               <img
//                 src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
//                 alt={movie.title}
//                 className="w-28 rounded"
//               />
//             )}
//             <div>
//               <h2 className="text-xl font-semibold">{movie.title}</h2>
//               <p className="text-sm text-gray-600">{movie.release_date} | ⭐ {movie.vote_average}</p>
//               <p className="text-sm mt-2 line-clamp-3">{movie.overview}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <ToastContainer />
//     </div>
//   );
// }
