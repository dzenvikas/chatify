import { getMessages } from '../static-data';
import { SEND_MESSAGE } from '../constants/action-types';
import _ from 'lodash';
const messages = (state = getMessages(10), action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const { id, value } = action.payload;
      const allUserMsgs = state[id];
      const number = +_.keys(allUserMsgs).pop() + 1;
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
