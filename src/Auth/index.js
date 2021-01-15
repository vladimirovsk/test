import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import auth0 from 'auth0-js';


const {Provider, Consumer: AuthConsumer} = React.createContext({
  isAuth:false
}) 

class AuthProvider extends Component {
  state = {
    isAuth:false, 
  }

  auth0 = new auth0.WebAuth({
    domain: 'dev-8983ogbd.us.auth0.com',
    clientID: '5Ja0NqWdPmSwP22qrpMWD5BiouD5DX30',
    redirectUri:'http://localhost:3000/callback',
    responseType: "token id_token",
    scope: "openid"
  }) 

  handleAuth = ()=> {
      this.auth0.parseHash((err, authResult) => {
        if(authResult && authResult.accessToken ){
          this.setState({isAuth:true}, () => {
            this.props.history.push('./private');
          });
        }else if (err){
          console.log (err)
      }
    });
  }

  auth = () => {
    this.auth0.authorize();
    // this.setState({isAuth:true}, () => {
    //   this.props.history.push('/profile')
    // })
  }

  render () {
    const {isAuth} = this.state;
    return(
      <Provider value={{isAuth, auth: this.auth, handleAuth:this.handleAuth}} >
          {this.props.children}
      </Provider>
    )
  }
}

export function withAuth(WrapperComponent){
  return class AuthHOC extends Component{
    render(){
      return(
        <AuthConsumer>
          {contextProps => (
            <WrapperComponent {...contextProps } {...this.props } />
          )}
        </AuthConsumer>   
      )
    }    
  }
}

const AuthProviderWithRouter = withRouter(AuthProvider)

export {AuthProviderWithRouter as AuthProvider}