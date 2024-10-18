import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import ErrorReducer from "./ErrorReducer";
import MovieReducer from "./MovieReducer";

const rootReducer= combineReducers({UserReducer, ErrorReducer, MovieReducer})

export default rootReducer