import { useState } from 'react';

import { IonIcon } from '@ionic/react';
import { caretDownSharp, caretUpSharp } from 'ionicons/icons';

import { Locale } from '../../utils/localStorage'; // Type

import htmlCssJsIcon from '../../assets/images/html-js-css-logo.webp';

import './AboutMe.styles.css';

type Props = {
  locale: Locale;
};

const AboutMe = ({ locale }: Props) => {
  const isEnglish = locale === 'en';
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section className='section about-section' id='about'>
      <div className='container about-container'>
        <h2 className='about-title'>{isEnglish ? 'About me' : 'Rólam'}</h2>

        {isEnglish ? (
          <p className='about-main'>
            I currently work as a front-end developer at Industry4You Marketing
            Agency (RK-TEAM Digital Ltd.). My responsibilities include{' '}
            <span>UI/UX design, website development,</span> as well as
            occasionally
            <span> creating custom WordPress plugins in React.</span> I also
            develop mobile applications with <span>React Native </span>
            and take part in their design process. I’m passionate about software
            development and continuously improving my skills. I’m currently
            learning <span>Node.js</span>, where I practice database management
            and development of APIs through smaller projects. I’ve been doing
            this regularly for about 6 months. In my free time, I enjoy game
            development in Unity and creating 3D models in Blender. I’m also
            working on my own <span>Android application.</span>
          </p>
        ) : (
          <p className='about-main'>
            {' '}
            Jelenleg az Industry4You Marketing Ügynökségnél (RK-TEAM Digital
            Kft.) dolgozom front-end fejlesztőként. Feladataim közé tartozik a 
            <span>UI/UX tervezés, weboldalak fejlesztése,</span> valamint
            alkalmanként 
            <span>egyedi WordPress pluginek készítése React-ben.</span> Emellett
            mobilalkalmazásokat is fejlesztek<span> React Native</span>
             segítségével, és részt veszek azok tervezési folyamatában is.
            Érdeklődöm a szoftverfejlesztés iránt, és folyamatosan képzem magam.
            Jelenleg a <span>Node.js</span>-t tanulom, ahol jelenleg kisebb
            projekteken keresztül gyakorlom az adatbázis-kezelést, valamint
            API-k tervezését és fejlesztését – ezzel nagyjából 6 hónapja
            foglalkozom rendszeresen. Szabadidőmben szeretek játékfejlesztéssel
            foglalkozni Unity-ben, valamint 3D modelleket készíteni Blenderben.
            Jelenleg is dolgozom egy saját <span>Android applikáción.</span>
          </p>
        )}

        <h3 className='about-subtitle'>
          {isEnglish ? 'Work experience:' : 'Munkatapasztalat:'}
        </h3>
        <div className='list'>
          <p className='list-p'>
            <span className='dot'>· </span>
            {isEnglish
              ? '2024 – present: Industry4You Marketing Agency (front-end developer)'
              : '2024 - jelenleg: Industry4You Marketing Ügynökség (front-end fejlesztő'}
          </p>
        </div>

        <h3 className='about-subtitle'>
          {isEnglish ? 'My qualifications:' : 'Képesítéseim:'}
        </h3>
        <div className='list'>
          <p className='list-p'>
            <span className='dot'>· </span>{' '}
            {isEnglish
              ? '2023 – present: Business Informatics (BSc)'
              : '2023 – jelenleg: Gazdaságinformatikus (BSc)'}
          </p>
          <p className='list-p'>
            <span className='dot'>· </span>
            {isEnglish
              ? '2021–2022: Financial and Accounting Clerk'
              : '2021 – 2022: Pénzügyi és számviteli ügyintéző (OKJ)'}
          </p>
          <p className='list-p'>
            <span className='dot'>· </span>
            {isEnglish
              ? 'English B2 language exam (conversational level)'
              : 'Angol B2 nyelvvizsga (társalgási szint)'}
          </p>
          <p className='list-p'>
            <span className='dot'>· </span>{' '}
            {isEnglish ? 'Driver’s license' : 'B kategóriás jogosítvány'}
          </p>
        </div>

        <h3 className='about-subtitle'>
          {isEnglish ? 'My development skills:' : 'Fejlesztői készségeim:'}
        </h3>
        <div className='list'>
          <p className='list-p'>
            <span className='dot'>· </span>HTML, CSS, JavaScript ES6{' '}
            {isEnglish ? '(4 years)' : '(4 év)'}
          </p>
          <p className='list-p'>
            <span className='dot'>· </span>TypeScript{' '}
            {isEnglish ? '(2 years)' : '(2 év)'}
          </p>
          <p className='list-p'>
            <span className='dot'>· </span>React{' '}
            {isEnglish ? '(2 years)' : '(2 év)'}
          </p>
          <p className='list-p'>
            <span className='dot'>· </span>React Native{' '}
            {isEnglish ? '(1 year)' : '(1 év)'}
          </p>
          <p className='list-p'>
            <span className='dot'>· </span>Node.js{' '}
            {isEnglish ? '(1 year)' : '(1 év)'}
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
                <span className='dot'>· </span>Seo
              </p>
              <p className='list-p'>
                <span className='dot'>· </span>UI / UX
              </p>
              <p className='list-p'>
                <span className='dot'>· </span>Python
              </p>
              <p className='list-p'>
                <span className='dot'>· </span>
                {isEnglish ? 'Use of Ai' : 'AI használata'}
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
          {isVisible
            ? isEnglish
              ? 'Show less'
              : 'Mutass kevesebbet'
            : isEnglish
            ? 'Show more'
            : 'Mutass többet'}

          <IonIcon
            className='arrow-down-icon'
            icon={isVisible ? caretUpSharp : caretDownSharp}
            aria-hidden='true'
          />
        </button>

        <div className='about-img-container'>
          <img src={htmlCssJsIcon} alt='html css icon' />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
