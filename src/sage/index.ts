import { delay, takeLatest } from 'redux-saga/effects'

function * helloSaga () {
  yield delay(1000)
  console.log('helloSaga')
}

export default function * rootSaga () {
  yield takeLatest('INCREMENT', helloSaga)
}
