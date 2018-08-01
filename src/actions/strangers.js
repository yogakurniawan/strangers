import axios from 'axios'
import { makeActionCreator } from 'utils/common'
import constants, { FETCH_STRANGERS } from 'constants/actionTypes'

export const setEmpty = makeActionCreator(constants.SET_EMPTY)
// export const setTimeLeft = makeActionCreator(constants.SET_TIME_LEFT, 'payload')


export function fetchStrangers() {
  const targetUrl = 'https://reqres.in/api/users?per_page=30'
  const request = axios.get(targetUrl)

  return {
    type: FETCH_STRANGERS,
    promise: request.then(response => response.data)
  }
}