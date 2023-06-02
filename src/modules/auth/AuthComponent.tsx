import React, { FunctionComponent, useState } from 'react';
import AuthType from '@store/auth/enum';

interface Props {
  onAuth(email: string, password: string, authType: AuthType): void;
}

const AuthComponent: FunctionComponent<Props> = (props) => {
  const { onAuth } = props;
  const [pageType, setPageType] = useState<AuthType>(AuthType.Login);
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');

  const isLoginPage = pageType === AuthType.Login;

  const switchType = () => {
    setPageType(isLoginPage ? AuthType.Register : AuthType.Login);
  };

  const auth = () => {
    onAuth(email, password, pageType);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>
        {isLoginPage ? 'LOGIN' : 'SIGNUP'}
      </h2>
      <div style={{
        display: 'flex', flexDirection: 'column', background: 'dimgray', padding: '20px',
      }}
      >
        <label htmlFor="email">email</label>
        <input
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={auth}>{isLoginPage ? 'login' : 'reg'}</button>
      </div>
      <button
        style={{ width: '100%' }}
        type="button"
        onClick={switchType}
      >
        {isLoginPage ? 'Create new account' : 'Already have an account'}
      </button>
    </div>
  );
};

export default AuthComponent;
