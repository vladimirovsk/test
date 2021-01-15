import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {withAuth} from '../Auth'

export const PrivateRoute = withAuth(
  ({ component: RouteComponent, isAuth, ...rest }) => {

    return (

    <Route {...rest} render={props => (
      isAuth 
        ? (<RouteComponent {...props}/>)  
        : (<Redirect to={'/login'} />)
      )}
    />
  )}
  
); 