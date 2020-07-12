import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './types/serviceWorker'
import { Provider } from 'react-redux'
import store from './store'
import { initialLoad } from './actions'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

initialLoad(store)

serviceWorker.unregister()
