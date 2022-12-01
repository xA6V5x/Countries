import React from 'react';
import { Link } from 'react-router-dom';
import arg from '../../assets/SliderLanding/sliderLanding2.jpg';
import styles from './CountryCard.module.css';

const CountryCard = ({ id, name, continent, flag }) => {
     return (
          <Link to={`/countries/${id}`} className={styles.card}>
               <img className={styles.card_img} src={arg} alt="country_img" />

               <div className={styles.card_details}>
                    <div className={styles.card_details_country}>
                         <div className={styles.card_details_country_link}>
                              <h3>{name}</h3>
                         </div>
                         <p>{continent}</p>
                    </div>

                    <div className={styles.card_details_flag}>
                         <img src={flag} alt="" />
                    </div>
               </div>
          </Link>
     );
};

export default CountryCard;
