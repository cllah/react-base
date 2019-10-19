import React from 'react'
import ReactDOM from 'react-dom'
import { StoreContext } from 'redux-react-hook'
import { createStore, applyMiddleware } from 'redux'
import reducers from './redux/reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sage'
import Router from '@router/router'
import './app.scss'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Router/>
  </StoreContext.Provider>,
  document.getElementById('app')
)
