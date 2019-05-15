import React from 'react';
import store from '../../store';
import { setTypingValue, sendMessage } from '../../store/actions';
import './MessageInput.css';

const MessageInput = ({ value }) => {
  const onChangeHandler = e => {
    store.dispatch(setTypingValue(e.target.value));
  };
  const submitHandler = e => {
    e.preventDefault();
    const { activeUserId, typing, editingMessage } = store.getState();
    store.dispatch(sendMessage(activeUserId, typing, editingMessage));
  };
  return (
    <form className="Message" onSubmit={submitHandler}>
      <input
        className="Message__input"
        onChange={onChangeHandler}
        value={value}
        placeholder="Write your message here ..."
      />
    </form>
  );
};

export default MessageInput;
