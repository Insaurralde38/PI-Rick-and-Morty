import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav, toggleDarkMode  } from '../../redux/actions';
import { connect } from 'react-redux'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as fasHeart  } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart  } from '@fortawesome/free-regular-svg-icons'

const Card = ({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites, darkMode}) => {

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () =>{
    isFav ? removeFav(id) : addFav({id, name, status, species, gender, origin, image, onClose});
    setIsFav(!isFav)
  }

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);
  
   return (
   <div className={style["flip-container"]}>
      <div className={style["flip-inner-container"]}>
        <div className={darkMode ? style["flip-front-dark"] : style["flip-front"]}>
        <div className={darkMode ? style["tag-name-dark"] : style["tag-name"]}>
          <p>{name}</p>
          <div></div>
        </div>
          <img src={image} alt="" />
        </div>
        <div className={darkMode ? style["flip-back-dark"] : style["flip-back"]}>
        <div className={style["wrapper"]}>
      {(<button className={`${style.like} ${isFav ? style.liked : style.unliked} focus:outline-none saving`} onClick={handleFavorite} >
          <span >{isFav ? (<FontAwesomeIcon icon={fasHeart} style={{color:"#d0361c"}}/>) : (<FontAwesomeIcon icon={farHeart} style={{color:"#666666"}}/>)}</span>
        </button>)}
          <div className={style["close-button"]} onClick={ () => {onClose(id)} }>
                <div className={style["in"]}>
                  <div className={darkMode ? style["close-button-block-dark"] : style["close-button-block"]}></div>
                  <div className={darkMode ? style["close-button-block-dark"] : style["close-button-block"]}></div>
                </div>
                <div className={style["out"]}>
                  <div className={darkMode ? style["close-button-block-dark"] : style["close-button-block"]}></div>
                  <div className={darkMode ? style["close-button-block-dark"] : style["close-button-block"]}></div>
                </div>
              </div>
            </div><div className={darkMode ? style["profile-image-dark"] : style["profile-image"]}>
            <Link to={`/detail/${id}`} className={darkMode ? style["profile-image-dark"] : style["profile-image"]}>
              <img src={image} alt={name} />
            </Link>
            <h2 className={darkMode ? style["flip-title-dark"] : style["flip-title"]}>{name}</h2>
            <p>STATUS: "{status}"</p>
            <p>SPECIES: "{species}"</p>
            <p>GENDER: "{gender}"</p>
            <p>ORIGIN: "{origin}"</p>
            </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps =(state)=>{
  return{
    myFavorites: state.myFavorites,
    darkMode: state.darkMode,
  }
 };

const mapDispatchToProps = (dispatch)=>{
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
    toggleDarkMode,
  }
 };

 export default connect(mapStateToProps,mapDispatchToProps)(Card)