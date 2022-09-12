import { useState } from "react";
import { RiCelsiusFill } from "react-icons/ri";
import "./DayWeather.css";
import HourWeather from "./HourWeather";
import DateCard from "./shared/DateCard";
import Icon from "./shared/Icon";
import TempIcon from "./shared/TempIcon";
import { toFahrenheit } from "../helpers";
const DayWeather = (props) => {
  const [open, setOpen] = useState(false);
  function displayHours() {
    setOpen(!open);
    console.log(open);
  }
  return (
    <li>
      <article className="day-card" onClick={() => displayHours()}>
        <DateCard
          className="day-card__date center"
          date={props.date.datetime}
        />
        <Icon style="icon-list center" icon={props.date.icon} />
        <p className="day-card__temp center">
          {props.tempUnit === "C" && props.date.tempmin}
          {props.tempUnit === "F" && toFahrenheit(props.date.tempmin)}
          <TempIcon unit={props.tempUnit} /> /{" "}
          {props.tempUnit === "C" && props.date.tempmax}
          {props.tempUnit === "F" && toFahrenheit(props.date.tempmax)}
          <TempIcon unit={props.tempUnit} />
        </p>
      </article>
      {open &&
        props.date.hours.map((hour, index) => (
          <HourWeather key={index} hour={hour} tempUnit={props.tempUnit} />
        ))}
    </li>
  );
};
export default DayWeather;
