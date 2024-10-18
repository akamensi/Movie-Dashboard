import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form, Grid, Header,  Segment } from 'semantic-ui-react'
import { login } from "../../Redux/Actions/UserActions";

const Singin=()=>{

    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");

    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handleSingin=()=>{
        dispatch(login({email, password}, navigate))
    }

    return(
      <>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
               Singin to your account
          </Header>
          <Form size='large'>
              <Segment stacked>     
              <Form.Input onChange={(e)=>setEmail(e.target.value)} fluid icon='mail' iconPosition='left' placeholder='E-mail address' />
              <Form.Input onChange={(e)=>setPassword(e.target.value)} fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />
             
            <Button onClick={handleSingin} color='teal' fluid size='large'>
                  Singin
              </Button>
              </Segment>
          </Form>
          </Grid.Column>
      </Grid>
      </>
    )
}

export default Singin