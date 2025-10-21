import { useState } from 'react';

import { IonIcon } from '@ionic/react';
import { caretDownSharp, caretUpSharp } from 'ionicons/icons';

import htmlCssJsIcon from '../../assets/images/html-js-css-logo.png';

import './AboutMe.styles.css';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section className='section about-section'>
      <div className='container about-container'>
        <h2 className='about-title'>Rólam</h2>
        <p className='about-main'>
          Jelenleg az Industry4You Marketing Ügynökségnél (RK-TEAM Digital Kft.)
          dolgozom front-end fejlesztőként. Feladataim közé tartozik a 
          <span>UI/UX tervezés, weboldalak fejlesztése,</span> valamint
          alkalmanként 
          <span>egyedi WordPress pluginek készítése React-ben.</span> Emellett
          mobilalkalmazásokat is fejlesztek<span> React Native</span>
           segítségével, és részt veszek azok tervezési folyamatában is.
          Érdeklődöm a szoftverfejlesztés iránt, és folyamatosan képzem magam.
          Jelenleg a <span>Node.js</span>-t tanulom, ahol jelenleg kisebb
          projekteken keresztül gyakorlom az adatbázis-kezelést, valamint API-k
          tervezését és fejlesztését – ezzel nagyjából 6 hónapja foglalkozom
          rendszeresen. Szabadidőmben szeretek játékfejlesztéssel foglalkozni
          Unity-ben, valamint 3D modelleket készíteni Blenderben. Jelenleg is
          dolgozom egy saját <span>Android applikáción.</span>
        </p>

        <h3 className='about-subtitle'>Munkatapasztalat:</h3>
        <div className='list'>
          <p className='list-p'>
            <span className='dot'>· </span>2024 – jelenleg: Industry4You
            Marketing Ügynökség (front-end fejlesztő)
          </p>
        </div>

        <h3 className='about-subtitle'>Képesítéseim:</h3>
        <div className='list'>
          <p className='list-p'>
            <span className='dot'>· </span>2023 – jelenleg: Gazdaságinformatikus
            (BSc)
          </p>
          <p className='list-p'>
            <span className='dot'>· </span>2021 – 2022: Pénzügyi és számviteli
            ügyintéző (OKJ)
          </p>
          <p className='list-p'>
            <span className='dot'>· </span>Angol B2 nyelvvizsga (társalgási
            szint)
          </p>
          <p className='list-p'>
            <span className='dot'>· </span>B kategóriás jogosítvány (7 év
            vezetés)
          </p>
        </div>

        <h3 className='about-subtitle'>Fejlesztői készségeim:</h3>
        <div className='list'>
          <p className='list-p'>
            <span className='dot'>· </span>HTML, CSS, JavaScript ES6 (4 év)
          </p>
          <p className='list-p'>
            <span className='dot'>· </span>TypeScript (2 év)
          </p>
          <p className='list-p'>
            <span className='dot'>· </span>React (2 év)
          </p>
          <p className='list-p'>
            <span className='dot'>· </span>React Native (1 év)
          </p>
          <p className='list-p'>
            <span className='dot'>· </span>Node.js (fél év)
          </p>
          <p className='list-p'>
            <span className='dot'>· </span>Figma
          </p>
          <p className='list-p'>
            <span className='dot'>· </span>Git, GitHub
          </p>
          {isVisible ? (
            <>
              <p className='list-p'>
                <span className='dot'>· </span>Android Studio
              </p>
              <p className='list-p'>
                <span className='dot'>· </span>Rest API-k
              </p>
              <p className='list-p'>
                <span className='dot'>· </span>Seo alapok
              </p>
              <p className='list-p'>
                <span className='dot'>· </span>UI / UX alapelvek
              </p>
              <p className='list-p'>
                <span className='dot'>· </span>Python
              </p>
              <p className='list-p'>
                <span className='dot'>· </span>AI használata
              </p>
              <p className='list-p'>
                <span className='dot'>· </span>NPM, Yarn
              </p>
              <p className='list-p'>
                <span className='dot'>· </span>Unity
              </p>
              <p className='list-p'>
                <span className='dot'>· </span>C#
              </p>
            </>
          ) : (
            ''
          )}
        </div>

        <button
          className='about-more-btn'
          onClick={() => setIsVisible((prev) => !prev)}
        >
          {isVisible ? 'Mutass kevesebbet' : 'Mutass többet'}
          <IonIcon
            className='arrow-down-icon'
            icon={isVisible ? caretUpSharp : caretDownSharp}
            aria-hidden='true'
          />
        </button>

        <div className='about-img-container'>
          <img src={htmlCssJsIcon} />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
