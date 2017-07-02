import {combineReducers} from 'redux';
import savedTripsReducer from './saved_trips_reducer';

const allReducers = combineReducers({
    Trips: savedTripsReducer
});

export default allReducers
