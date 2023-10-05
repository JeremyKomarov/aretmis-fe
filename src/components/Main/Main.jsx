import React from 'react';
import fullLogo from '../../assets/full-logo.png';
import './Main.css';

function Main() {
  return (
    <section className="main">
      <div className="main-img">
        <img src={fullLogo}></img>
      </div>

      <div className="arrow">
        <a href="#">
          Scroll Down
          <span>
            <i className="bx bx-down-arrow-alt"></i>
          </span>
        </a>
      </div>
    </section>
  );
}

export default Main;
