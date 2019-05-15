import React, { Component } from 'react';
import './Chats.css';
import Aux from '../../hoc/Aux/Aux';
import store from '../../store';
import { setTypingValue, editMessage } from '../../store/actions';

const Chat = ({ msg }) => {
  const { text, is_user_msg, number } = msg;
  let bubble = <span className="Chat">{text}</span>;
  if (is_user_msg) {
    bubble = (
      <span
        className="Chat is_user_msg"
        onClick={() => {
          store.dispatch(setTypingValue(text));
          store.dispatch(editMessage(number));
        }}
      >
        {text}
      </span>
    );
  }
  return <Aux>{bubble}</Aux>;
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
    this.chatRef.current.scrollTop = this.chatRef.current.scrollHeight;
  };

  render() {
    return (
      <div className="Chats" ref={this.chatRef}>
        {this.props.msgs.map(msg => {
          return <Chat key={msg.number} msg={msg} />;
        })}
      </div>
    );
  }
}

export default Chats;
