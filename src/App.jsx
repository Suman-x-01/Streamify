import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
import Modal from "./Modal";

const defaultMovies = [
  {
    Title: "Inception",
    Year: "2010",
    imdbID: "M1",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    videoLink:
      "https://freeplayer.pages.dev/?link=https://this-is.ohnooo.site/8e1c75f555e89a70722a98a9ab94505b/indexbot.lol/Inception%20(2010)%20Dual%20Audio%20Hindi%20720p%20BluRay%201.4GB%20[BollYFlix].mkv",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    imdbID: "M2",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDU5NTJkMjQtNGYyZC00NjYwLWJlNWMtODk5NDI5MDE3NDJiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    videoLink:
      "https://freeplayer.pages.dev/?link=https://this-is.ohnooo.site/61a2998ffd710512dd18bd9f942eb34a/indexbot.lol/Interstellar%20(2014)%20IMAX%20{Hindi-English}%20720p%20BluRay%20ESub%20[BollyFlix].mkv",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    imdbID: "M3",
    Poster:
      "https://images.moviesanywhere.com/bd47f9b7d090170d79b3085804075d41/c6140695-a35f-46e2-adb7-45ed829fc0c0.jpg",
    videoLink:
      "https://freeplayer.pages.dev/?link=https://this-is.ohnooo.site/92e9caacdb5986fc39e303b64156504e/indexbot.lol/The%20Dark%20Knight%20(2008)%20Dual%20Audio%20{Hindi-English}%20720p%20BluRay%201GB%20ESub%20[BollYFlix].mkv",
  },
  {
    Title: "Iron Man",
    Year: "2008",
    imdbID: "M4",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
    videoLink:
      "https://freeplayer.pages.dev/?link=https://this-is.ohnooo.site/ab376aa8c918423d24a0d8cbfb711139/indexbot.lol/Iron%20Man%20(2008)%20{Hindi-English}%20720p%20BluRay%20ESub%20[BollyFlix].mkv",
  },
  {
    Title: "Parasite",
    Year: "2008",
    imdbID: "M5",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_.jpg",
    videoLink:
      "https://freeplayer.pages.dev/?link=https://this-is.ohnooo.site/7a303593b332226e0da9dc6cc9f9dd1e/indexbot.lol/BollyFlix.Me%20-%20Parasite%20(2019)%20Dual%20Audio%20{Hindi-English}%20720p%20BluRay%201.1GB%20ESub.mkv",
  },
  {
    Title: "The Conjuring",
    Year: "2008",
    imdbID: "M6",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTRkMDlmZWEtMzQyYy00YzgyLTgwM2QtNzgxYmIwNGVlYmJlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    videoLink:
      "https://freeplayer.pages.dev/?link=https://this-is.ohnooo.site/e9254651f09e6ffa47ff2742781cfaa1/indexbot.lol/The%20Conjuring%202%20(2016)%20Dual%20Audio%20{Hindi-English}%20720p%20BluRay%201.2GB%20ESub%20[BollYFlix].mkv",
  },
  {
    Title: "End-Game",
    Year: "2019",
    imdbID: "M7",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    videoLink:
      "https://freeplayer.pages.dev/?link=https://this-is.ohnooo.site/37c81942062ee6f27f52cbc6aababe4d/indexbot.lol/Avengers%20Endgame%202019%20Dual%20Audio%20ORG%20Hindi%20720p%20BluRay%20[BollYFlix].mkv",
  },
  {
    Title: "KGF",
    Year: "2021",
    imdbID: "M8",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BM2M0YmIxNzItOWI4My00MmQzLWE0NGYtZTM3NjllNjIwZjc5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    videoLink:
      "https://freeplayer.pages.dev/?link=https://this-is.ohnooo.site/5f10e2b57bef3c5060308b7f69f28a82/indexbot.lol/K.G.F.%20Chapter%201%20(2018)%20Hindi%20Dubbed%20720p%20WEB-DL%20ESub%20[BollyFlix].mkv",
  },
  {
    Title: "Three idiots",
    Year: "2021",
    imdbID: "M9",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzc4ZWQ3NmYtODE0Ny00YTQ4LTlkZWItNTBkMGQ0MmUwMmJlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    videoLink:
      "https://freeplayer.pages.dev/?link=https://this-is.ohnooo.site/ab376aa8c918423d24a0d8cbfb711139/indexbot.lol/Iron%20Man%20(2008)%20{Hindi-English}%20720p%20BluRay%20ESub%20[BollyFlix].mkv",
  },
];

const API_URL = "https://www.omdbapi.com/?apikey=5baa7886";

const App = () => {
  const [movies, setMovies] = useState(defaultMovies);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null); // State to track selected movie for modal

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]); // Handle case where no movies are found
    }
  };

  const openModal = (movie) => {
    setSelectedMovie(movie); // Set the selected movie for modal
  };

  const closeModal = () => {
    setSelectedMovie(null); // Close modal by resetting selected movie
  };

  return (
    <div className="app">
      <h1>Streamify</h1>
      <div className="search">
        <input
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      <div className="container">
        {movies.map((movie) => (
          <div onClick={() => openModal(movie)} key={movie.imdbID}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>

      {/* Render the modal if a movie is selected */}
      {selectedMovie && (
        <Modal videoLink={selectedMovie.videoLink} closeModal={closeModal} />
      )}
    </div>
  );
};

export default App;
