import React from 'react';

import PowerSettingsNewRoundedIcon from '@material-ui/icons/PowerSettingsNewRounded';
import { IconButton } from '@material-ui/core';

type LogoutButtonProps = {
  changeName(username: string): void;
};

function LogoutButton({ changeName }: LogoutButtonProps) {
  const logoutAction = () => {
    changeName('');
  };

  return (
    <IconButton onClick={logoutAction} color="default">
      <PowerSettingsNewRoundedIcon fontSize="large" />
    </IconButton>
  );
}

export default LogoutButton;
