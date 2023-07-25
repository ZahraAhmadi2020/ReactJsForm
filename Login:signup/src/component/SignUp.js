import React, { useState } from 'react'
import { Alert, Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signUp}=useUserAuth()
  const [error, setError] = useState('')
    const navigate=useNavigate()
  const emailChange = (e) => {
    setEmail(e.target.value)
  }
  const passChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {

    e.preventDefault()
    setError('')
    try {
      await signUp(email, password);
      navigate('/')
    }
    catch (err) {
      setError(err.message);
    }
  }
  return (
    <>
       <div className='m-5'>
        <h3>Firebase Auth Signup</h3>
        {error && <Alert variant='danger'>{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <FormGroup className='mb-3' controlId='email'>
            <FormControl type='email' placeholder='Email'  onChange={emailChange} value={email}/>
          </FormGroup>
          <FormGroup className='mb-3'  controlId='password'>
            <FormControl type='password' placeholder='Password' onChange={passChange} value={password}/>
          </FormGroup>
          <div>
            <Button   variant='primary' type='Submit'>Sign Up</Button>
          </div>

        </Form>
        <hr />
        {/* <GoogleButton></GoogleButton> */}
        <div>
          Already have an account?
          <Link to='/'>Log In</Link>
        </div>
      </div>
    </>
  )
}

export default SignUp
