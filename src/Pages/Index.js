import React, { Fragment, useState, useEffect, useCallback } from "react";
import AddMovie from "../Components/Movies/AddMovies";
import MoviesList from "../Components/Movies/MoviesList";
import "./Index.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://react-http-21f21-default-rtdb.firebaseio.com/movies.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    const response = await fetch('https://react-http-21f21-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  const deleteHandler = async (id) => {
    console.log('id = ',id);
    await fetch(`https://react-http-21f21-default-rtdb.firebaseio.com/movies/${id}.json`, {
      method: 'DELETE',
      body: JSON.stringify(id),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setMovies(movies.filter((movie) => movie.id !== id));
  }

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
    content=<MoviesList movies={movies} onDelete = {deleteHandler} />

  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <Fragment>
      <section className="AddMovies"><AddMovie onAddMovie={addMovieHandler}/></section>
      <section  className="AddMovies">
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section  className="AddMovies">{content}</section>
    </Fragment>
  );
};

export default Home;

// import { Link } from "react-router-dom";
// import { NavGen } from "../Components/NavBar/NavbarElements";
//  <NavGen>
//   <Link to={"../store"} className="home-button">
//     Get our Latest allbum{" "}
//   </Link>
// </NavGen>
// <div className="container">
//   <h2 className="hometitle">Tours</h2>
//   <div className="home-item">
//     <span className="home-date">JUL16</span>
//     <span className="home-place">DETROIT, MI</span>
//     <span className="home-area">DTE ENERGY MUSIC THEATRE</span>
//     <button className="buy-button">BUY TICKETS</button>
//   </div>
//   <div className="home-item">
//     <span className="home-date">JUL16</span>
//     <span className="home-place">TORONTO,ON</span>
//     <span className="home-area">BUDWEISER STAGE</span>
//     <button className="buy-button">BUY TICKETS</button>
//   </div>
//   <div className="home-item">
//     <span className="home-date">JUL16</span>
//     <span className="home-place">BRISTOW, VA</span>
//     <span className="home-area">JIGGY LUBE LIVE</span>
//     <button className="buy-button">BUY TICKETS</button>
//   </div>
//   <div className="home-item">
//     <span className="home-date">JUL16</span>
//     <span className="home-place">PHOENIX, AZ</span>
//     <span className="home-area">AK-CHIN PAVILION</span>
//     <button className="buy-button">BUY TICKETS</button>
//   </div>
//   <div className="home-item">
//     <span className="home-date">JUL16</span>
//     <span className="home-place">LAS VEGAS, NV</span>
//     <span className="home-area">T-MOBILE ARENA</span>
//     <button className="buy-button">BUY TICKETS</button>
//   </div>
//   <div className="home-item">
//     <span className="home-date">JUL16</span>
//     <span className="home-place">CONCORD, CAI</span>
//     <span className="home-area">CONCORD PAVILION</span>
//     <button className="buy-button">BUY TICKETS</button>
//   </div>
// </div>