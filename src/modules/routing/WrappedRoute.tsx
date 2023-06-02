import { Navigate } from 'react-router-dom';
import React, { ReactNode, FC } from 'react';

interface PropType {
  component: ReactNode;
  token: string,
  redirectPath?: string
  withAuth?: boolean
}

// xor not allowed))

const WrappedRoute: FC<PropType> = ({
  component: Component,
  token,
  withAuth = true,
  redirectPath = '/auth',
}) => (withAuth === !!token ? Component : <Navigate to={redirectPath} />);

export default WrappedRoute;
