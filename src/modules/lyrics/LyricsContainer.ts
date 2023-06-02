import { connect } from 'react-redux';

import { AppState } from '../../store/rootReducer';
import LyricsComponent from './LyricsComponent';

const mapStateToProps = (state: AppState) => ({
  lyrics: state.lyrics.lyrics,
});

export default connect(mapStateToProps, null)(LyricsComponent);
