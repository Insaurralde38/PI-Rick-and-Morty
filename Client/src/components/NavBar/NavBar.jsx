import SearchBar from "../SearchBar/SearchBar";
import style from './NavBar.module.css';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleDarkMode } from '../../redux/actions';
import logo from '../Assets/logoNavBar.png';
import sunIcon from '../Assets/mortySun.png';
import GarageDay from '../Assets/backgroundGarageDay.webp';
import moonIcon from '../Assets/mortyMoon.png';
import GarageNight from '../Assets/backgroundGarageNight.webp';
import pickleRick from '../Assets/pickleRick.gif';
import sound01 from '../Assets/pickleRick01.aac';
import sound02 from '../Assets/pickleRick02.aac';
import sound03 from '../Assets/pickleRick03.aac';
import sound04 from '../Assets/pickleRick04.aac';
import sound05 from '../Assets/pickleRick05.aac';
import sound06 from '../Assets/pickleRick06.aac';
import sound07 from '../Assets/pickleRick07.aac';
import sound08 from '../Assets/pickleRick08.aac';

const NavBar = ({ darkMode, toggleDarkMode, onSearch, random }) => {
  const [randomSound, setRandomSound] = useState(null);

  const getRandomSound = () => {
    const sounds = [sound01, sound02, sound03, sound04, sound05, sound06, sound07, sound08];
    const randomIndex = Math.floor(Math.random() * sounds.length);
    return sounds[randomIndex];
  };

  const handleHover = () => {
    const sound = getRandomSound();
    setRandomSound(sound);
  };

  useEffect(() => {
    const getMode = localStorage.getItem("mode");
    if (getMode && getMode === "dark-mode") {
      toggleDarkMode();
    }
  }, [toggleDarkMode]);

  const toggleMode = () => {
    toggleDarkMode();
  };

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundImage = `url(${GarageNight})`;
      document.documentElement.style.setProperty("--nav-color", "#242526");
      document.documentElement.style.setProperty("--text-color", "#CCC");
    } else {
      document.body.style.backgroundImage = `url(${GarageDay})`;
      document.documentElement.style.setProperty("--nav-color", "#adcf4c");
      document.documentElement.style.setProperty("--text-color", "black");
    }
  }, [darkMode]);

  return (
    <nav>
      <div className={style["nav-bar"]}>
        <span className={style.logo}><img src={logo} alt="logo" /></span>
        <div className={style.pickleRick}>
          <img src={pickleRick} alt="PICKLE RICK!" style={{ height: '60px', width: '60px' }} onMouseEnter={handleHover} />
          {randomSound && <audio src={randomSound} autoPlay />}
        </div>
        <div className={style.menu}>
          <ul className={style["nav-links"]}>
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink onClick={random}>Add Random</NavLink></li>
            <li><NavLink to="/favorites" >Favorites</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <div className={style.searchBox}><SearchBar onSearch={onSearch} /></div>
          </ul>
        </div>
        <div className={style["darkLight-searchBox"]}>
          <div className={style["dark-light"]} onClick={toggleMode}>
            <i>{darkMode ? <img src={moonIcon} alt="Moon Icon" /> : <img src={sunIcon} alt="Sun Icon" />}</i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default connect(({darkMode}) => ({darkMode}), {toggleDarkMode})(NavBar);