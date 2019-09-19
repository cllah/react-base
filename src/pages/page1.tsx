import React from "react";
import { take, call,takeLatest,put } from "redux-saga/effects";
import useSaga from "@/components/customHooks/useSaga";

function* fakeFetch(url) {
  yield new Promise(resolve=>setTimeout(resolve,3000))
  yield put({type: "SUCCEEDED"});
  return url;
};

const dddd = async () => {
  await new Promise(resolve=>setTimeout(resolve,300))
  console.log('dddd')
};

const rootSaga = function*(setter) {
  let i = 1;
  while (true) {
    yield takeLatest("SUCCEEDED",dddd);
    const { url } = yield take("INCREMENT");
    const result = yield call(fakeFetch, url);
    yield call(setter, result);
  }
};

export default function SampleFetch() {
  const [state, sagaDispatch] = useSaga(rootSaga, null);

  return (
    <>
      <button
        onClick={() =>
          sagaDispatch({
            type: "INCREMENT",
            url: "fake url"
          })
        }
      >
        perform fetch
      </button>
      <div>{state}</div>
    </>
  );
};
