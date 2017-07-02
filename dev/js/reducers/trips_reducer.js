import {GET_TRIPS} from '../actions/index';

  const INITIAL_STATE = {all: [], trip:null};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case GET_TRIPS:
    debugger
      return {...state, all: action.payload.data} ;
    default:
      return state;
  }
}
