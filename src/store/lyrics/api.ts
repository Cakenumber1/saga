import axios from 'axios';

interface ILyricsResponse {
  lyrics: string;
}

export async function fetchLyrics(
  artist: string,
  song: string,
): Promise<ILyricsResponse> {
  return axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`);
}
