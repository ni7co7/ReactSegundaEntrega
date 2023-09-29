import { useState } from "react";
import "./SearchBar.css";

function SearchBar({enSubmit}){


    const [ term , setTerm ] = useState("");

    function handleFormSubmit(e){
            e.preventDefault();
            enSubmit(term)
    }


    function handleChange(event){
        setTerm(event.target.value)
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label>search</label>
                <input value={term} onChange={handleChange}/>
            </form>          
        </div>
    )
}


export default SearchBar;