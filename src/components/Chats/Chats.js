import React, { Component } from 'react';
import './Chats.css';

const Chat = ({ msg }) => {
  const { text, is_user_msg } = msg;
  return (
    <span className={is_user_msg ? 'Chat is_user_msg' : 'Chat'}>{text}</span>
  );
};

class Chats extends Component {
  render() {
    console.log(this.props.msgs);
    return (
      <div className="Chats">
        {this.props.msgs.map(msg => {
          console.log(msg);

          return <Chat key={msg.number} msg={msg} />;
        })}
      </div>
    );
  }
}

export default Chats;
