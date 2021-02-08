import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route /*, Link*/,
} from 'react-router-dom';
import {
  Box,
  createMuiTheme,
  createStyles,
  CssBaseline,
  makeStyles,
  Switch as SwitchSlider,
  Theme,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@material-ui/core';
import BrightnessHighRoundedIcon from '@material-ui/icons/BrightnessHighRounded';
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';
import Login from './Screens/login/Login';

function App() {
  const [selectedTheme, setSelectedTheme] = useState<'dark' | 'light'>('light');
  const classes = useStyle();

  const toggleTheme = () => {
    setSelectedTheme(selectedTheme === 'dark' ? 'light' : 'dark');
  };

  const themeSelected = createMuiTheme({
    palette: {
      type: selectedTheme,
    },
    spacing: 4,
  });

  return (
    <Router>
      <ThemeProvider theme={themeSelected}>
        <CssBaseline />
        <Toolbar>
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

            <SwitchSlider color="primary" onClick={toggleTheme} />
          </Box>
        </Toolbar>

        <Switch>
          <Route path="/login">
            <Login theme={themeSelected} />
          </Route>
          {/**This should render a messages screen component. */}
          <Route path="/messages">
            <Typography>{'UNDER CONSTRUCTION'}</Typography>
            <Login theme={themeSelected} />
          </Route>

          <Route path="/">
            <Login theme={themeSelected} />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

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
      marginInline: theme.spacing(2),
      alignContent: 'flex-end',
      display: 'flex',
      position: 'absolute',
    },
  })
);

export default App;
