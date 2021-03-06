import React from 'react';

import '../styles/pages/landing.css';
import logoImg from '../images/Logo.svg';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';


function Landing(){
    return(
    <div id="page-landing">
      <div className="content-wrapper">
          <img src={logoImg} alt=""/>

          <main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>

            <div className="location">
              <strong>Criciúma</strong>
              <span>Santa Catarina</span>
            </div>

            <Link to="/app" className="enter-app">
              <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"></FiArrowRight> 
            </Link>

          </main>
      </div>
 
    </div>

    );

}

export default Landing;
