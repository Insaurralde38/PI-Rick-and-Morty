import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import style from './App.module.css';
import About from './components/About/About.jsx';
import Cards from './components/Cards/Cards.jsx';
import Detail from './components/Detail/Detail.jsx';
import Favorites from "../src/components/Favorites/Favorites";
import Form from './components/Form/Form.jsx';
import NavBar from './components/NavBar/NavBar.jsx';

function App() {
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();
   const showNavBar = useLocation().pathname !== '/';

   async function onSearch(id) {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if (data.name) {
            const exists = characters.some((char) => char.id === data.id);
            if (exists) {
              window.alert('¡Este personaje ya está en la lista!');
            } else {
              setCharacters((oldChars) => [...oldChars, data]);
            }
         }
      } catch (error) {
         window.alert('¡No hay personajes con este ID!');
      }
   }
    

   function randomHandler() {
      let haveIt = [];
      let random = (Math.random() * 826).toFixed();
  
      random = Number(random);
  
      if (!haveIt.includes(random)) {
        haveIt.push(random);
        fetch(`https://rickandmortyapi.com/api/character/${random}`)
          .then((response) => response.json())
          .then((data) => {
            if (data.name) {
              setCharacters((oldChars) => [...oldChars, data]);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          });
      } else {
        console.log("Ya agregaste todos los personajes");
        return false;
      }
   }

   const onClose = (id) =>{
      setCharacters(
         characters.filter((char)=>{
            return char.id !== Number(id)
         })
      )
   };

   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
            setAccess(access);
            access && navigate('/home');
      } catch (error) {
         console.log(error.message)
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className={style.App}>
      {showNavBar && <NavBar onSearch={onSearch} random={randomHandler} />}
         <Routes>
            <Route path="/" element={<Form onSubmit={login} />} />
            {!access ? (
               <>
                  <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
                  <Route path="/detail/:id" element={<Detail />} />
               </>
            ) : (
               <Route path="/home" element={<h1>No tienes acceso a esta página</h1>} />
               )}
            <Route path="/favorites" element={<Favorites />}/>
            <Route path="/about" element={<About />} />
         </Routes>
      </div>
   );
}
 
export default App;
