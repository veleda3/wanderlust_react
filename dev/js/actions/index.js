import {GET_SEARCHFORTRIPS} from './types';
import axios from 'axios';

const API_URL = "http://localhost:5000/api";

export function getSearchForTrips() {
  const request = axios.get('${API_URL}/trips')

  return{
    type: GET_SEARCHFORTRIPS,
    payload: request
  };
}

