import Nav from "./components/nav/Nav";
import "./App.css";
import Search from "./components/Search";
import { useEffect, useState } from "react";
import myData from "./api.json";
import CurrentWeather from "./components/CurrentWeather";
import DayWeather from "./components/DayWeather";

function App() {
  //const [isLoading, SetLoading] = useState(true);
  //const [data, setData] = useState([]);

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
  const currentConditions = myData.currentConditions;
  const { address } = myData;

  console.log(myData);

  return (
    <div className="container-app">
      <header className="header-app">
        <Nav></Nav>
      </header>
      <main>
        <div className="main-current-weather">
          <Search />
          <div className="current-weather">
          <CurrentWeather 
            weather={currentConditions}
            location={address}
          ></CurrentWeather>
          </div>
          
        </div>
        <div className="main-current-days">
            <ul>
              {myData.days.map((day) => (
                <DayWeather date={day} />
              ))}
            </ul>
          </div>
      </main>
    </div>
  );
}

export default App;
