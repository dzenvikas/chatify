import React from 'react';
import './Sidebar.css';
import User from '../../containers/User/User';

const Sidebar = ({ contacts }) => {
  return (
    <aside className="Sidebar">
      <h1 className="Title">Contacts</h1>
      {contacts.map(user => (
        <User key={user.user_id} user={user} />
      ))}
    </aside>
  );
};

export default Sidebar;
