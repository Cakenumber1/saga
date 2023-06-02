import * as actions from "./actionTypes";
import AuthType from "./enum";

export function logout(): actions.LogoutAction {
    // todo: rm token from cookies
    console.log('rm token from cookies')
    return {
        type: actions.LOGOUT,
        token: ''
    };
}

export function getAuth(email: string, password: string, authType: AuthType): actions.GetAuthAction {
    return {
        type: actions.GET_AUTH,
        email,
        password,
        authType
    }
}

export function getAuthRequest(): actions.GetAuthRequestAction {
    return {
        type: actions.GET_AUTH_REQUEST
    };
}

export function getAuthSuccess(
    token: string
): actions.GetAuthSuccessAction {
    // todo: rm token from cookies
    console.log('add token from cookies')
    return {
        type: actions.GET_AUTH_SUCCESS,
        token
    };
}

export function getAuthFailure(
    error: Error | string
): actions.GetAuthFailureAction {
    return {
        type: actions.GET_AUTH_FAILURE,
        error
    };
}
