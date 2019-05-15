import {
  SET_ACTIVE_USER_ID,
  SET_TYPING_VALUE,
  SEND_MESSAGE,
  EDIT_MESSAGE,
  SET_EDITING_MESSAGE
} from '../constants/action-types';

export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
});

export const setTypingValue = value => ({
  type: SET_TYPING_VALUE,
  payload: value
});

export const sendMessage = (id, value, editingMessage) => ({
  type: SEND_MESSAGE,
  payload: { id, value, editingMessage }
});

export const editMessage = number => ({
  type: SET_EDITING_MESSAGE,
  payload: number
});
