import {all, call, fork, put, takeLatest} from 'redux-saga/effects'

import {auth} from "./api";
import * as actionCreators from "./actionCreators";
import * as actionTypes from "./actionTypes";

function* onAuthSaga({ email, password, authType }: actionTypes.GetAuthAction) {
    try {
        yield put(actionCreators.getAuthRequest());
        const { token } = yield call(auth, email, password, authType);
        yield put(actionCreators.getAuthSuccess(token));
    } catch (error: any) {
        yield put(actionCreators.getAuthFailure(error.response.data.error));
    }
}

function* watchAuth() {
    yield takeLatest(actionTypes.GET_AUTH, onAuthSaga)
}

export default function* authSaga(){
    yield all([
        fork(watchAuth),
    ])
}
