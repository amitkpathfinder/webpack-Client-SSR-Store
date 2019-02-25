import React, { Component } 		from 'react';

import Header 						from '../Common/Header';
import Footer 						from '../Common/Footer';
import Banner 						from '../Common/Banner';
import SearchLauncher 				from '../Common/SearchLauncher';

class SearchResults extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
           <div className="SearchResultsContainer">
           		<Header />
           		<Banner />
           		<SearchLauncher />
           		<Footer />
           </div>
        );
    }
}

export default SearchResults;
