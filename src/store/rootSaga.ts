import { all, fork } from 'redux-saga/effects';

import authSaga from './auth/saga';
import lyricsSaga from './lyrics/saga';

function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(lyricsSaga),
  ]);
}

export default rootSaga;
