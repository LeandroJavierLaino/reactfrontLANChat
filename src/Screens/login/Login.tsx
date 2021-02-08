import { Login as LoginComponent } from '../../Components/login/Login';

import React from 'react';
import { Theme } from '@material-ui/core';

type LoginScreenProps = {
  theme: Theme;
};

function Login({ theme }: LoginScreenProps) {
  return <LoginComponent theme={theme} />;
}

export default Login;
