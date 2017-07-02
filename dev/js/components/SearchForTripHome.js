import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSearchForTrips} from '../actions/index';
import {Link} from 'react-router';



class SearchForTripHome extends Component{
  componentWillMount(){
    this.props.getSearchForTrips()
  }

  // renderTrips(){

  //   return this.props.trips.map((trip) => {
  //     return (
  //       <li key={trip.id}>
  //         <h4> {trip.budget} </h4>
  //       </li>
  //     )
  //   })
  // }
  render(){
    return(
      <div className="container">
        <div>
          <Link to='trips/new' className="btn btn-warning">
          Create trip
          </Link>
        </div>
        <ul>

        </ul>
      </div>
      )
  }
}

function mapStateToProps(state){
  return { trips: state.trips.all }
}

export default connect(null,  {getSearchForTrips: getSearchForTrips})(SearchForTripHome)
