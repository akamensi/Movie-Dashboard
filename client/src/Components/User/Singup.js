import { useState } from "react"
import {useDispatch} from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Grid, Header,  Message, Segment } from 'semantic-ui-react'
import { register } from "../../Redux/Actions/UserActions";




const Singup=()=>{

    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSingup=()=>{
        dispatch(register({name, email, password}, navigate))
    }

    return(

    <>
<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
    <Header as='h2' color='teal' textAlign='center'>
         Create your account
    </Header>
    <Form size='large'>
        <Segment stacked>
        <Form.Input onChange={(e)=>setName(e.target.value)} fluid icon='user' iconPosition='left' placeholder='Name' />

        <Form.Input onChange={(e)=>setEmail(e.target.value)} fluid icon='mail' iconPosition='left' placeholder='E-mail address' />
        <Form.Input onChange={(e)=>setPassword(e.target.value)} fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />
       
     
        <Button onClick={handleSingup} color='teal' fluid size='large'>
            Signup
        </Button>
        </Segment>
    </Form>
    <Message>
        Already have? <a as={Link}  href='/singin'>Singin</a>
    </Message>
    </Grid.Column>
</Grid>
</>
    )
}

export default Singup