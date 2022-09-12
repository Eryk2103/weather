import './DateCard.css';

const DateCard = (props) => {
    //format: "yyyy-mm-dd"
    const date = new Date(props.date)
    return(
        <div className="date-card">
            <p>{date.toLocaleDateString("en-US", {weekday: 'short'})}</p>
            <p>{date.getDate()}.{date.getMonth()+1}</p>
        </div>
    );
}
export default DateCard;