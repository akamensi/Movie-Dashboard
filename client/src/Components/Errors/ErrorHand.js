import { Alert } from "react-bootstrap"
import { useSelector } from "react-redux"

const ErrorHand=()=>{

    const errors = useSelector(state=>state.ErrorReducer)
    return(
        <div>
            {errors.map(el=> <Alert  variant={'danger'}>
          This is a {el.msg} alert—check it out!
        </Alert>)}
        </div>
    )
}

export default ErrorHand