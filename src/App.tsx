import React, { FunctionComponent, useEffect } from 'react';
import './App.css';
import Errors from './modules/errors/ErrorsContainer';
import Loader from './modules/loader/LoaderContainer';
import Routes from './modules/routing/RoutesContainer';
import Nav from './modules/navigation/NavContainer';

const App: FunctionComponent = () => {
  useEffect(() => {
    // todo: request for login if token in cookies
    console.log('request for login if token in cookies');
  }, []);
  return (
    <div className="App">
      <Nav />
      <Loader />
      <Errors />
      <Routes />
    </div>
  );
};

export default App;
