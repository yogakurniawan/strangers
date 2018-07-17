import { combineReducers } from 'redux'

import weather from './weather'
import loading from './loadingReducer'
import error from './errorReducer'

export default combineReducers({
  weather,
  loading,
  error
})
