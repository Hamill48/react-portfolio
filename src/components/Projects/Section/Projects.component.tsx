import Card from '../Card/Card.component';

import './Projects.styles.css';

const Projects = () => {
  return (
    <section className='section projects-section'>
      <div className='container'>
        <h2>Projektjeim</h2>
        <Card
          title='Leafiqo'
          text='Virtuális növénygondozó Android applikáció, 
          amelyben virtuális kertet hozhatsz létre, 
          több száz növényből válogathatsz, követheted
           az öntözéseket és emlékeztetőket állíthatsz be, 
           profilkezeléssel és lokális adattárolással. 
           A fókusz a letisztult UI és UX-en van, a komponensrendszeren és a logikán.'
          link='A projekt weboldala'
          href='/'
          iconURL='/'
          onClick={() => console.log('hello')}
          buttonText='Letöltöm a demót'
        />
      </div>
    </section>
  );
};

export default Projects;
