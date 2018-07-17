import { FETCH_WEATHER } from 'constants/actionTypes'

function weather(state = [], action) {
  const {
    payload,
    type
  } = action
  switch (type) {
    case FETCH_WEATHER.SUCCESS:
      return [payload, ...state]
    default:
      return state
  }
}

export default weather
