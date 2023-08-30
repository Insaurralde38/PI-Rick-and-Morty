import Card from '../Card/Card';
import style from './Favorites.module.css';
import oooWeee from '../Assets/oooWeee.aac';
import poopyShot from '../Assets/poopyShot.aac';
import { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { filterCards, orderCards, toggleDarkMode } from '../../redux/actions';

const Favorites = ({ myFavorites, darkMode }) => {
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  useEffect(() => {
    if (darkMode) {
      const darkAudio = new Audio(poopyShot);
      darkAudio.play();
    } else {
      const audio = new Audio(oooWeee);
      audio.play();
    }
  }, [darkMode]);

  const handleClose = (id) => {};

  return (
    <div className={style.contenedor}>
      <div className={darkMode ? style.navDark : style.nav}>
        <select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
      </div>
      <div className={darkMode ? style.poopyShot : style.poopy}></div>
      {myFavorites?.map(({ id, name, status, species, gender, origin, image }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin}
            image={image}
            onClose={handleClose}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
    darkMode: state.darkMode,
  };
};

const mapDispatchToProps = {
  toggleDarkMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);