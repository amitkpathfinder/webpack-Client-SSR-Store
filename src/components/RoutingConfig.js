import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Routes from './Routes';


class RoutingConfig extends React.Component {
	constructor(props) {
    super(props);
  }

  render() {
    const routeComponents = Routes.map(({path, component: Component}, key) => 
      	  				<Route exact {...this.props} path={path} 
      	  				render={props => (<Component {...this.props}/>)} key={key} />);

    return (
    <Switch>
      {routeComponents}
    </Switch>
    );
  }
}

export default RoutingConfig;