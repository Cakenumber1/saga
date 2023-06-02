import axios from 'axios';
import AuthType from './enum';

interface AuthResponse {
  token: string
}

export async function auth(
  email: string,
  password: string,
  authType: AuthType,
): Promise<AuthResponse> {
  const { data } = await axios.post<AuthResponse>(
    `https://reqres.in/api/${authType}`,
    { email, password },
    {
      headers: {
        'Contentp-Type': 'application/json',
        Accept: 'application/json',
      },
    },
  );
  return data;
}
