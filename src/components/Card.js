import './Card.css';

const Card = (props) => {
 return( 
    <div className="weather-card">
        <h3 className="weather-card__address">{props.title}</h3>
        {props.children}
    </div>
 )
}
export default Card;