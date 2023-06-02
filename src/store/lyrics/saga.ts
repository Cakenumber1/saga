import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import { fetchLyrics } from "./api";
import * as actionCreators from "./actionCreators";
import * as actionTypes from "./actionTypes";

function* onLoadLyrics({ artist, song }: actionTypes.GetLyricsAction) {
    try {
        yield put(actionCreators.getLyricsRequest());
        const { data } = yield call(fetchLyrics, artist, song);
        yield put(actionCreators.getLyricsSuccess(data.lyrics));
    } catch (error: any) {
        yield put(actionCreators.getLyricsFailure(error.message ?? error.response.data.error));
    }
}

function* watchOnLoadLyrics() {
    yield takeEvery(actionTypes.GET_LYRICS, onLoadLyrics);
}

export default function* lyricsSaga() {
    yield all([fork(watchOnLoadLyrics)]);
}
