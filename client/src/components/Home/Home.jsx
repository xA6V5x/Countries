import React from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import Nav from '../Nav/Nav.jsx';
import backward from '../../assets/Home/backward.png';
import forward from '../../assets/Home/forward.png';
import CountriesContainer from '../CountriesContainer/CountriesContainer.jsx';
import styles from './Home.module.css';

const Home = (props) => {
     return (
          <div className={styles.countries_container}>
               <Nav />
               <CountriesContainer />
               <div className={styles.text_container}>
                    <div className={styles.text}>
                         <p>What country will you explore first?</p>
                         <div className={styles.arrows}>
                              <img className={styles.arrow} src={backward} alt="" />
                              <img className={styles.arrow} src={forward} alt="" />
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Home;
