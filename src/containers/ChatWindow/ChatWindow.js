import React from 'react';
import Header from '../../components/Header/Header';
import store from '../../store';
import Chats from '../../components/Chats/Chats';
import _ from 'lodash';
import './ChatWindow.css';

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeMsgs = state.messages[activeUserId];
  const activeUser = state.contacts[activeUserId];
  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats msgs={_.values(activeMsgs)} />
    </div>
  );
};
export default ChatWindow;
