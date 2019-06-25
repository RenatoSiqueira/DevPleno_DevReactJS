import React from 'react'
import Counter from './Counter'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import counterReducer from './reducer'
import DisplayCounter from './DisplayCounter'

import Ola from './Ola'

let store = createStore(counterReducer, applyMiddleware(logger))

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Counter />
          <DisplayCounter />
          <Ola nome='Renato' />
        </header>
      </div>
    </Provider>
  )
}

export default App
