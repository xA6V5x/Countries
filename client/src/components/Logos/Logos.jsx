import React from 'react';
import logoFb from '../../assets/Logos/logoFb.png';
import logoGH from '../../assets/Logos/logoGH.png';
import logoIg from '../../assets/Logos/logoIg.png';
import logoTw from '../../assets/Logos/logoTw.png';
import style from './Logos.module.css';

const Logos = () => {
     return (
          <div className={style.logos}>
               <div className={style.logo}>
                    <a href="https://twitter.com/AgusManu_" rel="noreferrer" target="_blank">
                         <img src={logoTw} alt="Twitter" />
                    </a>
               </div>
               <div className={style.logo}>
                    <a
                         href="https://www.instagram.com/new.affection_/"
                         rel="noreferrer"
                         target="_blank"
                    >
                         <img src={logoIg} alt="Instagram" />{' '}
                    </a>
               </div>
               <div className={style.logo}>
                    <a
                         href="https://www.facebook.com/agustin.ojeda.9256"
                         rel="noreferrer"
                         target="_blank"
                    >
                         <img src={logoFb} alt="Facebook" />{' '}
                    </a>
               </div>
               <div className={style.logo}>
                    <a href="https://github.com/xA6V5x" rel="noreferrer" target="_blank">
                         <img src={logoGH} alt="GitHub" />{' '}
                    </a>
               </div>
          </div>
     );
};

export default Logos;
