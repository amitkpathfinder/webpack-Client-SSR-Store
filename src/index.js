// ReactApp/src/js/index.js this is our main file
import React from 'react';
import ReactDOM from 'react-dom';
import TabComponent from './components/CompTabs';
import useragent from './ua';

ReactDOM.hydrate(
	<TabComponent userAgent={useragent} />, 
	document.getElementById('app')
);