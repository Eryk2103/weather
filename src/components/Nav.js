import "./Nav.css";
import {BsBugFill} from 'react-icons/bs'
const Nav = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar-ul">
        {props.children}
      </ul>
    </nav>
  );
};
export default Nav;
