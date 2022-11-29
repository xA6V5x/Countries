import React from "react";
import styles from './ActivityMiniCard.module.css'

const ActivityMiniCard = (params) => {

  const {name = 'Nombre Actividad', difficulty = 0, length = '1 day', season = 'Summer'} = params

  return (

    <div className={styles.country_details_activity_card}>
      <h3>{name}</h3>

      <div className={styles.country_details_activity_card_especs}>
        <p>
          <b>Difficutly:</b> {difficulty} &nbsp;&nbsp; <b>Length:</b> {length
          } &nbsp;&nbsp;{" "}
          <b>Season:</b> {season}
        </p>
      </div>

    </div>

  );
};

export default ActivityMiniCard;