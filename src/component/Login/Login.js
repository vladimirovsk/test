import React from 'react';
import Button from "react-bootstrap/Button";
import './Login.css'
import { withAuth } from '../../Auth'
import {Redirect} from 'react-router-dom';

export default withAuth(({isAuth, auth}) => 
  
  isAuth ? (<Redirect to='/profile' />)
  :(  
      <div className='title'>
        <h2>Not authentification</h2>
        <Button className='btn' onClick={auth}>Login</Button>
      </div>
  )
  
  // const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");

  // function validateForm() {
  //   return email.length > 0 && password.length > 0;
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  // }

  // React.useEffect(()=>{
  //   console.log('isAuth', isAuth)
  // }, [isAuth])

  //  (
  //   <div className="Login">
  //     <div>
  //     <Form onSubmit={handleSubmit}>
  //       <Form.Group size="lg" controlId="email">
  //         <Form.Label>Email</Form.Label>
  //         <Form.Control
  //           autoFocus
  //           type="email"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //         />
  //       </Form.Group>
  //       <Form.Group size="lg" controlId="password">
  //         <Form.Label>Password</Form.Label>
  //         <Form.Control
  //           type="password"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //         />
  //       </Form.Group>
  //       <Button block size="lg" type="submit" disabled={!validateForm()}>
  //         Login
  //       </Button>
  //     </Form>
  //     </div>
  //   </div>
  // )
);



//export default withAuth({isAuth, auth}) (Login);