import React, { Component } 		from 'react';

import Header 						from '../Common/Header';
import Footer 						from '../Common/Footer';
import Banner 						from '../Common/Banner';
import SearchLauncher 				from '../Common/SearchLauncher';

import { connect }                          from "react-redux";
import {FetchListings, FetchCategory} from '../services';
import {fetchSrps} from '../../actions/Readaction';


class HomePage extends Component {
  
  static loadData() {
    return fetchSrps();
  }

  constructor(props) {
        super(props);
  }

  componentDidMount() {
    console.log("%c =====>componentDidMount", 'background:#222;color:#bada55');
    if(!this.props.products)
      HomePage.fetchSrps();
  }

    render() {
        return (
           <div className="homePageContainer">
           		
              <div>
                {
                    this.props.products.map(el => (<div key={el.id}>Child---{el.name}</div>))
                }
              </div>
           		
           </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(
    mapStateToProps
  )(HomePage);
