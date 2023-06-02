import React, { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
import Songs from '../../pages/Songs';
import Authentication from '../../pages/Authentication';
import WrappedRoute from './WrappedRoute';

interface Props {
  token: string;
}

const RoutesComponent: FunctionComponent<Props> = ({ token }) => (
  <Routes>
    <Route path="/" element={<WrappedRoute component={<div>home</div>} token={token} />} />
    <Route path="/songs" element={<WrappedRoute component={<Songs />} token={token} />} />
    <Route path="/auth" element={<WrappedRoute redirectPath="/" withAuth={false} component={<Authentication />} token={token} />} />
    <Route path="*" element={<WrappedRoute component={<div>404</div>} token={token} />} />
  </Routes>
);

export default RoutesComponent;
