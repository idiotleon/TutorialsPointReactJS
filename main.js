// The store is a place that holds the app's state.
// It is very easy to create a store once you have reducers
import React from 'react'

import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App.jsx'
import toDoApp from './reducers/reducers'

let store = createStore(toDoApp)
let rootElement = document.getElementById('app')

render(
    <Provider store = {store}>
        <App />
    </Provider>,

    rootElement
)