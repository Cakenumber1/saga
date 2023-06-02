import { connect } from 'react-redux';

import LoaderComponent from './LoaderComponent';
import { AppState } from '../../store/rootReducer';

const mapStateToProps = (state: AppState) => ({
  isLoading: state.isLoading,
});

export default connect(mapStateToProps, null)(LoaderComponent);
