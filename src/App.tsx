import Navbar from './components/Navbar/Navbar.component';
import Welcome from './components/Welcome/Welcome.component';
import AboutMe from './components/AboutMe/AboutMe.component';
import Projects from './components/Projects/Section/Projects.component';
import Footer from './components/Footer/Footer.component';

import './styles/global.css';

function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <AboutMe />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
