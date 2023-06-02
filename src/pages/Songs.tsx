import React, { FunctionComponent } from "react";

import Lyrics from "../modules/lyrics/LyricsContainer";
import Search from "../modules/search/SearchContainer";

const Songs: FunctionComponent = props => {
    return (
        <div>
            <h1>Lyrics Search</h1>
            <Search />
            <Lyrics />
        </div>
    );
};

export default Songs;
