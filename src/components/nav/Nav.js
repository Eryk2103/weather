import "./Nav.css";
import { BsBugFill } from "react-icons/bs";
import NavItems from "./NavItems";
import DropDownMenu from "../shared/DropDownMenu";
import Temperature from "../settings/Temperature.js";
const Nav = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar-ul">
        <NavItems>
          <DropDownMenu>
            <div className="dropdown-item">
              <Temperature/>
            </div>
            <div className="dropdown-item">
              <a>Pressure</a>
            </div>
          </DropDownMenu>
        </NavItems>
      </ul>
    </nav>
  );
};
export default Nav;
