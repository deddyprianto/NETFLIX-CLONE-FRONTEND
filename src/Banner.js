import React, { useEffect, useState } from "react";
import dbRequURL from "./Api";
import instance from "./Axios";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await instance.get(dbRequURL.fetchNetflixOriginals);
      setMovie(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundPosition: "center center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
      }}
    >
      <div className="banner__content">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
          <h1 className="banner__description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;
