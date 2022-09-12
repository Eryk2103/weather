import { RiCelsiusFill, RiFahrenheitFill } from "react-icons/ri";

const TempIcon = (props) => {
   
        if(props.unit === 'C') {
            return <RiCelsiusFill/>
        } 
        else {
            return <RiFahrenheitFill/>
        }
        
};
export default TempIcon;