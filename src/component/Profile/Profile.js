import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Profile.css'

export default function Profile() {
      const [firstName, setFirstName] = React.useState("");
      const [lastName, setLastName] = React.useState("");
    
      function validateForm() {
        return firstName.length > 0 && lastName.length > 0;
      }
    
      function handleSubmit(event) {
        event.preventDefault();
      }


    
      return (
        <div className="Profile">
          <div className={'title'}>Your Profile</div>
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <Button block size="lg" type="submit" disabled={!validateForm()}>
              Save
            </Button>
          </Form>
        </div>
      );
    }