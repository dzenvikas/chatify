import React, { Component } from 'react';
import './Chats.css';

const Chat = ({ msg }) => {
  const { text, is_user_msg } = msg;
  return (
    <span className={is_user_msg ? 'Chat is_user_msg' : 'Chat'}>{text}</span>
  );
};

class Chats extends Component {
  constructor(props) {
    super(props);
    this.chatRef = React.createRef();
  }

  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    console.log(this.chatRef);

    this.chatRef.current.scrollTop = this.chatRef.current.scrollHeight;
  };

  render() {
    console.log(this.props.msgs);
    return (
      <div className="Chats" ref={this.chatRef}>
        {this.props.msgs.map(msg => {
          console.log(msg);

          return <Chat key={msg.number} msg={msg} />;
        })}
      </div>
    );
  }
}

export default Chats;
