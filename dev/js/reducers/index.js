import {combineReducers} from 'redux';
import TripsReducer from './trips_reducer';
import {reducer as formReducer} from 'redux-form'
import flashMessages from './flashMessages';

const allReducers = combineReducers({
    Trips: TripsReducer,
    form: formReducer,
    flashMessages
});

export default allReducers
