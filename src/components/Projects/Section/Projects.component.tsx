import { Locale } from '../../../utils/localStorage'; // Type

import Card from '../Card/Card.component';

import androidIcon from '../../../assets/images/android-icon.webp';
import reactNativeIcon from '../../../assets/images/react-native-logo.webp';
import reactIcon from '../../../assets/images/react-icon.webp';
import consoleIcon from '../../../assets/images/console-icon.png';
import wpIcon from '../../../assets/images/wp-logo.webp';
import fimgaIcon from '../../../assets/images/figma-logo.webp';

import './Projects.styles.css';

type Props = {
  locale: Locale;
};

const Projects = ({ locale }: Props) => {
  const isEnglish = locale === 'en';

  const leafiqoIcons = [androidIcon, reactNativeIcon];
  const thisWebsiteIcon = [reactIcon];
  const pveGameIcons = [consoleIcon, reactIcon];
  const otherPorjectsIcons = [wpIcon, fimgaIcon, reactIcon];

  return (
    <section className='section projects-section' id='projects'>
      <div className='container'>
        <h2 className='projects-title'>
          {isEnglish ? 'My projects' : 'Projektjeim'}
        </h2>
        <div className='project-cards-container'>
          <Card
            title='Leafiqo'
            text={
              isEnglish
                ? 'Virtual plant care Android application, where you can create a virtual garden, choose from hundreds of plants, track watering schedules and set reminders, with profile management and local data storage. The focus is on a clean UI and UX, the component system, and logic.'
                : 'Virtuális növénygondozó Android applikáció, amelyben virtuális kertet hozhatsz létre, több száz növényből válogathatsz, követheted az öntözéseket és emlékeztetőket állíthatsz be, profilkezeléssel és lokális adattárolással. A fókusz a letisztult UI és UX-en van, a komponensrendszeren és a logikán.'
            }
            link={isEnglish ? 'Project website' : 'A projekt weboldala'}
            href='https://davenextworks.com/leafiqo/'
            iconURL={leafiqoIcons}
            onClick='https://drive.google.com/file/d/1tKo70wkXx3RGjMZUbc75-jSq-zu0oo_W/view?usp=drive_link'
            buttonText={isEnglish ? 'Download the demo' : 'Letöltöm a demót'}
          />
          <Card
            title={isEnglish ? 'This website' : 'Ez a weboldal'}
            text={
              isEnglish
                ? 'This is a React-based portfolio site where I showcase my development skills and qualifications through real projects. Here you can see how I design, build, and manage interfaces from design to project.'
                : 'Ez egy React alapú portfólió oldal, ahol bemutatom a fejlesztői készségeimet, képesítéseimet valós projekteken keresztül. Itt látható, hogyan tervezek, építek és kezelek felületeket a design-tól a projektig.'
            }
            link={isEnglish ? "The project's repository" : 'A projekt repója'}
            href='https://github.com/Hamill48/react-portfolio'
            iconURL={thisWebsiteIcon}
            onClick='https://www.figma.com/design/Lxrwn6TacCCWsf0W5OHq9b/Portf%C3%B3li%C3%B3?node-id=1-2&t=W9sPreH2We0O7gVk-1'
            buttonText={
              isEnglish ? 'View the Figma plan' : 'Megtekintem a Figma tervet'
            }
          />
          <Card
            title={
              isEnglish
                ? 'PVE Game (older, not responsive)'
                : 'PVE Játék (régebbi, nem reszponzív)'
            }
            text={
              isEnglish
                ? "A simple PVE game in React. I created the basic logic in useEffect. You can choose a character and collect gold. Weapons and shields await you in the shop. Your opponents are monsters, and they become increasingly difficult to defeat. It's easy to understand, yet challenging to play."
                : 'Egyszerű PVE játék Reactben. Az alaplogikát a useEffectben készítettem. Lehet karaktert választani és aranyat gyűjteni. A boltban fegyver és pajzs vár. Az ellenfelek szörnyek és egyre nehezebb őket legyőzni. Gyorsan érthető mégis játékos kihívás.'
            }
            link={isEnglish ? "The project's repository" : 'A projekt repója'}
            href='https://github.com/Hamill48/pve-game'
            iconURL={pveGameIcons}
            onClick='https://pve-game.netlify.app/'
            buttonText={isEnglish ? 'View' : 'Megtekintem'}
          />
          <Card
            title={isEnglish ? 'Other projects' : 'További projektek'}
            text={
              isEnglish
                ? 'My other projects include several smaller Unity, WordPress, and Figma projects, which I am happy to attach upon request. I have created several WordPress websites, such as the Leafiqo website, and I have also developed numerous Figma designs for websites and a Unity game, as well as a React-based WordPress plugin.'
                : 'További projektjeim között több kisebb Unity, WordPress és Figma munka is szerepel, amelyeket kérésre szívesen csatolok. Több WordPress weboldalt készítettem, például a Leafiqo oldalát, emellett számos Figma-tervet dolgoztam ki weboldalakhoz és egy Unity-játékhoz, valamint fejlesztettem már WordPress plugint React alapokon.'
            }
            iconURL={otherPorjectsIcons}
            onClick='mailto:davidszenyita@gmail.com'
            buttonText={isEnglish ? 'Contact me' : 'Felveszem a kapcsolatot'}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
