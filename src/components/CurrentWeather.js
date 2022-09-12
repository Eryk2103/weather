import Card from "./shared/Card";
import "./CurrentWeather.css";
import { IconContext } from "react-icons";
import { RiCelsiusFill } from "react-icons/ri";
import {
  BsFillCloudSleetFill,
  BsThermometerHalf,
  BsFillRecord2Fill,
  BsFillDropletFill,
  BsFillBrightnessAltHighFill,
  BsFillBrightnessAltLowFill,
  BsWind,
} from "react-icons/bs";
import Icon from "./shared/Icon";
import TempIcon from "./shared/TempIcon";
import { convertTemp, toFahrenheit } from "../helpers";


const CurrentWeather = (props) => {
    const foramtDate = (str) => {
        return str.slice(0,5);
    };
    
  return (
    <Card className="mb-0">
      <h4 className="current-weather__conditions">
        {props.weather.conditions} {foramtDate(props.weather.datetime)}
      </h4>
      <div className="current-weather__wrapper">
        <div className="current-weather__info">
          <div className="curremt-weather__basic">
            <p className="current-weather__temp">
              {props.tempUnit === 'C' && props.weather.temp} 
              {props.tempUnit === 'F' && toFahrenheit(props.weather.temp)} 
              <TempIcon unit={props.tempUnit} />
            </p>
            <p className="current-weather__address">{props.location}</p>
          </div>
          <div className="current-weather__img">
            <IconContext.Provider value={{ size: "6em" }}>
              <Icon icon={props.weather.icon} />
            </IconContext.Provider>
          </div>
          <div className="current-weather__details-wrapper">
            <div className="current-weather__details">
              <span>
                <BsThermometerHalf /> 
                {props.tempUnit === 'C' && props.weather.feelslike} 
              {props.tempUnit === 'F' && toFahrenheit(props.weather.feelslike)} 
                <TempIcon unit={props.tempUnit} />
              </span>
              <span>feels like</span>
            </div>
            <div className="current-weather__details">
              <span>
                <BsFillDropletFill /> {props.weather.humidity} %
              </span>
              <span>humidity</span>
            </div>
            <div className="current-weather__details">
              <span>
                <BsFillRecord2Fill /> {props.weather.pressure} hpa
              </span>
              <span>pressure</span>
            </div>
            <div className="current-weather__details">
              <span>
                <BsFillBrightnessAltHighFill /> {foramtDate(props.weather.sunrise)}
              </span>
              <span>sunrise</span>
            </div>
            <div className="current-weather__details">
              <span>
                <BsFillBrightnessAltLowFill />
                {foramtDate(props.weather.sunset)}
              </span>
              <span>sunset</span>
            </div>
            <div className="current-weather__details">
              <span>
                <BsWind /> {props.weather.windspeed} km/h
              </span>
              <span>wind speed</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default CurrentWeather;
