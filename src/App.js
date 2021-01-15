import React from 'react';
import {
  Switch,
  Route, 
  Redirect
} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import Main from './component/Main/Main';
import Login from './component/Login/Login';
import Profile from './component/Profile/Profile';
import Callback from './component/Callback/Callback';

import { AuthProvider } from './Auth'
import { PrivateRoute } from './component/PrivateRoute'


function App () {
    
    return (
      <AuthProvider>
        <Navbar bg="light" variant="light">
          
            <Nav className="mr-auto">
            <Nav.Link href="/">Main</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
      </Navbar>

      <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />  
          {/* <Route exact path="/profile" component={Profile} />     */}
          <Route exact path="/callback" component={Callback} />    
          <PrivateRoute path="/profile" componen={Profile}/>
          <Redirect to='/' />
        </Switch>
      </AuthProvider>
      )
    }
   

export default  App;
