import style from './Form.module.css'
import { useState } from "react";
import { useNavigate, NavLink } from 'react-router-dom';

const Form = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userData.email.trim() !== '' && userData.password.trim() !== '') {
      alert('Info enviada correctamente!');
      navigate('/home');
    }
  };

  return (
    <div className={style["portal"]}>
      <div className={style["logo"]}></div>
      <div className={style["login-box"]}>
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className={style["user-box"]}>
            <input
              value={userData.email}
              type="text"
              name="email"
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <label>Username</label>
          </div>
          <div className={style["user-box"]}>
            <input
              value={userData.password}
              type="password"
              name="password"
              onChange={handleChange}
              required
            />
            <label>Password</label>
          </div>
          <button type="submit" href="#" className={style["transparent-button"]} >
          <a className={style[".login-box a"]}>Submit
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </a>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
