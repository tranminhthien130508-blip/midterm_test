import React, { useState } from "react";
import moviesData from "./moviesData";
import "./App.css";

function Header() {
  return (
    <header className="header">
      <div className="headerLogo">Anonime</div>
      <nav className="headerNav">
        <a href="#home">Home</a>
        <a href="#list">List anime</a>
      </nav>
      <input
        type="text"
        placeholder="Search anime or movie"
        className="headerSearch"
      />
    </header>
  );
}


function ExploreBanner({ movie }) {
  return (
    <section className="banner">
      <div className="bannerText">
        <h1>{movie.movieName}</h1>
        <p>{movie.description}</p>
      </div>
      {movie.image ? (
        <img
          src={movie.image}
          alt={movie.movieName}
          className="bannerImg"
        />
      ) : (
        <div className="bannerImg">No image available</div>
      )}
    </section>
  );
}

function NewReleaseCard({ movie, onClick, isActive }) {
  return (
    <div
      className={`newReleaseCard ${isActive ? "active" : ""}`}
      onClick={() => onClick(movie.id)}
    >
      {movie.image ? (
        <img src={movie.image} alt={movie.movieName} />
      ) : (
        <div
          style={{
            height: 284,
            width: "100%",
            lineHeight: "284px",
            textAlign: "center",
            color: "#999",
            fontStyle: "italic",
          }}
        >
          No image
        </div>
      )}
      <div className="episode">{`Episode ${movie.episode}`}</div>
      <div className="title">{movie.movieName}</div>
    </div>
  );
}

function NewReleaseList({ movies, onSelect, selectedId }) {
  return (
    <section className="newRelease">
      <h2>New Release</h2>
      <div className="newReleaseList">
        {movies.map((movie) => (
          <NewReleaseCard
            key={movie.id}
            movie={movie}
            onClick={onSelect}
            isActive={movie.id === selectedId}
          />
        ))}
      </div>
    </section>
  );
}

function App() {
  const [movies] = useState(moviesData);
  const [selectedMovieId, setSelectedMovieId] = useState(movies[0].id);
  const selectedMovie = movies.find((m) => m.id === selectedMovieId);

  return (
    <div className="container">
      <Header />
      <div className="explore">
        <h2>Explore</h2>
        <p>What are you gonna watch today ?</p>
      </div>
      <ExploreBanner movie={selectedMovie} />
      <NewReleaseList
        movies={movies}
        onSelect={setSelectedMovieId}
        selectedId={selectedMovieId}
      />
    </div>
  );
}

export default App;
