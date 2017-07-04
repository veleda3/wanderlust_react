import axios from 'axios';

const API_URL = "http://localhost:5000/api";

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post(`${API_URL}/users`, userData);
  }
}

export function isUserExists(identifier) {
  return dispatch => {
    return axios.get(`${API_URL}/users/${identifier}`)
  }
}
