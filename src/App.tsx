import React from 'react';
import logo from './logo.svg';
import './App.css';

import GameList from './components/gameList';
import GameAdd from './components/gameAdd';

import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { ShowGame } from './pages/showGame';
import { AppProvider } from './context';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Router>
          <nav>
            <Link to="/list">List games</Link>
            <Link to="/add">Add game</Link>
          </nav>
          <Switch>
            <Route path='/list'>
              <GameList />
            </Route>
            <Route path='/add' component={GameAdd} />
            <Route path='/game/:id' component={ShowGame} />
          </Switch>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
