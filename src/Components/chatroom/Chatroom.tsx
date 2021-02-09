import React from 'react';
import {
  Box,
  Container,
  createStyles,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  TextField,
  Theme,
} from '@material-ui/core';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { useTranslation } from 'react-i18next';

type ChatroomComponentProps = {
  theme: Theme;
};

const tileData = [
  { message: 'Mensaje A', username: 'user A' },
  { message: 'Mensaje B', username: 'user B' },
  { message: 'Mensaje C', username: 'user C' },
  { message: 'Mensaje D', username: 'user D' },
  { message: 'Mensaje E', username: 'user E' },
];

function Chatroom({ theme }: ChatroomComponentProps) {
  const classes = useStyle(theme);
  const { t } = useTranslation();

  const sendMessage = () => {};

  const updateMessage = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    console.log('message : ', event.target.value);
  };

  return (
    <Box className={classes.chatContainer}>
      <List>
        {tileData.map((tile) => (
          <ListItem>
            <ListItemText primary={tile.message} secondary={tile.username} />
          </ListItem>
        ))}
      </List>
      <Container className={classes.messageWriterContainer}>
        <TextField
          variant="outlined"
          placeholder={t('writeAMessage')}
          onChange={updateMessage}
          className={classes.inputMessage}
        />
        <IconButton onClick={sendMessage} color="default">
          <SendRoundedIcon fontSize="large" />
        </IconButton>
      </Container>
    </Box>
  );
}

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    chatContainer: {
      textAlign: 'center',
      minHeight: 500,
      marginTop: theme.spacing(15),
      margin: theme.spacing(2),
    },
    messageWriterContainer: {
      flex: 1,
      position: 'absolute',
      alignContent: 'space-between',
      bottom: theme.spacing(2),
    },
    inputMessage: {
      width:
        window.screen.height >= 1000
          ? '95%'
          : window.screen.height < 500
          ? '85%'
          : '80%',
    },
  })
);

export { Chatroom };
