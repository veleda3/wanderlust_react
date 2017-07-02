import React, {Component} from 'react';

require('../../scss/style.scss');

class App extends Component{
  render(){
    return(
    <div>
        <h2>User List</h2>
        Navbar
        <hr />
        <h2>User Details</h2>
        {this.props.children}

    </div>
      )
  }
}

export default App;
