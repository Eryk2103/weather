import { useState } from "react";

const NavItem = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <li className="nav-item">
          <button onClick={() => setIsOpen(!isOpen)}className="icon">Settings</button>
            {isOpen && props.children}
        </li>
    );
}
export default NavItem;