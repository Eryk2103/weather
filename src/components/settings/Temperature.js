import "./Temperature.css";

const Temperature = (props) => {
  const tempUnitChange = (event) => {
    props.onTempUnitChange(event.target.value)
  };
  return (
    <div>
      <p>Temperature</p>
      <div className="form-group">
        <input id="celsius" type="radio" name="tempUnit" value="C" onChange={tempUnitChange} defaultChecked></input>
        <label htmlFor="celsius">Celsius</label>
      </div>
      <div className="form-group">
        <input id="fahrenheit" type="radio" name="tempUnit" value="F" onChange={tempUnitChange}></input>
        <label htmlFor="fahrenheit">Fahrenheit</label>
      </div>
    </div>
  );
};
export default Temperature;
