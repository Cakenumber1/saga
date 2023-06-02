import { connect } from 'react-redux';

import { Dispatch } from 'redux';
import NavComponent from './NavComponent';
import { AppState } from '../../store/rootReducer';
import { AuthAction } from '../../store/auth/actionTypes';
import { logout } from '../../store/auth/actionCreators';

const mapStateToProps = (state: AppState) => ({
  token: state.auth.token,
});

const mapDispatchToProps = (dispatch: Dispatch<AuthAction>) => ({
  onLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavComponent);
