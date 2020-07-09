import React from 'react'
import './search-bar.css'

function SearchBar(props) {
    return (
        <>
        <input type="textarea" 
                value={props.userInput} 
                placeholder={props.searchPlaceHolder} 
                onChange={props.handleChange}
                className="search"
        />
        </>
    )
}

export default SearchBar