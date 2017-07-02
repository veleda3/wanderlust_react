import {combineReducers} from 'redux';
import TripsReducer from './trips_reducer';
import {reducer as formReducer} from 'redux-form'

const allReducers = combineReducers({
    Trips: TripsReducer,
    form: formReducer
});

export default allReducers
