import React, {Component} from 'react';
import NavigationBar from './navigationBar';
import FlashMessagesList from './flash/FlashMessagesList';

require('../../scss/style.scss');

class App extends Component{
  render(){

    return(
    <div>
        <div className="container">
        <NavigationBar />
        <FlashMessagesList />
        </div>
        <hr />
        <h2>trip it</h2>
        {this.props.children}
    </div>
      )
  }
}

export default App;
