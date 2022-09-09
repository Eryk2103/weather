import './WeatherDetail.css';
const WeatherDetail = (props) => {
    return (
      <div className="weather-details">
        <div className="weather-details__item">{props.datetime}</div>
        <img className="weather-details__item" src={"/icons/"+props.icon+".png"}  alt=''/>
        <div className="weather-details__item">{props.temp}</div>
      </div>
    );
}
export default WeatherDetail;