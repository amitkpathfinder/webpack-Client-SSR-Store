import React from 'react';
import RoutingConfig from './RoutingConfig';

class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    
    return <div>
		    <div className="mr50">HHHHHHHHHHH</div>
		    <RoutingConfig userAgent={this.props.userAgent} />
		  </div>

  }
}

export default App;
