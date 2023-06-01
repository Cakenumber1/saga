import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
} from './actionTypes'

export type IAuth = {
    token: string
}

export type IAuthState = {
    pending: boolean,
    token: string,
    error: string | null
}

export type ILoginPayload = {
    values: {email:string, password: string}
    callback: any
}

export type ILoginSuccessPayload = {
    token:string,
}

export type ILoginFailurePayload = {
    error:string,
}

export type ISignupPayload = {
    values: {email:string, password: string}
    callback: any
}

export type ISignupSuccessPayload = {
    token:string,
}

export type ISignupFailurePayload = {
    error:string,
}

export type ILoginRequest = {
    type: typeof LOGIN_REQUEST,
    payload: ILoginPayload
}

export type ILoginSuccess = {
    type: typeof LOGIN_SUCCESS,
    payload: ILoginSuccessPayload
}

export type ILoginFailure = {
    type: typeof LOGIN_FAILURE,
    payload: ILoginFailurePayload
}

export type ISignupRequest = {
    type: typeof SIGNUP_REQUEST,
    payload: ISignupPayload
}

export type ISignupSuccess = {
    type: typeof SIGNUP_SUCCESS,
    payload: ISignupSuccessPayload
}

export type ISignupFailure = {
    type: typeof SIGNUP_FAILURE,
    payload: ISignupFailurePayload
}

export type IAuthActions =
    ILoginRequest | ILoginSuccess | ILoginFailure |
    ISignupRequest | ISignupSuccess | ISignupFailure

