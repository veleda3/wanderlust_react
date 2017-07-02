import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSearchForTrips} from '../actions/index';
import {Link} from 'react-router';



class SearchForTripHome extends Component{
  componentWillMount(){
    this.props.getSearchForTrips()
  }

  render(){
    return(
      <div className="container">
        <div>
          <Link to='trips/new' className="btn btn-warning">
          Create trip
          </Link>
        </div>
      </div>
      )
  }
}

export default connect(null,  {getSearchForTrips: getSearchForTrips})(SearchForTripHome)
