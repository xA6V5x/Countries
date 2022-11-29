import React from 'react';
import Nav from '../Nav/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryDetails } from '../../redux/actions/index.js';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import CountryInfo from '../CountryInfo/CountryInfo.jsx';
import Spinner from '../Spinner/Spinner';

import styles from './CountryDetails.module.css';

const CountryDetails = () => {
     const { idPais } = useParams();
     const dispatch = useDispatch();
     const { id, name, capital, continents, area, flags, img, lat, lng, population, subregion } =
          useSelector((state) => state.country);

     useEffect(() => {
          dispatch(getCountryDetails(idPais));
     }, []);

     // const areaKM = new Intl.NumberFormat('es-MX').format(area);

     return (
          <div className={styles.country_details_container}>
               <Nav />
               {id ? (
                    <CountryInfo
                         id={id}
                         name={name}
                         capital={capital}
                         continents={continents}
                         areaKm={area}
                         img={img}
                         lat={lat}
                         lng={lng}
                         population={population}
                         subregion={subregion}
                         pic={flags}
                    />
               ) : (
                    <Spinner />
               )}
          </div>
     );
};

export default CountryDetails;
