import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  Container,
  // Container,
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
import { getMessages, saveMessage } from '../../Config/api/messages';
import { Message } from '../../Config/types/message';
import { Redirect } from 'react-router-dom';

type ChatroomComponentProps = {
  theme: Theme;
  username: string;
};

function Chatroom({ theme, username }: ChatroomComponentProps) {
  const classes = useStyle(theme);
  const { t } = useTranslation();
  const [message, setMessage] = useState<string>('');

  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const gettingMessages = async () => {
        const apiMessages = await getMessages();

        if (messages.length !== apiMessages.data.length) {
          setMessages(apiMessages.data as Message[]);

          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
          });

          clearInterval(interval);
        }
      };
      gettingMessages();
    }, 3000);

    return () => clearInterval(interval);
  }, [messages]);

  const sendMessage = async () => {
    await saveMessage(username, message);
    setMessage('');
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const updateMessage = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setMessage(event.target.value);
  };

  return !username ? (
    <Redirect to="/login" />
  ) : (
    <Box>
      <List className={classes.chatContainer}>
        {messages.map((message, index) => (
          <ListItem key={`tile-index-${index}`}>
            <ListItemText
              primary={message.message}
              secondary={`${message.username} - ${message.date}`}
            />
          </ListItem>
        ))}
      </List>

      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Container className={classes.messageWriterContainer}>
          <TextField
            variant="outlined"
            placeholder={t('writeAMessage')}
            onChange={updateMessage}
            className={classes.inputMessage}
            value={message}
          />
          <IconButton onClick={sendMessage} color="default">
            <SendRoundedIcon fontSize="large" />
          </IconButton>
        </Container>
      </AppBar>
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
      marginBottom: theme.spacing(15),
    },
    messageWriterContainer: {
      flex: 1,
      margin: theme.spacing(2),
    },
    inputMessage: {
      backgroundColor: '#fff',
      borderRadius: theme.spacing(2),
      width:
        window.screen.height >= 1000
          ? '90%'
          : window.screen.height < 500
          ? '85%'
          : '80%',
    },
    appBar: {
      top: 'auto',
      bottom: 0,
    },
  })
);

export default Chatroom;
