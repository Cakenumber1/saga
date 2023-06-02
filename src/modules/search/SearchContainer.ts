import { connect } from "react-redux";
import { Dispatch } from "redux";

import { setLyrics, getLyrics } from "../../store/lyrics/actionCreators";
import { LyricsAction } from "../../store/lyrics/actionTypes";
import SearchComponent from "./SearchComponent";

const mapDispatchToProps = (dispatch: Dispatch<LyricsAction>) => ({
    onSearch: (artist: string, song: string) => {
        dispatch(getLyrics(artist, song));
    },
    onClear: () => {
        dispatch(setLyrics(""));
    }
});

export default connect(
    null,
    mapDispatchToProps
)(SearchComponent);
