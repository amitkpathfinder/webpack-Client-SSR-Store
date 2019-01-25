import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();

class TabComponent extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();

        console.log('constructor');
        this.myVar=null;
    }

 getInitialState = () => {
     const initialState = {
        loading:true,
        albums: [],
        count:60,
        refresh:true,
        refreshTime:60,
     };
     return initialState;
 }

 resetState = () => {
     this.setState(this.getInitialState());
  }

  getFetchData = () => {
        console.clear();
        this.myVar = setInterval(this.settingSetInterval, 10000);
        this.myvarTimer = setInterval(this.chnageRefreshTime, 1000);
        setTimeout(this.myStopFunction, 60000);
    }

chnageRefreshTime = () => {
    this.setState({refreshTime:this.state.refreshTime-1});
}

  settingSetInterval = () => {
    console.log('started...');
    this.setState({refresh:false});
    this.setState({count:this.state.count-10});
    console.log('Count is running',this.state.count);
    this.loadData();
    }

    myStopFunction = () => {
      clearInterval(this.myVar);
      clearInterval(this.myvarTimer);
      this.setState({count:this.state.count-10});
      this.resetState();
      console.log(this.state.albums,this.state.loading,this.state.count);
      console.log('stopped...');
    }

  componentDidMount() {
    console.log('componentDidMount'); 
    //this.loadData(); 
  }

  componentWillMount() {
    console.log('componentWillMount'); 
    this.loadData();
  }

  loadData = () => {
    //console.log('load');
    //console.log('album---1',this.state.albums);
    //console.log('loading---1',this.state.loading);
    console.log('setting loading');
    this.setState({loading:true});

    fetch('http://localhost/api/product/read.php')
            .then((response) => {
                let data = response.json();
                return data;
            })
            .then((data) => {
                //console.log(data.records);
                this.setState({
                    albums: data.records,
                    loading:false
                });
                //console.log('loading---2',this.state.loading);
                console.log('Setting State-------',this.state.albums);
            })
            .catch((err) => {
                console.log(err);
            });

  }

    render() {

        const refresh = this.state.refresh===true?<button onClick={this.getFetchData} disabled={false}>Refresh {this.state.refreshTime}</button>:<button disabled={true}>Refresh {this.state.refreshTime}</button>
        console.log('render', this.state.loading);
        var a = '';
        if(this.state.loading===false){
                a = this.state.albums.map((item,contentIndex) => {
                            return (<div key={contentIndex}>
                                <div className="helloBox">[hello {item.id}]&nbsp;</div>
                                <div className="nameBox">{item.name}</div> 
                            </div>)
                        });
        }
        else{
                a = <div>Loading...</div>;
        }

        return (
            <div>
                {refresh}
                <ChildComponent sendHTML={a} />
            	{this.props.userAgent}...Tabs...
                <div onClick={this.loadData}>Fetch Data</div>
                <div className="readList">{a}</div>
            </div>
        );
    }
}

export default TabComponent;
