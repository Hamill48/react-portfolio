import './Card.styles.css';

type Props = {
  title: string;
  text: string;
  link?: string;
  href?: string;
  iconURL?: string;
  buttonText: string;
  onClick: () => void;
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
        {link && <a href={href}>{link}</a>}
        {iconURL && <img src={iconURL} />}
      </div>
      <button onClick={onClick}>{buttonText}</button>
    </div>
  );
};

export default Card;
