
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/Movies/NavBar';
import Home from './Components/Movies/Home';
import AddMovie from './Components/Movies/AddMovies';
import MovieList from './Components/Movies/MovieList';
import EditMovie from './Components/Movies/EditMovie';
import Singup from './Components/User/Singup';
import Singin from './Components/User/Singin';
import Profil from './Components/User/Profil';
import PrivateRoute from './Components/User/PrivateRoute';
import ErrorHand from './Components/Errors/ErrorHand';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ErrorHand/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/singup" element={<Singup />}></Route>
        <Route path="/singin" element={<Singin />}></Route>
        <Route path="/profil" element={<PrivateRoute><Profil /></PrivateRoute>}></Route>
        <Route path="/addMovie" element={<AddMovie />}></Route>
        <Route path='/movieList' element={<MovieList/>} ></Route>
        <Route path='/editMovie/:id' element={<EditMovie/>} ></Route>
    </Routes>
    </div>
  );
}

export default App;
