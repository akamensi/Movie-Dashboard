import axios from "axios"
import { GETMOVIES, GETMOVIEUSER, GETONEMOVIE } from "../ActionsType/MovieTypes"




export const getMovies=()=>async(dispatch)=>{
    try {
       
        const res = await axios.get('/api/movie')
        
        dispatch(
            {
                type : GETMOVIES,
                payload : res.data

            }
        )
    } catch (error) {
        console.log(error)
        
    }
}

export const addMovie=(payload,navigate)=>async(dispatch)=>{
    try {
    
        await axios.post('/api/movie',payload,{
            headers : {
                Authorization : localStorage.getItem('token')
            }
        })
        dispatch(getMovies())
        navigate('/movieList')
    } catch (error) {
        console.log(error)
    }
}


export const getOneMovie=(id)=>async(dispatch)=>{
        try {
            const res = await axios.get(`/api/movie/${id}`)
            dispatch(
                {
                    type : GETONEMOVIE,
                    payload:res.data
                }
            )
        } catch (error) {
            console.log(error)
        }
}


export const updateMovie=(payload,id,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/movie/${id}`,payload)
        dispatch(getMovies())
        navigate('/movieList')

    } catch (error) {
        console.log(error)
    }
}


export const deleteMovie=(id,navigate)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/movie/${id}`)
        dispatch(getMovies())
        navigate(`/ListMarket`)
    } catch (error) {
        console.log(error)
    }
}


export const getMovieUser =(userId)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/movie/my-movies/${userId}`)
        dispatch(
            {
                type : GETMOVIEUSER,
                payload : res.data
            }
        )
    } catch (error) {
        console.log(error)
    }
}