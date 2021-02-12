import { LoginComponent } from '../../Components/login';

import React from 'react';
import { Theme } from '@material-ui/core';

type LoginScreenProps = {
  theme: Theme;
  changeName(newName: string): void;
};

function Login({ theme, changeName }: LoginScreenProps) {
  return <LoginComponent theme={theme} changeName={changeName} />;
}

export default Login;
