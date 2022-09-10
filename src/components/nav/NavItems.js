import { useState } from "react";
import './NavItems.css';
import {BsFillGearFill} from 'react-icons/bs';

const NavItems = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <li className="nav-item">
          <a onClick={() => setIsOpen(!isOpen)} className="icon"><BsFillGearFill/></a>
            {isOpen && props.children}
        </li>
    );
}
export default NavItems;