import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './componets/Home/Home';
import NotMatch from './componets/NotMatch/NotMatch';
import FriendsDetails from './componets/FriendsDetails/FriendsDetails';

function App() {
  

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/friend/:friendId">
            <FriendsDetails/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotMatch/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
