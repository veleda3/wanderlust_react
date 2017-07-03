import {GET_TRIPS, GET_TRIP, CREATE_TRIP} from './types';
import axios from 'axios';

const API_URL = "http://localhost:5000/api";

export function getSearchForTrips() {
  const request = axios.get(`${API_URL}/trips`)

  return{
    type: GET_TRIPS,
    payload: request
  };
}

export function createTrip(props) {
 de
  const request = axios.post(`${API_URL}/trips`, props)

  return{
    type: CREATE_TRIP,
    payload: request
  };
}

