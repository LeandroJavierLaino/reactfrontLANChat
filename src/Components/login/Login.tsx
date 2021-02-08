import React, { useState } from 'react';

import {
  Box,
  Container,
  IconButton,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import { useTranslation } from 'react-i18next';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Redirect } from 'react-router';

type LoginComponentProps = {
  theme: Theme;
};

function Login({ theme }: LoginComponentProps) {
  const { t } = useTranslation();
  const classes = useStyle(theme);
  const [userName, setUserName] = useState<string>('');
  const [submiting, setSubmiting] = useState<boolean>(false);

  const submitLogin = () => {
    console.log('userName : ', userName);
    if (userName) setSubmiting(true);
  };

  const updateName = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => setUserName(event.target.value);

  console.log(t('writeYourName'));

  return submiting ? (
    <Redirect to="/messages" />
  ) : (
    <Box className={classes.loginContainer}>
      <Typography variant="h2">{t('LANChat')}</Typography>
      <Container>
        <TextField
          variant="outlined"
          placeholder={t('writeYourName')}
          onChange={updateName}
        />
        <IconButton onClick={submitLogin} color="primary">
          <PlayCircleOutlineOutlinedIcon fontSize="large" />
        </IconButton>
      </Container>
    </Box>
  );
}

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    loginContainer: {
      flex: 1,
      textAlign: 'center',
      margin: theme.spacing(2),
      marginTop: theme.spacing(50),
    },
  })
);

export { Login };
