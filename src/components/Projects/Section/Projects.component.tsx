import Card from '../Card/Card.component';

import androidIcon from '../../../assets/images/android-icon.webp';
import reactNativeIcon from '../../../assets/images/react-native-logo.webp';
import reactIcon from '../../../assets/images/react-icon.webp';
import consoleIcon from '../../../assets/images/console-icon.png';
import wpIcon from '../../../assets/images/wp-logo.webp';
import fimgaIcon from '../../../assets/images/figma-logo.webp';

import './Projects.styles.css';

const Projects = () => {
  const leafiqoIcons = [androidIcon, reactNativeIcon];
  const thisWebsiteIcon = [reactIcon];
  const pveGameIcons = [consoleIcon, reactIcon];
  const otherPorjectsIcons = [wpIcon, fimgaIcon, reactIcon];

  return (
    <section className='section projects-section'>
      <div className='container'>
        <h2 className='projects-title'>Projektjeim</h2>
        <div className='project-cards-container'>
          <Card
            title='Leafiqo'
            text='Virtuális növénygondozó Android applikáció, 
          amelyben virtuális kertet hozhatsz létre, 
          több száz növényből válogathatsz, követheted
           az öntözéseket és emlékeztetőket állíthatsz be, 
           profilkezeléssel és lokális adattárolással. 
           A fókusz a letisztult UI és UX-en van, a komponensrendszeren és a logikán.'
            link='A projekt weboldala'
            href='https://davenextworks.com/leafiqo/'
            iconURL={leafiqoIcons}
            onClick='https://drive.google.com/file/d/1j2BRncur-WJlyOl5gv_eOc9fw5KpvFT7/view?usp=drive_link'
            buttonText='Letöltöm a demót'
          />
          <Card
            title='Ez a weboldal'
            text='Ez egy React alapú portfólió oldal, ahol bemutatom a fejlesztői készségeimet, 
            képesítéseimet valós projekteken keresztül. 
            Itt látható, hogyan tervezek, építek és kezelek felületeket a design-tól a projektig.'
            link='A projekt repója'
            href='https://github.com/Hamill48/react-portfolio'
            iconURL={thisWebsiteIcon}
            onClick='https://www.figma.com/design/Lxrwn6TacCCWsf0W5OHq9b/Portf%C3%B3li%C3%B3?node-id=1-2&t=W9sPreH2We0O7gVk-1'
            buttonText='Megtekintem a Figma tervet'
          />
          <Card
            title='PVE Játék (régebbi, nem reszponzív)'
            text='Egyszerű PVE játék Reactben. 
            Az alaplogikát a useEffectben készítettem. 
            Lehet karaktert választani és aranytgyűjteni. 
            A boltban fegyver és pajzs vár. 
            Az ellenfelek szörnyek és egyre nehezebb őket legyőzni. 
            Gyorsan érthető mégis játékos kihívás. '
            link='A projekt repója'
            href='https://github.com/Hamill48/pve-game'
            iconURL={pveGameIcons}
            onClick='https://pve-game.netlify.app/'
            buttonText='Megtekintem'
          />
          <Card
            title='További projektek'
            text='További projektjeim között több kisebb Unity,
            WordPress és Figma munka is szerepel, 
            amelyeket kérésre szívesen csatolok. 
            Több WordPress weboldalt készítettem, például a Leafiqo oldalát, 
            emellett számos Figma-tervet dolgoztam ki weboldalakhoz és egy Unity-játékhoz, 
            valamint fejlesztettem már WordPress plugint React alapokon.'
            iconURL={otherPorjectsIcons}
            onClick='mailto:davidszenyita@gmail.com'
            buttonText='Felveszem a kapcsolatot'
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
