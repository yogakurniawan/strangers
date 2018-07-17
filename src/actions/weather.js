import axios from 'axios';
// import { makeActionCreator } from 'utils/common'
import { FETCH_WEATHER } from 'constants/actionTypes'

// export const setRunning = makeActionCreator(constants.SET_RUNNING, 'payload')
// export const setTimeLeft = makeActionCreator(constants.SET_TIME_LEFT, 'payload')

const API_KEY = '3031b53c0926c1b063c3593789cf9867';

export function fetchWeather(city) {
  const targetUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}&units=metric`;
  const request = axios.get(targetUrl);

  return {
    type: FETCH_WEATHER,
    promise: request.then(response => response.data)
  }
}