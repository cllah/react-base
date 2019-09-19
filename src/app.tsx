import React from 'react'
import ReactDOM from 'react-dom'
import Home from '@/pages/home'
import Page from '@/pages/page'
import Page1 from '@/pages/page1'
import { StoreContext } from 'redux-react-hook'
import { createStore, applyMiddleware } from 'redux'
import reducers from './redux/reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sage'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Home/>
    <Page/>
    <Page1/>
  </StoreContext.Provider>,
  document.getElementById('app')
)
