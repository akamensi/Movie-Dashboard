import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { getOneMovie, updateMovie } from "../../Redux/Actions/MovieActions"

const EditMovie=()=>{
    const {id}= useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getOneMovie(id))
    },[])

const onemovie = useSelector(state => state.MovieReducer.oneMovie)


    
    const [title, setTitle]=useState(onemovie.title)
    const [genre, setGenre]=useState(onemovie.genre)
    const [description, setDescription]=useState(onemovie.description)
    const [review, setReview]=useState(onemovie.review)
    const [rating, setRating]=useState(onemovie.rating)

    useEffect(()=>{
        setTitle(onemovie.title)
        setGenre(onemovie.genre)
        setDescription(onemovie.description)
        setReview(onemovie.review)
        setRating(onemovie.rating)
    },[onemovie])
    const navigate = useNavigate()
    const handleUpdate=(e)=>{
        
        dispatch(updateMovie(title, genre, description, review, rating), navigate)
    }

    return(
        <>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
               Edit Movie
          </Header>
          <Form size='large'>
              <Segment stacked>     
              <Form.Input value={title} onChange={(e)=>setTitle(e.target.value)} fluid  iconPosition='left' placeholder='Title' />
              <Form.Input value={genre} onChange={(e)=>setGenre(e.target.value)} fluid iconPosition='left' placeholder='genre'  />
              <Form.Input value={description} onChange={(e)=>setDescription(e.target.value)} fluid iconPosition='left' placeholder='description'  />
              <Form.Input value={review} onChange={(e)=>setReview(e.target.value)} fluid iconPosition='left' placeholder='review'  />
              <Form.Input value={rating} onChange={(e)=>setRating(e.target.value)} fluid iconPosition='left' placeholder='rating'  />
            <Button onClick={handleUpdate} color='teal' fluid size='large'>
                  Edit Movie
              </Button>
              </Segment>
          </Form>
          </Grid.Column>
      </Grid>
      </>
    
    )
}

export default EditMovie