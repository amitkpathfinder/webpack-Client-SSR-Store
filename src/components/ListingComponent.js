import React, { Component }                 from "react";

import ChildComponent       from "./ChildComponent";
import Listing              from "./Listing";
import { connect }                          from "react-redux";
import {FetchListings, FetchCategory} from './services';
import {ReadAction} from '../actions/Readaction';

var render=0;

class ListingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
    console.log("constructor");
    this.myVar = null;
  }

  getInitialState = () => {
    const initialState = {
      albums: [],
      count: 60,
      refresh: true,
      refreshTime: 60
    };
    return initialState;
  };

  resetState = () => {
    this.setState(this.getInitialState());
  };

  getFetchData = () => {
    console.clear();
    this.myVar = setInterval(this.settingSetInterval, 10000);
    this.myvarTimer = setInterval(this.chnageRefreshTime, 1000);
    setTimeout(this.myStopFunction, 60000);
  };

  chnageRefreshTime = () => {
    this.setState({ refresh: false });
    this.setState({ refreshTime: this.state.refreshTime - 1 });
  };

  settingSetInterval = () => {
    console.log("=====>started...");
    this.setState({ count: this.state.count - 10 });
    console.log("=====>Count is running", this.state.count);
    this.props.ReadB();
  };

  myStopFunction = () => {
    clearInterval(this.myVar);
    clearInterval(this.myvarTimer);
    this.setState({ count: this.state.count - 10 });
    this.resetState();
    console.log(this.state.albums, this.state.loading, this.state.count);
    console.log("=====>stopped...");
  };

  componentDidMount() {
    console.log("%c =====>componentDidMount", 'background:#222;color:#bada55');
    this.props.ReadA();
  }

  componentDidUpdate() {
    console.log("%c =====>componentDidUpdate", 'background:#222;color:#bada55');
  }

  render() {
    render++;
    console.log('%c =====Rendering Count=====>', 'background:#16a085;color:#fff', render);
    console.log('=====>parent component',this.props.products);
    const refresh =
      this.state.refresh === true ? (
        <button onClick={this.getFetchData} disabled={false}>
          Refresh {this.state.refreshTime}
        </button>
      ) : (
        <button disabled={true}>Refresh {this.state.refreshTime}</button>
      );

    return (
      <div>
        {refresh}
        
          <ChildComponent />
        
        {this.props.userAgent}...Tabs...
        <div onClick={() => this.props.ReadB()}>Fetch Data</div>
        {
          (this.props.products.length > 0) &&
            <div className="readList">
              <div><b>Parent Elements</b></div>
              {
                  this.props.products.map(el => (<div key={el.id}>Parent---{el.name}</div>))
              }     
            </div>
        }
        {
          (this.props.products.length <= 0) &&
              <div>Loading...</div>
            
        }
        
        <div>
          <span><b>See my Listings...</b></span>
          <br />
          
            <Listing />
          
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


const mapDispatchToProps = (dispatch) => {
    return {
        ReadA: () => {
            FetchCategory()
                .then(data => {
                    console.log('Listings:', data.records);
                    dispatch(ReadAction(data.records));
                });
        },
        ReadB: () => {
            FetchListings()
                .then(data => {
                    console.log('Listings:', data.records);
                    dispatch(ReadAction(data.records));
                });
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListingComponent);
