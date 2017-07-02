import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSearchForTrips} from '../actions/index';



class SearchForTripHome extends Component{
  componentWillMount(){
    this.props.getSearchForTrips()
  }

  render(){
    return(
      <div className="container">
        serch for trip home page
      </div>
      )
  }
}

export default connect(null,  {getSearchForTrips: getSearchForTrips})(SearchForTripHome)
