import React from 'react';

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

import LogoutButton from '../LogoutButton/LogoutButton';

type CustomAppBarProps = {
  selectedTheme: string;
  theme: Theme;
  toggleTheme(): void;
  username: string;
  changeName(newName: string): void;
};

const CustomAppBar = ({
  selectedTheme,
  theme,
  toggleTheme,
  username,
  changeName,
}: CustomAppBarProps) => {
  const classes = useStyle(theme);

  return (
    <AppBar>
      <Toolbar>
        {username && <LogoutButton changeName={changeName} />}
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

export default CustomAppBar;
