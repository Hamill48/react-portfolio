import { useState } from 'react';

import './Navbar.styles.css';

type Locale = 'hu' | 'en';

const Navbar = () => {
  const [language, setLanguage] = useState<Locale>('hu');
  console.log(language);

  return (
    <header className='nav-root'>
      <nav className='nav-bar'>
        <ul className='nav-links'>
          <a href='#about'>Rólam</a>
          <a href='#projects'>Projekteim</a>
          <a href='#contact'>Kapcsolat</a>
        </ul>

        {/* Nyelvválasztó – szegmens kapcsoló */}
        <div className='lang-switch' role='group' aria-label='Nyelvválasztó'>
          <button
            type='button'
            // className={activeLocale === "hu" ? "active" : ""}
            // aria-pressed={activeLocale === "hu"}
            onClick={() => setLanguage('hu')}
          >
            HU
          </button>
          <button
            type='button'
            // className={activeLocale === "en" ? "active" : ""}
            // aria-pressed={activeLocale === "en"}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
