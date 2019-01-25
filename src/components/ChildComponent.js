import React, { Component } from 'react';
import {READ} from '../actions/Readaction';
import ReadAction from '../actions/Readaction';

const aclick = { 
            products: [
                        {
                            'user':'abc'
                        }
                      ]
               }

class ChildComponent extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <div className="clickActions" onClick={() => ReadAction(aclick)} >Click to read</div>
            	<div onClick={this.loadUserPage}>Child component...</div>
                <div className="readList">{this.props.sendHTML}</div>
            </div>
        );
    }
}

export default ChildComponent;
