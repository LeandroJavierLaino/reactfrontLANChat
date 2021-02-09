import React from 'react';
import { Theme } from '@material-ui/core';
import ChatroomComponent from '../../Components/chatroom';

type ChatroomScreenProps = {
  theme: Theme;
};

function Chatroom({ theme }: ChatroomScreenProps) {
  return <ChatroomComponent theme={theme} />;
}

export default Chatroom;
