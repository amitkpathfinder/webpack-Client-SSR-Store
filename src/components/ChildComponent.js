import React, { Component }                 from 'react';
import { connect }                          from "react-redux";
import {FetchListings, FetchCategory} from './services';
import {ReadAction} from '../actions/Readaction';
import {formObj, viewObj} from './stateObjects';

var render=0;

class ChildComponent extends Component {
    constructor(props) {
        super(props);
        this.state ={Flag:''}
    }

    render() {
        render++;
        console.log('%c =====Child Component Rendering Count %c'+render, 'background:#2ee867;color:#000', 'background:#0065de;color:#fff');
        console.log('%c =====Child Component State=====Render:%c'+render+'=====>', 'background:#2ee867;color:#000', 'background:#0065de;color:#fff', this.props.products);
        
        return (
            <div>
                {
                    (this.state.Flag) &&
                    <div>
                        Hello Flag { 
                                        (this.state.Flag) &&
                                        <div>Red</div>
                                    } 
                    </div>
                }
                <div className="clickActions" onClick={() => this.props.ReadB()} >Click to read</div>
                <div className="readList">{this.props.sendHTML}</div>
                <div><b>Check the SSR View:</b></div>
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
  )(ChildComponent);