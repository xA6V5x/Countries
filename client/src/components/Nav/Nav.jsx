import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCountryByName } from "../../redux/actions/index.js";
import styles from './Nav.module.css';
import search_img from '../../assets/SearchBar/search_img.png';

const Nav = () => {
  const [countryState, setCountryState] = useState("");
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    if (countryState.length === 0) {
      return alert("Por favor ingrese un país iniciar la búsqueda");
    } else {
      dispatch(getCountryByName(countryState));
      setCountryState("");
    }
  }
  return (
    <nav className={styles.navegador}>
      <div className={styles.in_search}>
        <input
          className={styles.search_country}
          type="text"
          placeholder="Search your country..."
        />
        <button className={styles.material_symbols_outlined} type="submit" onClick={handleClick}>
          <img src={search_img} alt="" />
        </button>
      </div>
      <button className={styles.btn_link}>Home</button>
      <button className={styles.btn_link}>Country Info</button>
      <button className={styles.btn_link}>Create Your Activity</button>
      <Link to="/">
        <h1>Travelers</h1>
      </Link>
    </nav>
  );
};

export default Nav;
