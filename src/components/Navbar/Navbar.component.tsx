import { Locale } from '../../utils/localStorage'; // Type

import './Navbar.styles.css';

type Props = {
  locale: Locale;
  onLocaleChange: (loc: Locale) => void;
};

const Navbar = ({ locale, onLocaleChange }: Props) => {
  const isEnglish = locale === 'en';

  return (
    <header className='nav-root'>
      <nav className='nav-bar'>
        <ul className='nav-links'>
          <li>
            <a href='#about'>{isEnglish ? 'About' : 'Rólam'}</a>
          </li>
          <li>
            <a href='#projects'>{isEnglish ? 'Projects' : 'Projekteim'}</a>
          </li>
          <li>
            <a href='#contact'>{isEnglish ? 'Contact' : 'Kapcsolat'}</a>
          </li>
        </ul>

        <div className='lang-switch' role='group'>
          <button
            type='button'
            className={locale === 'hu' ? 'active' : ''}
            aria-pressed={locale === 'hu'}
            onClick={() => onLocaleChange('hu')}
          >
            HU
          </button>
          <button
            type='button'
            className={locale === 'en' ? 'active' : ''}
            aria-pressed={locale === 'en'}
            onClick={() => onLocaleChange('en')}
          >
            EN
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
