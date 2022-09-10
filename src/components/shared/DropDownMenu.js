import './DropDownMenu.css';
const DropDownMenu = (props) => {
    return(
        <div className="dropdownmenu">
            {props.children}
        </div>
    )
}
export default DropDownMenu;