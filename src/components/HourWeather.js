import Icon from "./shared/Icon";
import { RiCelsiusFill } from "react-icons/ri";
import './HourWeather.css';
import { toFahrenheit } from "../helpers";
import TempIcon from "./shared/TempIcon";
const HourWeather = (props) => {
    return(
        <article className="day-card hour-card ">
            <p className="day-card__date center">{props.hour.datetime}</p>
            <Icon style="icon-list center" icon={props.hour.icon}/>
            <p className="day-card__temp center">
            {props.tempUnit === "C" && props.hour.temp}
          {props.tempUnit === "F" && toFahrenheit(props.hour.temp)}
          <TempIcon unit={props.tempUnit} />
            </p>
            
        </article>
    )
}
export default HourWeather;