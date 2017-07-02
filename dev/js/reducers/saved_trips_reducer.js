import {GET_SEARCHFORTRIPS} from '../actions/index'

  const INITIAL_STATE = {all: [], trip:null};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case GET_SEARCHFORTRIPS:
      return {...state, all: action.payload.data};
    default:
      return state;
  }
}
