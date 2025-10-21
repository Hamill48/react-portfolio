import { IonIcon } from '@ionic/react';
import { mail, logoLinkedin } from 'ionicons/icons';

import './Footer.styles.css';

const Footer = () => {
  return (
    <footer>
      <section className='section'>
        <div className='container footer-container'>
          <h2 className='footer-title'>Vedd fel velem a kapcsolatot!</h2>
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
              <p>Szenyita Dávid</p>
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
