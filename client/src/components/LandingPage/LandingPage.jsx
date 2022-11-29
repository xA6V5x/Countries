import React from "react";
import { Link } from "react-router-dom";
import styles from './LandingPage.module.css';
import Logos from "../Logos/Logos";
import sliderLanding1 from '../../assets/SliderLanding/sliderLanding2.jpg';
import sliderLanding2 from '../../assets/SliderLanding/sliderLanding1.jpg';
import sliderLanding3 from '../../assets/SliderLanding/sliderLanding3.jpg';
import sliderLanding4 from '../../assets/SliderLanding/sliderLanding5.jpg';
import dots from '../../assets/SliderLanding/dots.png';

const LandingPage = () => {
    return (
        <div className={styles.container} >

            <Logos/>

            <div className={styles.dots}>
                <img className={styles.dots} src={dots} alt="" />
            </div>

            <div className={styles.home_info}>
                <h1>Travelers</h1>
                <p>The most complete guide <br />  of tourist activities <br /> in the world</p>
                <button>
                    <Link className={styles.enter} to={'/countries'}>GET STARTED</Link>
                </button>

            </div>

            <div className={styles.slider_frame}>
                <ul>
                    <li><img src={sliderLanding1} alt="" /></li>
                    <li><img src={sliderLanding2} alt="" /></li>
                    <li><img src={sliderLanding3} alt="" /></li>
                    <li><img src={sliderLanding4} alt="" /></li>
                    
                </ul>
            </div>

        </div>
    );
};

export default LandingPage;