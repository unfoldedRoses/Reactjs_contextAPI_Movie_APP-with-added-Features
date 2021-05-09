import {React,useContext} from 'react'
import {GlobalContext} from "../context/GlobalState"


function MovieControl({movie,type}) {
    const {removeMovieFromWatchlist,}=useContext(GlobalContext)
    return (
        <div className="inner-card-controls"> 
            {
                type ==="watched"&&(
                    <>
                        <button className="ctrl-btn">
                            <i className="fa-fw far fa-eye"></i>
                        </button>
                        <button onClick={()=>removeMovieFromWatchlist(movie.id)}>
                            <i className="ctrl-btn">
                            <i className="fa-fw fa fa-times"></i></i>
                        </button>
                    </>
                )
            }
        </div>
    )
}

 export default MovieControl
