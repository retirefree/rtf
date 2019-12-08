import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default function SignupModal({show, onSignup, onClose}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSignUp = e => {
    e.preventDefault();
    if (onSignup) {
      onSignup(firstName, lastName, email);
    }
  }

  return (
    <Modal show={show} onHide={onClose} centered>
    <Modal.Header closeButton>
      <Modal.Title>Lock In Quote</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter first name" 
            value={firstName}
            onChange={e => { setFirstName(e.target.value) }} />
        </Form.Group>

        <Form.Group controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter last name"
            value={lastName}
            onChange={e => { setLastName(e.target.value) }} />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email" 
            value={email}
            onChange={e => { setEmail(e.target.value) }}/>
        </Form.Group>

        {/* <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group> */}
        {/* <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox">
            <Form.Check.Input type="checkbox" />
            <Form.Check.Label>
              I accept the <a href="terms.html" target="_blank">Terms and Conditions</a>
            </Form.Check.Label>
          </Form.Check>
        </Form.Group> */}
        <Button 
          variant="primary" 
          type="submit" 
          size="lg"
          onClick={handleSignUp}>
          Apply Now
        </Button>
      </Form>
    </Modal.Body>
    <Modal.Footer>
    </Modal.Footer>
  </Modal>
  )
}
