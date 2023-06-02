import * as actions from './actionTypes';

export interface AuthState {
  token: string;
}

const initialState: AuthState = {
  token: '',
};

const reducers = (state = initialState, action: actions.AuthAction) => {
  switch (action.type) {
    case actions.GET_AUTH_SUCCESS:
      return {
        token: action.token,
      };
    case actions.LOGOUT:
      return {
        token: '',
      };
    default:
      return state;
  }
};

export default reducers;
