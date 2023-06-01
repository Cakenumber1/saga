import {all, call, put, takeLatest} from 'redux-saga/effects'

import {
    loginSuccess,
    loginFailure,
    signupSuccess,
    signupFailure
} from "./actions";

import {LOGIN_REQUEST, SIGNUP_REQUEST} from "./actionTypes";

import {login, signup} from "./api";

function* loginSaga(action: any) {
    try {
        const response:{token:string} = yield call(login, {
            email: action.payload.values.email,
            password: action.payload.values.password,
        })

        yield put(
            loginSuccess({
                token: response.token
            })
        )

        action.payload.callback(response.token)
    } catch (e: any) {
        yield put (
            loginFailure({
                error: e.error
            })
        )
    }
}

function* signupSaga(action: any) {
    try {
        const response:{token:string} = yield call(signup, {
            email: action.payload.values.email,
            password: action.payload.values.password,
        })

        yield put(
            signupSuccess({
                token: response.token
            })
        )

        action.payload.callback(response.token)
    } catch (e: any) {
        yield put (
            signupFailure({
                error: e.error
            })
        )
    }
}

function* authSaga(){
    yield all([takeLatest(LOGIN_REQUEST, loginSaga)])
    yield all([takeLatest(SIGNUP_REQUEST, signupSaga)])
}

export default authSaga
