
import Nav from "./components/Nav";
import "./App.css";
import Search from "./components/Search";
import { useEffect, useState } from "react";
import myData from "./api.json";
import CurrentWeather from "./components/CurrentWeather";
import NavItem from "./components/NavItem";
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
    <main>
      <Nav>
        <NavItem><p>Hi</p></NavItem>
        </Nav>
      <div className="app">
        <Search />
        <CurrentWeather
          weather={currentConditions}
          location={address}
        ></CurrentWeather>
        
      </div>
    </main>
  );
}

export default App;
