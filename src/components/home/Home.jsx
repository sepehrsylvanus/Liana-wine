import React, { useState } from "react";
import Button from "../buttons/Button";
import "./home.css";
import wine from "../../stats/wine.png";
import emptyButton from "../../stats/emptyGlass.png";
import button from "../../stats/menuBtn.png";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="homeContainer">
      <div className="appContainer">
        <div
          style={menuOpen ? { display: "flex" } : { display: "none" }}
          className="buttonsContainer"
        >
          <div className="buttuns">
            <Button
            to='/about'
            title='hakkında'
            />
          </div>
          <div className="buttuns">
          <Button
            to='/university'
            title='Üniversite'
            />
          </div>
        </div>
        {!menuOpen && (
          <img
            className="buttonImg"
            onClick={() => setMenuOpen(!menuOpen)}
            src={button}
            alt="button"
          />
          
        )}
        {menuOpen && (
          <img
            className="buttonImg"
            onClick={() => setMenuOpen(!menuOpen)}
            src={emptyButton}
            alt="emptyButton"
          />
        )}
        <div className='appContent' style={menuOpen ? {display:'none'} : {display:'flex'}} >
          <div className="titleContainer">
            <img className="wineImg" src={wine} alt="" />
            <div className="titleText">
              <p className="lianaWine">Liana wine</p>

              <div className="madeByText">
                <p className="madeBy">made by</p>
                <p className="saraSayodin">Sara Sayodin</p>
              </div>
            </div>
          </div>
          <p className="wineHistory">
            Şarabın en eski kanıtı, bugünkü Gürcistan (MÖ 6000), İran (MÖ 5000),
            İtalya ve Ermenistan'da (MÖ 4000) Kafkasya bölgesindendir. Yeni
            Dünya şarabının, Amerika'nın yerli halkları tarafından yapılan
            alkollü içeceklerle bir bağlantısı vardır, ancak esas olarak Yeni
            İspanya'daki daha sonraki İspanyol gelenekleriyle bağlantılıdır.
          </p>
          <div className="buttonsBig">
            <Button
            to='/about'
            title='hakkında'
            />
            <Button
            to='/university'
            title='Üniversite'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
