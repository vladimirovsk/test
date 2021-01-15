import React, {Component} from 'react';

const {Provider, Consumer: AuthConsumer} = React.createContext({
  isAuth:false
}) 

class AuthProvider extends Component {
  state = {
    isAuth:false
  }

  auth = () => {
    this.setState({isAuth:true})
  }

  render () {
    const {isAuth} = this.state;
    return(
      <Provider value={{isAuth, auth: this.auth}} >
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

export {AuthProvider}