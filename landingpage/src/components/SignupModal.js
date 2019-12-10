import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Loader from 'react-loader-spinner'

function ThankYou({show, onClose}) {
  return(
    <Modal show={show} onHide={onClose} centered>
    <Modal.Header closeButton>
      <Modal.Title>Lock In Quote</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Your application was received! We will contact you soon.</p>
    </Modal.Body>
    <Modal.Footer>
      <Button 
        variant="primary" 
        type="submit" 
        size="lg"
        onClick={onClose}>
        Done
      </Button>
    </Modal.Footer>
    </Modal>
  );
}

function SignupForm({firstName, setFirstName, lastName, setLastName, emailAddress, setEmailAddress}) {
  return (
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
        value={emailAddress}
        onChange={e => { setEmailAddress(e.target.value) }}/>
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
  </Form>
  );
}

export default function SignupModal({show, onSignup, onClose, product, completed}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = e => {
    e.preventDefault();
    if (onSignup) {
      setLoading(true);
      onSignup(firstName, lastName, emailAddress, product).then(() => {
        setLoading(false);
      })
    }
  }

  if (completed) {
    return <ThankYou show={show} onClose={onClose} />
  }

  var modalContent;
  if (loading) {
    modalContent = <Loader type="Oval" color="#7983ec" width={"100%"}/>
  } else {
    modalContent = (<SignupForm 
      firstName={firstName} 
      setFirstName={setFirstName}
      lastName={lastName}
      setLastName={setLastName}
      emailAddress={emailAddress}
      setEmailAddress={setEmailAddress}
      />)
  }

  return (
    <Modal show={show} onHide={onClose} centered>
    <Modal.Header closeButton>
      <Modal.Title>Lock In Quote</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {modalContent}
    </Modal.Body>
    <Modal.Footer>
      <Button 
        variant="primary" 
        type="submit" 
        size="lg"
        onClick={handleSignUp}
        disabled={loading}>
        Apply Now
      </Button>
    </Modal.Footer>
  </Modal>
  )
}
