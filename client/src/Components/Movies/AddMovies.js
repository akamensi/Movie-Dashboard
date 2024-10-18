import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { addMovie } from "../../Redux/Actions/MovieActions"

const AddMovie=()=>{

  
    const [title, setTitle]=useState("")
    const [genre, setGenre]=useState("")
    const [description, setDescription]=useState("")
    const [review, setReview]=useState("")
    const [rating, setRating]=useState(0) 

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAdd=()=>{
        dispatch(addMovie(title, genre,description,review,rating),navigate)

    }

    return(
        <>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
               Add Movie
          </Header>
          <Form size='large'>
              <Segment stacked>     
              <Form.Input onChange={(e)=>setTitle(e.target.value)} fluid  iconPosition='left' placeholder='Title' />
              <Form.Input onChange={(e)=>setGenre(e.target.value)} fluid iconPosition='left' placeholder='genre'  />
              <Form.Input onChange={(e)=>setDescription(e.target.value)} fluid iconPosition='left' placeholder='description'  />
              <Form.Input onChange={(e)=>setReview(e.target.value)} fluid iconPosition='left' placeholder='review'  />
              <Form.Input onChange={(e)=>setRating(e.target.value)} fluid iconPosition='left' placeholder='rating'  />
            <Button onClick={handleAdd} color='teal' fluid size='large'>
                  Add Movie
              </Button>
              </Segment>
          </Form>
          </Grid.Column>
      </Grid>
      </>
    )
}

export default AddMovie