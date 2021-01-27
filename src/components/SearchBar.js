import React, { Component } from 'react'
import './SearchBar.css'

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchInput: ""
        }
    }

    onKeyUp = e => {
        if (e.keyCode === 13) {
            this.onSearch(this.state.searchInput)
        }
    }

    onSearchInputChange = e => {
        this.setState({
            searchInput: e.target.value
        })
    }

    onSearch = e => {
        this.props.onSearch(this.state.searchInput)
        this.setState({
            searchInput: ""
        })
    }


    render() {
        return (
            <div 
                className="search-bar"
                onKeyUp={this.onKeyUp}
            >
                <input 
                    className="search-input" 
                    type="text"
                    name="search-input"
                    value={this.state.searchInput}
                    onChange={this.onSearchInputChange}
                />
                <img 
                    className="search-icon" 
                    src="search-24px.svg" 
                    onClick={this.onSearch} 
                    alt="">
                </img>
            </div>
        )
    }
}

export default SearchBar;
