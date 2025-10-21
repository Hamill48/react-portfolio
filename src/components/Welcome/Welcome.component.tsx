import heoImg from '../../assets/images/hero-img.webp';

import './Welcome.styles.css';

const Welcome = () => {
  return (
    <section className='section welcome-section'>
      <div className='container welcome-container'>
        <div>
          <h1 className='welcome'>Üdvözöllek!</h1>
          <h2 className='me'>Én Dávid vagyok</h2>
          <p>Front End Fejlesztő</p>
        </div>

        <div className='hero-media'>
          <img src={heoImg} alt='Hero' />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
