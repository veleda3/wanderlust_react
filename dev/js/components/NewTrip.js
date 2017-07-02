import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {createTrip} from '../actions/index'

class NewTrip extends Component{
  render(){
    const {fields:{budget, origin, date, passengers}, handleSubmit} = this.props;
    return(
      <div>
        <h1> Create a new trip </h1>
        <form onSubmit={handleSubmit}>
          <div className ="form-group">
            <label> budget </label>
          <input type="text" className="form-control" {...budget} />
            <label> origin </label>
          <input type="text" className="form-control" {...origin} />
            <label> date </label>
          <input type="date" className="form-control" {...date} />
            <label> passengers </label>
          <input type="number" className="form-control" {...passengers} />
          </div>
          <button type="submit" className="btn btn-success">Create</button>
        </form>
      </div>
    )
  }

}

export default reduxForm({
 form: 'NewtripForm',
 fields: ['budget', 'origin', 'date', 'passengers', 'booked?', 'user_id']
},null, {createTrip})(NewTrip);
