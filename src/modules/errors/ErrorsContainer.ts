import { connect } from "react-redux";

import ErrorsComponent from "./ErrorsComponent";
import {Dispatch} from "redux";
import {AppState} from "../../store/rootReducer";
import {CommonAction} from "../../store/common/actionTypes";
import {clearErrors} from "../../store/common/actionCreators";

const mapStateToProps = (state: AppState) => {
    return {
        error: state.error
    };
};

const mapDispatchToProps = (dispatch: Dispatch<CommonAction>) => ({
    onClearError: (errorId?: string) => {
        dispatch(clearErrors(errorId));
    },
});


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ErrorsComponent);
