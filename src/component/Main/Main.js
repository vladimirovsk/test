import React from 'react';
import logo from '../../logo.svg'

const styles = {
  title: {
    position: 'absolute',
    textAlign: 'center',
  }
}

const Main = ()  => {
  return(
    <div>
      <h1 className='title'>MAIN</h1>
      <img src={logo} style={{alignItems:'center', justifyItems:'center', width: '50%'}}/>
    </div>
  )
}

export default Main;