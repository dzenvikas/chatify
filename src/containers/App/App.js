import React from 'react';
import './App.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Main from '../../components/Main/Main';
import store from '../../store';
import _ from 'lodash';

const App = () => {
  // ES6 destructuring
  const { contacts, activeUserId, user } = store.getState();
  return (
    <div className="App">
      <div className="Chatify">
        <Sidebar contacts={_.values(contacts)} />
        <Main activeUserId={activeUserId} user={user} />
      </div>
    </div>
  );
};

export default App;
