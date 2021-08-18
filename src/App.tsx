import React from 'react';
import logo from './logo.svg';
import './App.css';

import WelcomeComponent from './Welcome';
import GameList from './components/gameList';
import GameAdd from './components/gameAdd';

function App() {
  return (
    <div className="App">
      <WelcomeComponent name="Arthur" level={12} />
      <GameList />
      <GameAdd />
    </div>
  );
}

export default App;
