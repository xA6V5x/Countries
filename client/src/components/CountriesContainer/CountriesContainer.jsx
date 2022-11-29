import React from 'react';
import CountryCard from '../CountryCard/CountryCard.jsx';
import Pagination from '../Pagination/Pagination.jsx';
import Spinner from '../Spinner/Spinner.jsx';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCountries } from '../../redux/actions/index.js';
import styles from './CountriesContainer.module.css';

const CountriesContainer = () => {
     const dispatch = useDispatch();
     const allCountries = useSelector((state) => state.countries);
     const [currentPage, setCurrentPage] = useState(1);
     const [countriesPerPage] = useState(8);
     const indexOfLastCountry = currentPage * countriesPerPage;
     const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
     const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);
     const pagination = (pageNumber) => {
          setCurrentPage(pageNumber);
     };

     useEffect(() => {
          dispatch(getAllCountries());
     }, [dispatch]);

     return (
          <div className={styles.cards_container}>
               {/* <Pagination
                    countriesPerPage={countriesPerPage}
                    allCountries={allCountries.length}
                    pagination={pagination}
                    currentPage={currentPage}
               /> */}
               <div className={styles.cards_slider}>
                    {currentCountries.length > 0 ? (
                         allCountries.map((country, index) =>
                              index < 9 ? (
                                   <CountryCard
                                        key={country.id}
                                        id={country.id}
                                        name={country.name}
                                        flag={country.flags}
                                        continent={country.continents}
                                   />
                              ) : null
                         )
                    ) : (
                         <Spinner />
                    )}
               </div>
          </div>
     );
};

export default CountriesContainer;
