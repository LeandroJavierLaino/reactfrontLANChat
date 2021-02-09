import React, { useEffect } from 'react';

import {
  AppBar,
  Box,
  createStyles,
  makeStyles,
  Switch,
  Theme,
  Toolbar,
} from '@material-ui/core';
import BrightnessHighRoundedIcon from '@material-ui/icons/BrightnessHighRounded';
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';

import { getSession } from '../../Redux/selectors/session';
import { connect, ConnectedProps } from 'react-redux';
import LogoutButton from '../LogoutButton/LogoutButton';

const connector = connect(getSession);

type PropsFromRedux = ConnectedProps<typeof connector>;

type CustomAppBarProps = {
  selectedTheme: string;
  theme: Theme;
  toggleTheme(): void;
} & PropsFromRedux;

const CustomAppBar = ({
  selectedTheme,
  theme,
  toggleTheme,
  logged,
  username,
}: CustomAppBarProps) => {
  const classes = useStyle(theme);

  useEffect(() => {
    console.log('logged ', !!logged);
  }, [logged]);

  return (
    <AppBar>
      <Toolbar>
        {!!logged && <LogoutButton />}
        <Box className={classes.switchSlider}>
          {selectedTheme === 'dark' ? (
            <BrightnessHighRoundedIcon
              className={classes.iconTheme}
              fontSize="large"
            />
          ) : (
            <Brightness4RoundedIcon
              className={classes.iconTheme}
              fontSize="large"
            />
          )}

          <Switch color="default" onClick={toggleTheme} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    switchSlider: {
      flex: 1,
      textAlign: 'end',
      margin: theme.spacing(2),
      marginInline: theme.spacing(4),
    },
    iconTheme: {
      right: 0,
      marginInline: theme.spacing(1),
      alignContent: 'flex-end',
      display: 'flex',
      position: 'absolute',
    },
  })
);

const mapStateToProps = (state: any) => {
  return getSession(state);
};

export default connect(mapStateToProps)(CustomAppBar);
