import { IonIcon } from '@ionic/react';
import { chevronForwardOutline, caretForwardOutline } from 'ionicons/icons';

import './Card.styles.css';

type Props = {
  title: string;
  text: string;
  link?: string;
  href?: string;
  iconURL?: string[];
  buttonText: string;
  onClick: string;
};

const Card = ({
  title,
  text,
  link,
  href,
  iconURL,
  buttonText,
  onClick,
}: Props) => {
  return (
    <div className='card'>
      <h3 className='card-title'>{title}</h3>
      <p className='card-text'>{text}</p>
      <div className='card-inner-container'>
        {link ? (
          <a
            href={href}
            className='card-link'
            target='_blank'
            rel='noopener noreferrer'
          >
            {link}{' '}
            <IonIcon icon={chevronForwardOutline} className='card-link-icon' />
          </a>
        ) : (
          <div className='card-placeholder-container'></div>
        )}
        {iconURL && (
          <div className='icon-container'>
            {iconURL.map((url) => (
              <img className='card-icon' src={url} alt='' aria-hidden='true' />
            ))}
          </div>
        )}
      </div>
      <a
        href={onClick}
        className='card-button'
        target='_blank'
        rel='noopener noreferrer'
      >
        {buttonText}{' '}
        <IonIcon icon={caretForwardOutline} className='card-button-icon' />
      </a>
    </div>
  );
};

export default Card;
