import { GETMOVIES, GETMOVIEUSER, GETONEMOVIE } from "../ActionsType/MovieTypes"

const initialState={
    oneMovie:{},
    movies:[],
    movieUser:[]
}

const MovieReducer=(state=initialState,action)=>{
    switch(action.type){
        case GETMOVIES: return {...state, movies: action.payload}
        case GETONEMOVIE: return {...state, oneMovie: action.payload}
        case GETMOVIEUSER: return {...state, movieUser: action.payload}


        default : return state
    }
}

export default MovieReducer