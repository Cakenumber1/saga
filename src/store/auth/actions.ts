import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
} from './actionTypes'

import {
    ILoginPayload,
    ILoginRequest,
    ILoginFailure,
    ILoginFailurePayload,
    ILoginSuccess,
    ILoginSuccessPayload,
    ISignupPayload,
    ISignupRequest,
    ISignupFailure,
    ISignupFailurePayload,
    ISignupSuccess,
    ISignupSuccessPayload,
} from './types'

export const loginRequest = (payload: ILoginPayload) : ILoginRequest => ({
    type: LOGIN_REQUEST,
    payload,
})

export const loginSuccess = (payload: ILoginSuccessPayload) : ILoginSuccess => ({
    type: LOGIN_SUCCESS,
    payload,
})

export const loginFailure = (payload: ILoginFailurePayload) : ILoginFailure => ({
    type: LOGIN_FAILURE,
    payload,
})

export const signupRequest = (payload: ISignupPayload) : ISignupRequest => ({
    type: SIGNUP_REQUEST,
    payload,
})

export const signupSuccess = (payload: ISignupSuccessPayload) : ISignupSuccess => ({
    type: SIGNUP_SUCCESS,
    payload,
})

export const signupFailure = (payload: ISignupFailurePayload) : ISignupFailure => ({
    type: SIGNUP_FAILURE,
    payload,
})
