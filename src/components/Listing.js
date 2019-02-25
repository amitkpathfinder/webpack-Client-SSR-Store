import React, { Component } from 'react';
import { connect }                          from "react-redux";

class Listing extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        let ListingData = 'Hello';
        return (  
            <div>
                {
                    this.props.products.map(el => (<div key={el.id}>Child---{el.name}</div>))
                }
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
  )(Listing);