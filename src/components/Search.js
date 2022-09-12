import './Search.css';
const Search = (props) => {
    const searchHandler = (event) => {
        if(event.key === "Enter")
        {
            props.onSubmitSearch(event.target.value);
        }
        
    };
    return(
        <div className='search-wrapper'>
            <input onKeyDown={searchHandler} type="text" placeholder="Search..."/>
        </div>
    );
};
export default Search;