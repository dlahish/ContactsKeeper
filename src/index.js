import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import App from './App'
import { Provider } from 'react-redux'

function reducerEx(state = {}, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    default:
      return state
  }
}

let store = createStore(reducerEx)

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app')
)
