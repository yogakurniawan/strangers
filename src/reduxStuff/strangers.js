import constants, {
  FETCH_STRANGERS
} from 'constants/actionTypes'

function strangers(state = {
  list: []
}, action) {
  const {
    payload,
    type
  } = action
  switch (type) {
    case FETCH_STRANGERS.SUCCESS:
      return {
        ...state,
        list: payload.data
      }
    case constants.SET_EMPTY:
      return {
        ...state,
        list: []
      }
    default:
      return state
  }
}

export default strangers
