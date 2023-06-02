import * as actions from "./actionTypes";

export function clearErrors(errorId?: string): actions.ClearErrorsAction {
    return {
        type: actions.CLEAR_ERRORS,
        errorId,
    };
}
