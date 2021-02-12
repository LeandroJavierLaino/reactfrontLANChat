import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route /*, Link*/,
} from 'react-router-dom';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import Login from './Screens/login/Login';
import { SnackbarProvider } from 'notistack';
import Chatroom from './Screens/chatroom/Chatroom';

import CustomAppBar from './Components/CustomAppBar/CustomAppBar';

function App() {
  const [selectedTheme, setSelectedTheme] = useState<'dark' | 'light'>('light');
  const [username, setUsername] = useState<string>('');

  const toggleTheme = () => {
    setSelectedTheme(selectedTheme === 'dark' ? 'light' : 'dark');
  };
  const changeName = (newName: string) => setUsername(newName);

  const themeSelected = createMuiTheme({
    palette: {
      type: selectedTheme,
    },
    spacing: 4,
  });

  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      <Router>
        <ThemeProvider theme={themeSelected}>
          <CssBaseline />
          <CustomAppBar
            selectedTheme={selectedTheme}
            theme={themeSelected}
            toggleTheme={toggleTheme}
            username={username}
            changeName={changeName}
          />

          <Switch>
            <Route path="/login">
              <Login theme={themeSelected} changeName={changeName} />
            </Route>

            <Route path="/messages">
              <Chatroom theme={themeSelected} username={username} />
            </Route>

            <Route path="/">
              <Login theme={themeSelected} changeName={changeName} />
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    </SnackbarProvider>
  );
}

export default App;
