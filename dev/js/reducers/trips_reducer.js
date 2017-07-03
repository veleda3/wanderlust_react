import {GET_TRIPS} from '../actions/types';

const INITIAL_STATE = {all: [], trip: null};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case GET_TRIPS:
      return {...state, all: action.payload.data.trips};
    default:
      return state;
  }
}
