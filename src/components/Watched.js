import {GlobalContext} from '../context/GlobalState'
import MovieCard from './MovieCard'
import Watchlist from './Watchlist'
import NoData from './NoData'
import {useState} from 'react'
import {useContext} from 'react'

export default function Watched() {
    const [watching,watchedNot]=useState("Watched Page Dont Have Any Movies At the Moment")
    const {watched} = useContext(GlobalContext);
    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">watched Movies</h1>
                        </div>
                            {watched.length>0?(
                        <div className="movie-grid">
                            {watched.map((movie)=>(
                                    <MovieCard movie={movie} type="watched" key={movie.id}/>
                                ))}
                        </div>
                            ):(   <NoData watchedNot={watching}/>)}
                        </div>
                            </div>
                                    )
                                }
