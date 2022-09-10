import { BsFillCloudSnowFill, BsFillCloudDrizzleFill,BsFillCloudMoonFill, BsFillCloudSunFill, BsFillCloudsFill, BsFillCloudFogFill, BsWind, BsSunFill, BsMoonFill } from "react-icons/bs";

const Icon = (props) => {
  return(
    <div className={props.style} >
        {props.icon === "snow" && <BsFillCloudSnowFill />}
        {props.icon === "rain" && <BsFillCloudDrizzleFill />}
        {props.icon === "fog" && <BsFillCloudFogFill />}
        {props.icon === "wind" && <BsWind />}
        {props.icon === "cloudy" && <BsFillCloudsFill />}
        {props.icon === "partly-cloudy-day" && <BsFillCloudSunFill />}
        {props.icon === "partly-cloudy-night" && <BsFillCloudMoonFill />}
        {props.icon === "clear-day" && <BsSunFill />}
        {props.icon === "clear-night" && <BsMoonFill />}
    </div>
    );
};
export default Icon;
