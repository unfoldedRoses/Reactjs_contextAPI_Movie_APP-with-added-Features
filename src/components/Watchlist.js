import React, { useContext,useState } from "react";
import Moment from "react-moment";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from './MovieCard'
import NoData from './NoData'


export const Watchlist = () => {
  const {watchlist} = useContext(GlobalContext);
  const [watching,watchedNot]=useState("Watch List Page Dont Have Any Movies At the Moment")
  console.table(watchlist)

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>

          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watchlist" />
            ))}
          </div>
        ) : (
         <NoData watchedNot={watching}/>
        )}
      </div>
    </div>
  );
};

export default Watchlist