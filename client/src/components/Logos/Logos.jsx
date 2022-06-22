import React from "react";
import logoFb from '../../assets/Logos/logoFb.png'
import logoGH from '../../assets/Logos/logoGH.png'
import logoIg from '../../assets/Logos/logoIg.png'
import logoTw from '../../assets/Logos/logoTw.png'
import style from './Logos.module.css'

const Logos = () => {
  return (
    <div className={style.logos}>
      <a href="https://twitter.com/AgusManu_" rel="noreferrer" target="_blank"><div className={style.logo}><img src={logoTw} alt="Twitter" /></div></a>
      <a href="https://www.instagram.com/new.affection_/" rel="noreferrer" target="_blank"><div className={style.logo}><img src={logoIg} alt="Instagram" /> </div></a>
      <a href="https://www.facebook.com/agustin.ojeda.9256" rel="noreferrer" target="_blank"><div className={style.logo}><img src={logoFb} alt="Facebook" /> </div></a>
      <a href="https://github.com/xA6V5x" rel="noreferrer" target="_blank"><div className={style.logo}><img src={logoGH} alt="GitHub" /> </div></a>
    </div>
  );
};

export default Logos;
