import contacts from './contacts';
import user from './user';
import activeUserId from './activeUserId';
import messages from './messages';
import { combineReducers } from 'redux';

export default combineReducers({ contacts, user, activeUserId, messages });
