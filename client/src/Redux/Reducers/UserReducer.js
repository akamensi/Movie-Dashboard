import { CURRENT, FAIL, LOGOUT, SINGIN, SINGUP } from "../ActionsType/UserTypes"

const initialState={
    user:{},
    errors:[]


}

const UserReducer=(state=initialState,action)=>{
switch(action.type){
case SINGUP:
    localStorage.setItem('token', action.payload.token)
    return {...state,user:action.payload.user, errors:null}

case SINGIN :
    localStorage.setItem('token', action.payload.token)
    return {...state, user : action.payload.user, errors: null}   
    
case CURRENT :
    return {...state, user:action.payload}

case LOGOUT : localStorage.removeItem('token')
return {...state, user: null, errors: null}

case FAIL: return {...state, errors : action.payload, user:null}  


    default: return state
}
}

export default UserReducer