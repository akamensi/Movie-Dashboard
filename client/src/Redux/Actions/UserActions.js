import { CURRENT,  LOGOUT, SINGIN, SINGUP } from "../ActionsType/UserTypes"
import axios from "axios"
import { handleError } from "./ErrorActions"

export const register=(newUser, navigate)=>async(dispatch)=>{
    try {
        const res= await axios.post('/api/user/signup', newUser)
        dispatch(
            {
                type: SINGUP,
                payload: res.data
            }
        )

        navigate("/profil")
        
    } catch (error) {
  
            error.response.data.errors.forEach(e=>{
                dispatch(handleError(e.msg))
            })

        
    }

}


export const login=(logUser, navigate)=>async(dispatch)=>{
    try {

        const res = await axios.post("/api/user/signin", logUser)
        dispatch(
            {
                type:SINGIN,
                payload: res.data
            }
        )
        navigate('/profil')
        
    } catch (error) {
        error.response.data.errors.forEach(e=>{
            dispatch(handleError(e.msg))
        })
    }
}


export const current=()=>async(dispatch)=>{
    const config={
        headers : {
            Authorization : localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.get('/api/user/currentUser',config)
        dispatch(
            {
                type:CURRENT,
                payload:res.data
            }
        )
    } catch (error) {
        error.response.data.errors.forEach(e=>{
            dispatch(handleError(e.msg))
        })
        
    }

}


export const logout=()=>{
    return(
        {
            type:LOGOUT
        }
    )
}