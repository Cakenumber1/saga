import uniqid from 'uniqid';

interface ErrorAction {
    type: string;
    error: Error | string;
    errorId?: string;
}

export interface ErrorState {
    [key: string]: null | Error | string;
}

const getErrorMatches = (actionType: string) =>
    /(.*)_(FAILURE|CLEAR_ERRORS)/.exec(actionType);
    // todo: version w refresh error on request
    // /(.*)_(REQUEST|FAILURE|CLEAR_ERRORS)/.exec(actionType);

const errorReducer = (state: ErrorState = {}, action: ErrorAction) => {
    const matches = getErrorMatches(action.type);

    if (!matches) {
        return state;
    }

    const [, requestName, requestStatus] = matches;

    if (requestStatus === 'CLEAR_ERRORS') {
        if (action.errorId) {
            const next = {...state}
            delete next[action.errorId]
            return next
        }
        return {}
    }

    const errorText = `[${requestName}]: ${action.error}`

    return {
        ...state,
        [uniqid.time()]: errorText
    };

    // todo: version w saving type
    // possible to do smth like [requestName + '-' + uniqid.time()]
    // to filter afterwards for some reason if needed
    //    return {
    //         ...state,
    //         [requestName]: requestStatus === "FAILURE" ? errorText : null
    //     };
};

export default errorReducer;
