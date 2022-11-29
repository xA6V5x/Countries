import React from "react";
//import { useDispatch, useSelector } from 'react-redux';
import Nav from "../Nav/Nav.jsx";
import CountriesContainer from "../CountriesContainer/CountriesContainer.jsx"
import styles from './Home.module.css';

const Home = (props) => {
    return (
        <div className={styles.countries_container}>
            <Nav />
            <CountriesContainer />
        </div>
    )
}

export default Home;