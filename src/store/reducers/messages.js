import { getMessages } from '../static-data';
import { SEND_MESSAGE, EDIT_MESSAGE } from '../constants/action-types';
import _ from 'lodash';
const messages = (state = getMessages(10), action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const { id, editingMessage } = action.payload;
      const allUserMsgs = state[id];
      const value = editingMessage
        ? action.payload.value + ' (edited)'
        : action.payload.value;
      const number = editingMessage
        ? editingMessage
        : +_.keys(allUserMsgs).pop() + 1;

      console.log('[value: ]', value);
      console.log('[number: ]', number);
      return {
        ...state,
        [id]: {
          ...allUserMsgs,
          [number]: {
            number,
            is_user_msg: true,
            text: value
          }
        }
      };
    default:
      return state;
  }
};

export default messages;
