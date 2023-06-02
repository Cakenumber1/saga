import AuthType from './enum';

export const LOGOUT = 'authActionTypes/LOGOUT';

export interface LogoutAction {
  type: typeof LOGOUT;
  token: '';
}

export const GET_AUTH = 'authActionTypes/GET_AUTH';

export interface GetAuthAction {
  type: typeof GET_AUTH;
  email: string;
  password: string;
  authType: AuthType
}

export const GET_AUTH_REQUEST = 'authActionTypes/GET_AUTH_REQUEST';

export interface GetAuthRequestAction {
  type: typeof GET_AUTH_REQUEST;
}

export const GET_AUTH_SUCCESS = 'authActionTypes/GET_AUTH_SUCCESS';
export interface GetAuthSuccessAction {
  type: typeof GET_AUTH_SUCCESS;
  token: string;
}
export const GET_AUTH_FAILURE = 'authActionTypes/GET_AUTH_FAILURE';

export interface GetAuthFailureAction {
  type: typeof GET_AUTH_FAILURE;
  error: Error | string;
}

export type AuthAction =
    | LogoutAction
    | GetAuthAction
    | GetAuthRequestAction
    | GetAuthFailureAction
    | GetAuthSuccessAction;
