import React, { Component } from 'react';

class SearchLauncher extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a href="/SearchPage">
            	<input type="text" placeholder="Enter Your Search..." />
            </a>
        );
    }
}

export default SearchLauncher;
