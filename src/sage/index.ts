import { delay, takeLatest, cancelled, all, fork } from 'redux-saga/effects'
import axios from 'axios'
import Qs from 'qs'

function * helloSaga () {
  let cancel;
  try{
    const CancelToken = axios.CancelToken;

    let response = yield  axios.request({
                    url: 'https://apip.xlndl.com',
                    cancelToken: new CancelToken(function executor(c) {
                      cancel = c;
                    }),
                    method: 'POST',
                    transformRequest: [function(data){        
                      return Qs.stringify(data)
                    }],
                    data: {
                      routing: 'events.stepReward.getInfo',
                      languageType: 'cn',
                      token: '884d01b97fe6718060a97684e0a27a1d1568873354',
                      data:{
                        accountId: 6,
                        activityId: 4
                      }
                    }
                  })
                  .then(function(response) {
                    return response
                  })
                  .catch(err=>{
                    console.log(23231,err)
                    return err
                  })
    console.log(response)
  }finally{
    if (yield cancelled()){
      cancel();
    }
  }
}

function* root() {
  // yield all([takeLatest('INCREMENT', helloSaga)]);
}

export default function * rootSaga () {
  yield all([fork(root)])
}