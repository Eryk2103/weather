import { RiCelsiusFill } from 'react-icons/ri';
import './DayWeather.css';
import DateCard from './shared/DateCard';
import Icon from './shared/Icon';
const DayWeather = (props) => {
  return (
    <li>
      <article className="day-card">
        <DateCard className="day-card__date center" date={props.date.datetime}/>
        <Icon  style="icon-list center" icon={props.date.icon}/>
        <p className="day-card__temp center">
          {props.date.tempmin} <RiCelsiusFill/> / {props.date.tempmax} <RiCelsiusFill/>
        </p>
      </article>
    </li>
  );
};
export default DayWeather;
