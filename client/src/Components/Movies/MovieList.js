import { useDispatch, useSelector } from "react-redux"
import { getMovies } from "../../Redux/Actions/MovieActions"
import { useEffect } from "react"
import MovieCard from "./MovieCard"

const MovieList=()=>{

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getMovies())
    },[])

    const movies = useSelector((state) => state.MovieReducer.movies)


    return(
        <div>
            {
                movies.map(el=> <MovieCard el={el}/>)
            }
        </div>
    )
}

export default MovieList