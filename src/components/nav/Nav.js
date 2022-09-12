import "./Nav.css";
import { BsBugFill } from "react-icons/bs";
import NavItems from "./NavItems";
import DropDownMenu from "../shared/DropDownMenu";
import Temperature from "../settings/Temperature.js";


const Nav = (props) => {
  const settingsChange = (value) => {
    props.onSettingsChange(value);
  };
  return (
    <nav className="navbar">
      <ul className="navbar-ul">
        <li>Weather app</li>
        <NavItems >
          <DropDownMenu>
            <div className="dropdown-item">
              <Temperature onTempUnitChange={settingsChange}/>
            </div>
          </DropDownMenu>
        </NavItems>
      </ul>
    </nav>
  );
};
export default Nav;
