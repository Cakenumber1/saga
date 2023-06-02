import React, { FunctionComponent } from "react";

interface Props {
    lyrics: string;
}

const LyricsComponent: FunctionComponent<Props> = ({ lyrics}) => {

    return <div>{lyrics}</div>;
};

export default LyricsComponent;
