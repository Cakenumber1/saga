import { connect } from 'react-redux';

import { Dispatch } from 'redux';
import AuthComponent from './AuthComponent';
import { AuthAction } from '../../store/auth/actionTypes';
import { getAuth } from '../../store/auth/actionCreators';
import AuthType from '../../store/auth/enum';

const mapDispatchToProps = (dispatch: Dispatch<AuthAction>) => ({
  onAuth: (email: string, password: string, authType: AuthType) => {
    dispatch(getAuth(email, password, authType));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(AuthComponent);
