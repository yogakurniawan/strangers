import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import initStore from 'reduxStuff/initStore'
import App from 'containers/App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

const store = initStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
