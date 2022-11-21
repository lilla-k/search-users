import React from 'react';
import './Search.css';

const Search = (props) => {

    return(
        <div className="Search-div">
             <input
                placeholder="Search"
                onKeyUp={(event)=>props.onSearch(event.target.value)}
            />
        </div>
       
    );
}

export default Search;