import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSearchForTrips} from '../actions/index';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';


class SearchForTripHome extends Component{
  componentWillMount(){
    this.props.getSearchForTrips()
  }

  renderTrips(){
    return this.props.trips.map((trip) => {
      return (
        <li key={trip.id}>
          <h4> {trip.budget} </h4>
        </li>
      )
    })
  }
  render(){
    return(
      <div className="container">
        <div>
          <Link to='trips/new' className="btn btn-warning">
          Create trip
          </Link>
        </div>
        <ul>
          {this.renderTrips()}
        </ul>
      </div>
      )
  }
}

function mapStateToProps(state){
  return { trips: state.Trips.all }
}

// export default connect(null, {getSearchForTrips: getSearchForTrips})(SearchForTripHome)

function matchDispatchToProps(dispatch){
    return bindActionCreators({getSearchForTrips: getSearchForTrips}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(SearchForTripHome);
