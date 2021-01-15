import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {withAuth} from '../Auth'

export const PrivateRoute = withAuth(
  ({ component: RouteComponent, isAuth, ...rest }) => (
<Route {...rest} render={routeProps => (
  isAuth 
    ? (<RouteComponent {...routeProps}/>) 
    : (<Redirect to='/login' />)
)}/>
)) 