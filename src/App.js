import Nav from "./components/nav/Nav";
import "./App.css";
import Search from "./components/Search";
import { useEffect, useState } from "react";
import myData from "./api.json";
import CurrentWeather from "./components/CurrentWeather";
import DayWeather from "./components/DayWeather";
import { convertTemp } from "./helpers";

function App() {
  //const [isLoading, SetLoading] = useState(true);
  //const [data, setData] = useState([]);
  const [tempUnit, setTempUnit] = useState('C');
  const [currentConditions, setCurrentConditions] = useState(myData.currentConditions);

  const search = (value) => {
    const searchStr = value;
  };
  /*
  useEffect(() => {
    fetch( 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Warsaw?unitGroup=metric&key=2APHZRXYVEQHY4XV7FRGMPV4X&contentType=json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(res => {
      return res.json();
    }).then(data => {
      SetLoading(false);
      setData(data);
    });
  }, [])
    
  if(isLoading)
  {
    return(
      <em>Loading...</em>
    );
  }
  */
  const { address } = myData;

  const tempChange = (value) => {
    
    if(value === 'C') {
      setTempUnit('C');
    }
    else {
      setTempUnit('F');
    }
  };
    
  return (
    <div className="container-app">
      <header className="header-app">
        <Nav onSettingsChange={tempChange}></Nav>
      </header>
      <main>
        <div className="main-current-weather">
          <Search onSubmitSearch={search} />
          <div className="current-weather">
          <CurrentWeather 
            weather={currentConditions}
            location={address}
            tempUnit={tempUnit}
          ></CurrentWeather>
          </div>
          
        </div>
        <div className="main-current-days">
            <ul>
              {myData.days.map((day, index) => (
                <DayWeather date={day} key={index} tempUnit={tempUnit}/>
              ))}
            </ul>
          </div>
      </main>
    </div>
  );
}

export default App;
