import React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './component/Main';
import Login from './component/Login';
import Profile from './component/Profile';

function App () {
    
    return (
      <div>
      <ul>
        <li><Link to='/'>MAIN</Link></li>
        <li><Link to='/login'>LOGIN</Link></li>
        <li><Link to='/profile'>PROFILE</Link></li>
      </ul>

      <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
      )
    }
  

export default  App;
