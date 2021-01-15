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
import { AuthProvider } from './Auth'


function App () {
  const [auth, setAuth]  = React.useState(false)
    
    return (
      <AuthProvider>
        <Navbar bg="light" variant="light">
          
            <Nav className="mr-auto">
            <Nav.Link href="/">Main</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Profile">Profile</Nav.Link>
          </Nav>
      </Navbar>

      <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />          
          <Route path="/profile">
            {auth ? <Profile /> : <Login/>}  
          </Route>
          <Redirect to='/' />
        </Switch>
      </AuthProvider>
      )
    }
   

export default  App;
