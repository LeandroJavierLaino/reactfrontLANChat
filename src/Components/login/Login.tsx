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
import { useSnackbar } from 'notistack';
import PowerSettingsNewRoundedIcon from '@material-ui/icons/PowerSettingsNewRounded';
import { saveUser } from '../../Config/api/users';

type LoginComponentProps = {
  theme: Theme;
  changeName(newName: string): void;
};

function Login({ theme, changeName }: LoginComponentProps) {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  const classes = useStyle(theme);
  const [userName, setUserName] = useState<string>('');
  const [submiting, setSubmiting] = useState<boolean>(false);

  const submitLogin = async () => {
    if (userName) {
      if (!/[^a-zA-Z]/.test(userName)) {
        await saveUser(userName);
        changeName(userName);
        setSubmiting(true);
      } else {
        enqueueSnackbar(t('pleaseUseLettersInYourName'), {
          variant: 'error',
          autoHideDuration: 3000,
        });
      }
    } else
      enqueueSnackbar(t('pleaseWriteYourName'), {
        variant: 'error',
        autoHideDuration: 3000,
      });
  };

  const updateName = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => setUserName(event.target.value);

  return submiting ? (
    <Redirect to="/messages" />
  ) : (
    <Box className={classes.loginContainer}>
      <Container className={classes.logo}>
        <PowerSettingsNewRoundedIcon
          className={classes.icon}
          fontSize="large"
        />
        <Typography className={classes.title} variant="h2">
          {t('LANChat')}
        </Typography>
      </Container>

      <Container>
        <TextField
          variant="outlined"
          placeholder={t('writeYourName')}
          onChange={updateName}
        />
        <IconButton onClick={submitLogin} color="default">
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
      marginTop:
        window.screen.height >= 1000
          ? theme.spacing(100)
          : window.screen.height < 500
          ? theme.spacing(40)
          : theme.spacing(60),
    },
    logo: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
    },
    title: {
      marginTop: theme.spacing(2),
      verticalAlign: 'middle',
    },
    icon: {
      verticalAlign: 'middle', // theme.spacing(5),
      fontSize: theme.spacing(20),
    },
  })
);

export default Login;
