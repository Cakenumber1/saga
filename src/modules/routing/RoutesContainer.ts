import { connect } from "react-redux";

import { AppState } from "../../store/rootReducer";
import RoutesComponent from "./RoutesComponent";

const mapStateToProps = (state: AppState) => {
    return {
        token: state.auth.token,
    };
};

export default connect(mapStateToProps, null)(RoutesComponent);
