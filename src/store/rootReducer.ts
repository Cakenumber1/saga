import {combineReducers} from "redux";

import authReducer from './auth/reducer'
import isLoadingReducer from "./common/isLoadingReducer";
import errorReducer from "./common/errorReducer";
import lyricsReducer from "./lyrics/reducer";


const rootReducer = combineReducers({
    auth: authReducer,
    lyrics: lyricsReducer,
    error: errorReducer,
    isLoading: isLoadingReducer
})
export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
