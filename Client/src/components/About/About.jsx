import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import image from '../Assets/avatar.png';
import soundFile from '../Assets/scream.aac';
import style from '../About/About.module.css';
import { faLinkedinIn, faGithub, faInstagram, faTwitter, faFacebookF, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  
  const audioRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current;
  
    if (audioElement) {
      audioElement.loop = true;
      audioElement.play();
    }  
    return () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
      }
    };
  }, []);
  
  
  const [activeSection, setActiveSection] = useState('#about');

  const handleButtonClick = (targetSection) => {
    setActiveSection(targetSection);
  };

  return (
  <div>
    <p className={style.about} />
    <p className={style.sun} />
    <div className={`${style.card} ${activeSection === '#experience' || activeSection === '#contact' ? style["is-active"] : ''}`} data-state={activeSection}>
      <div className={`${style["card-header"]} ${activeSection === '#experience' || activeSection === '#contact' ? style["is-active"] : ''}`}>
        <div className={`${style["card-cover"]} ${activeSection === '#experience' || activeSection === '#contact' ? style["is-active"] : ''}`} style={{backgroundImage: "url('https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')"}}></div>
        <img className={`${style["card-avatar"]} ${activeSection === '#experience' || activeSection === '#contact' ? style["is-active"] : ''}`} src={image} alt="avatar" />
        <h1 className={`${style["card-fullname"]} ${activeSection === '#experience' || activeSection === '#contact' ? style["is-active"] : ''}`}>Diego J. Insaurralde</h1>
        <h2 className={`${style["card-jobtitle"]} ${activeSection === '#experience' || activeSection === '#contact' ? style["is-active"] : ''}`}>Full-Stack Developer</h2>
      </div>
      <div className={style["card-main"]}>
        <div className={`${style["card-section"]} ${activeSection === '#about' ? style["is-active"] : ''}`} id="about">
          <div className={style["card-content"]}>
            <div className={style["card-subtitle"]}>ACERCA DE MÍ</div>
            <p className={style["card-desc"]}>CAMPEÓN DEL MUNDO ⭐⭐⭐</p>
            <p className={style["card-desc"]}>Argentino cómo Lionel.</p>
            <p className={style["card-desc"]}>De Boca cómo Román.</p>
            <p></p>
            <p className={style["card-item-desc"]}>La J es de "JavaScript" 🤓</p>
          </div>
          <div className={style["card-social"]}>
          <a href="https://www.linkedin.com/in/diego-insaurralde-299512270/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} className={style["fai"]} /></a>
          <a href="https://github.com/Insaurralde38" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className={style["fai"]} /></a>
          <a href="https://www.instagram.com/djinsaurralde/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className={style["fai"]} /></a>
          <a href="https://twitter.com/djinsaurralde" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} className={style["fai"]} /></a>
          <a href="https://www.facebook.com/djinsaurralde" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} className={style["fai"]} /></a>
          </div>
        </div>
        <div className={`${style["card-section"]} ${activeSection === '#experience' ? style["is-active"] : ''}`} id="experience">
          <div className={style["card-content"]}>
            <div className={style["card-subtitle"]}>EXPERIENCIA LABORAL</div>
            <div className={style["card-timeline"]}>
              <div className={style["card-item"]} data-year="2006">
            <div className={style["card-item-title"]}>Operario en <span>Matricería JBF</span></div>
            <div className={style["card-item-desc"]}>Trabajos en fresadora, inyección de plástico y tareas de mantenimiento.</div>
          </div>
          <div className={style["card-item"]} data-year="2009">
            <div className={style["card-item-title"]}>Productor radial en <span>FM Cristal</span></div>
            <div className={style["card-item-desc"]}>Trabajos de producción y columnista en el programa “A la Pelotita!!!”.</div>
          </div>
          <div className={style["card-item"]} data-year="2011">
            <div className={style["card-item-title"]}>Comerciante en <span>Under Games</span></div>
            <div className={style["card-item-desc"]}>Dueño de comercio minorista de videojuegos y computación.</div>
          </div>
            </div>
          </div>
        </div>
        <div className={`${style["card-section"]} ${activeSection === '#contact' ? style["is-active"] : ''}`} id="contact">
          <div className={style["card-content"]}>
            <div className={style["card-subtitle"]}>CONTACTO</div>
            <div className={style["card-contact-wrapper"]}>
              <div className={style["card-contact"]}>
                <FontAwesomeIcon icon={faLocationDot} />Loma Hermosa, Tres de Febrero, Buenos Aires, Argentina, Sudamérica, Planeta Tierra 🌎, Sistema Solar 🌌</div>
              <div className={style["card-contact"]}>
                <FontAwesomeIcon icon={faPhone} />(+54) 011-2766-6063</div>
              <div className={style["card-contact"]}>
                <FontAwesomeIcon icon={faEnvelope} />djinsaurralde38@gmail.com</div>
              <a href="https://api.whatsapp.com/send?phone=541127666063&text=%F0%9F%91%8B%F0%9F%98%80" target="_blank" rel="noreferrer">
                <button className={style["contact-me"]}>
                <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '17px' }} />    INTERACTUAR</button>
              </a>
            </div>
          </div>
        </div>
        <div className={style["card-buttons"]}>
          <button onClick={() => handleButtonClick('#about')} className={activeSection === '#about' ? style["is-active"] : ''}>ACERCA DE MI</button>
          <button onClick={() => handleButtonClick('#experience')} className={activeSection === '#experience' ? style["is-active"] : ''}>EXPERIENCIA</button>
          <button onClick={() => handleButtonClick('#contact')} className={activeSection === '#contact' ? style["is-active"] : ''}>CONTACTO</button>
         </div>
        </div>
       </div>
      <audio ref={audioRef}>
          <source src={soundFile} type="audio/aac" />
      </audio>
    </div>
  );
};

export default About;
