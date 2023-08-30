import axios from 'axios';
import style from '../Detail/Detail.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleDarkMode } from '../../redux/actions';

const Detail = ({ darkMode, toggleDarkMode }) => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert('No hay personajes con ese ID');
      }
    });

    return () => setCharacter({});
  }, [id]);

  return (
    <div className={style.container}>
      <div className={darkMode ? style['profile-dark'] : style.profile}>
        <h2>{character.name && character.name}</h2>
        <img className={style.image} src={character.image && character.image} alt='' />
        <p>STATUS: {character.status && character.status}</p>
        <p>GENDER: {character.gender && character.gender}</p>
        <p>SPECIES: {character.species && character.species}</p>
        <p>ORIGIN: {character.origin?.name && character.origin?.name}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { darkMode: state.darkMode };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDarkMode: () => dispatch(toggleDarkMode()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
