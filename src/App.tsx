import { useState, useEffect } from 'react';

import { loadLocale, saveLocale, Locale } from './utils/localStorage';

import Navbar from './components/Navbar/Navbar.component';
import Welcome from './components/Welcome/Welcome.component';
import AboutMe from './components/AboutMe/AboutMe.component';
import Projects from './components/Projects/Section/Projects.component';
import Footer from './components/Footer/Footer.component';

import './styles/global.css';

function App() {
  const [language, setLanguage] = useState<Locale>(() => loadLocale() ?? 'hu');

  useEffect(() => {
    saveLocale(language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <>
      <Navbar locale={language} onLocaleChange={setLanguage} />
      <Welcome locale={language} />
      <AboutMe locale={language} />
      <Projects locale={language} />
      <Footer locale={language} />
    </>
  );
}

export default App;
