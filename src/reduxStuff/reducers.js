import { combineReducers } from 'redux'

import strangers from './strangers'
import loading from './loadingReducer'
import error from './errorReducer'

export default combineReducers({
  strangers,
  loading,
  error
})
