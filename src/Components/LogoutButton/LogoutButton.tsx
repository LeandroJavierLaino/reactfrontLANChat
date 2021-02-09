import React from 'react';

import PowerSettingsNewRoundedIcon from '@material-ui/icons/PowerSettingsNewRounded';
import { IconButton } from '@material-ui/core';
import { connect, ConnectedProps } from 'react-redux';
import { logout } from '../../Redux/actions/actions';

const connector = connect(logout);

type PropsFromRedux = ConnectedProps<typeof connector>;

type LogoutButtonProps = PropsFromRedux;

function LogoutButton({ dispatch }: LogoutButtonProps) {
  const logoutAction = () => {
    dispatch(logout());
  };

  return (
    <IconButton onClick={logoutAction} color="default">
      <PowerSettingsNewRoundedIcon fontSize="large" />
    </IconButton>
  );
}

export default connector(LogoutButton);
