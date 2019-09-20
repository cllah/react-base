import React from 'react'
import { take, call, takeLatest, put, delay } from 'redux-saga/effects'
import useSaga from '@/components/customHooks/useSaga'
let i = 1
function * fakeFetch (url) {
  yield put({ type: 'SUCCEEDED' })
  return url + i++
};

function * dddd (setter) {
  yield delay(1000)
  yield call(setter, preState => {
    console.log(preState)
    return 'sss'
  })
}

const rootSaga = function * (setter) {
  yield takeLatest('SUCCEEDED', dddd, setter)
  while (true) {
    const { url } = yield take('INCREMENT')
    const result = yield call(fakeFetch, url)
    yield call(setter, result)
  }
}
export default function SampleFetch () {
  const [state, sagaDispatch] = useSaga(rootSaga, null)

  return (
    <>
      <button
        onClick={() =>
          sagaDispatch({
            type: 'INCREMENT',
            url: 'fake url'
          })
        }
      >
        perform fetch
      </button>
      <div>{state}</div>
    </>
  )
};
