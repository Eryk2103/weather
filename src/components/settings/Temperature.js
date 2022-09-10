import "./Temperature.css";

const Temperature = () => {
  return (
    <div>
      <p>Temperature</p>
      <div className="form-group">
        <input id="celsius" type="radio"></input>
        <label htmlFor="celsius">Celsius</label>
      </div>
      <div className="form-group">
        <input id="fahrenheit" type="radio"></input>
        <label htmlFor="fahrenheit">Fahrenheit</label>
      </div>
    </div>
  );
};
export default Temperature;
