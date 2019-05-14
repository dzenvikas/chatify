import React from 'react';
import './Main.css';
import Empty from '../Empty/Empty';
import ChatWindow from '../../containers/ChatWindow/ChatWindow';

const Main = ({ activeUserId, user }) => {
  return (
    <div className="Main">
      {activeUserId ? (
        <ChatWindow activeUserId={activeUserId} />
      ) : (
        <Empty user={user} />
      )}
    </div>
  );
};

export default Main;
