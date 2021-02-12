import React from 'react';
import { Theme } from '@material-ui/core';
import ChatroomComponent from '../../Components/chatroom';

type ChatroomScreenProps = {
  theme: Theme;
  username: string;
};

function Chatroom({ theme, username }: ChatroomScreenProps) {
  return <ChatroomComponent theme={theme} username={username} />;
}

export default Chatroom;
