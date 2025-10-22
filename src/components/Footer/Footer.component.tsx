import { IonIcon } from '@ionic/react';
import { mail, logoLinkedin } from 'ionicons/icons';

import { Locale } from '../../utils/localStorage'; // Type

import './Footer.styles.css';

type Props = {
  locale: Locale;
};

const Footer = ({ locale }: Props) => {
  const isEnglish = locale === 'en';

  return (
    <footer>
      <section className='section' id='contact'>
        <div className='container footer-container'>
          <h2 className='footer-title'>
            {isEnglish ? 'Contact me!' : 'Vedd fel velem a kapcsolatot!'}
          </h2>
          <div className='footer-contact-container'>
            <a
              className='footer-contact'
              href='mailto:davidszenyita@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IonIcon icon={mail} className='footer-icon' />
              <p>davidszenyita@gmail.com</p>
            </a>
            <a
              className='footer-contact'
              href='https://www.linkedin.com/in/david-szenyita-46b99b27b'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IonIcon icon={logoLinkedin} className='footer-icon' />
              <p>{isEnglish ? 'David Szenyita' : 'Szenyita Dávid'}</p>
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
