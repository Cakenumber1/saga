import { connect } from "react-redux";

import NavComponent from "./NavComponent";
import {AppState} from "../../store/rootReducer";
import {Dispatch} from "redux";
import {AuthAction} from "../../store/auth/actionTypes";
import {logout} from "../../store/auth/actionCreators";


const mapStateToProps = (state: AppState) => {
    return {
        token: state.auth.token,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<AuthAction>) => ({
    onLogout: () => {
        dispatch(logout());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavComponent);
