import heroImg from '../../assets/images/hero-img.webp';

import { Locale } from '../../utils/localStorage'; // Type

import './Welcome.styles.css';

type Props = {
  locale: Locale;
};

const Welcome = ({ locale }: Props) => {
  const isEnglish = locale === 'en';

  return (
    <section className='section welcome-section'>
      <div className='container welcome-container'>
        <div>
          <h1 className='welcome'>{isEnglish ? 'Welcome!' : 'Üdvözöllek!'}</h1>
          <h2 className='me'>{isEnglish ? 'I am David' : 'Én Dávid vagyok'}</h2>
          <p className='welcome-p'>
            {isEnglish ? 'Front End Developer' : 'Front End Fejlesztő'}
          </p>
        </div>

        <div className='hero-media'>
          <img src={heroImg} alt='Hero' />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
