import React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import Main from './component/Main/Main';
import Login from './component/Login/Login';
import Profile from './component/Profile/Profile';


function App () {
    
    return (
      <div>
        <Navbar bg="light" variant="light">
          
            <Nav className="mr-auto">
            <Nav.Link href="/">Main</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Profile">Profile</Nav.Link>
          </Nav>
      </Navbar>

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
