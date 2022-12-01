import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCountryByName } from '../../redux/actions/index.js';
import styles from './Nav.module.css';
import search_img from '../../assets/SearchBar/search_img.png';

const Nav = () => {
     const [countryState, setCountryState] = useState('');
     const dispatch = useDispatch();

     function handleClick(e) {
          e.preventDefault();
          if (countryState.length === 0) {
               return alert('Por favor ingrese un país iniciar la búsqueda');
          } else {
               dispatch(getCountryByName(countryState));
               setCountryState('');
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
                    <button
                         className={styles.material_symbols_outlined}
                         type="submit"
                         onClick={handleClick}
                    >
                         <img src={search_img} alt="" />
                    </button>
               </div>
               <Link to="/countries" className={styles.btn_link}>
                    Home
               </Link>
               <Link to="/createAtivity" className={styles.btn_link}>
                    Create Activity
               </Link>
               <Link to="about" className={styles.btn_link}>
                    About
               </Link>
               <Link to="/">
                    <h1>Travelers</h1>
               </Link>
          </nav>
     );
};

export default Nav;
