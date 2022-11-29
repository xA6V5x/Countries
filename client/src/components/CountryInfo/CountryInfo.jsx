import React from 'react';
import ActivityMiniCard from '../ActivityMiniCard/ActivityMiniCard';
import Map from '../Map/Map.jsx';
import styles from './CountryInfo.module.css';

const CountryInfo = ({
     id,
     name,
     capital,
     population,
     areaKm,
     continents,
     subregion,
     img,
     lat,
     lng,
     pic,
}) => {
     const position = { lat, lng };

     return (
          <div className={styles.country_details_app}>
               <div className={styles.country_details_map}>
                    <Map center={position} />
               </div>

               <div className={styles.country_details_app_container}>
                    <div className={styles.country_details_app_info}>
                         <div className={styles.country_details_app_info_container}>
                              <div className={styles.country_details_countryImg}>
                                   <h1>{name}</h1>
                                   <div className={styles.flag}>
                                        <img className={styles.img_flag} src={pic} alt="" />
                                   </div>
                                   {/* <img src={pic} alt="" /> */}
                              </div>

                              {/* COUNTRY INFO---------------------------------------------- */}
                              <div className={styles.country_details_info_especs}>
                                   <p>
                                        <b>Capital: </b>
                                        {capital}
                                   </p>
                                   <p>
                                        <b>Population: </b> {population}
                                   </p>
                                   <p>
                                        <b>Area: </b> {areaKm} Km2
                                   </p>
                                   <p>
                                        <b>International Country Code: </b> {id}
                                   </p>
                                   <p>
                                        <b>Continent: </b> {continents}
                                   </p>
                                   <p>
                                        <b>Subregion: </b> {subregion}
                                   </p>
                              </div>
                         </div>

                         {/* ACTIVITIES------------------------------------------------ */}
                         <div className={styles.country_details_activies}>
                              <div className={styles.country_details_activitiesInfo}>
                                   <h1>What to do?</h1>
                              </div>

                              <div className={styles.country_details_activitiesAll}>
                                   <ActivityMiniCard />
                                   <ActivityMiniCard />
                                   <ActivityMiniCard />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default CountryInfo;
