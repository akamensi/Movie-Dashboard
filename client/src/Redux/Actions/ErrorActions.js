import { HANDLEERROR, REMOVEERROR } from "../ActionsType/ErrorTyeps"

export const handleError=(msg)=>async(dispatch)=>{
const id = Math.random()
dispatch(
    {
        type: HANDLEERROR,
        payload: { id, msg }
    }
)
setTimeout(()=>{
    dispatch(
        {
            type: REMOVEERROR,
            payload: id
        }
    )
},3000)
}