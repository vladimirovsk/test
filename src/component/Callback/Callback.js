import React from 'react';
import {withAuth} from '../../Auth'


class Callback extends React.Component {

  componentDidMount(){
    const {handleAuth} = this.props;
    
    if (handleAuth) {
      handleAuth();
    }
      
  }

  render(){
    return(
      <div className='title'>
        <h3>Loading....</h3>
      </div>  
    )
  }
}

export default withAuth(Callback);