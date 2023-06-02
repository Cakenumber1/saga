import React, { FunctionComponent, useState } from "react";

interface Props {
    onSearch(artist: string, song: string): void;
    onClear(): void;
}

const SearchComponent: FunctionComponent<Props> = props => {
    const { onSearch, onClear } = props;
    const [artist, setArtist] = useState("");
    const [song, setSong] = useState("");

    return (
        <div>
            <input
                value={artist}
                placeholder="artist"
                onChange={e => setArtist(e.target.value)}
            />
            <input
                value={song}
                placeholder="song"
                onChange={e => setSong(e.target.value)}
            />
            <button
                onClick={() => {
                    onSearch(artist, song);
                    setArtist("");
                    setSong("");
                }}
            >
                Get Lyrics
            </button>
            <button onClick={onClear}>Clear Results</button>
        </div>
    );
};

export default SearchComponent;
