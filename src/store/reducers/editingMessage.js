import { SET_EDITING_MESSAGE } from '../constants/action-types';

const editingMessage = (state = null, action) => {
  switch (action.type) {
    case SET_EDITING_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};

export default editingMessage;
