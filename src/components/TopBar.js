import React from 'react'
import SearchBar from './SearchBar'
import './TopBar.css'

function TopBar(props) {
    return (
        <div className="top-bar">
            <span></span>
            <SearchBar 
                onSearch={props.onSearch}
                onSearchInputChange={props.onSearchInputChange}
                searchInput={props.searchInput}
            />
        </div>
    )
}

export default TopBar;
