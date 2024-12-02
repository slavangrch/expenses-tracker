import React from 'react'
import styled from 'styled-components'
import { Form } from "../../styles";
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

export const RegistarationForm: React.FC = () => {
  return (
    <Form action="">
      <h2>Register</h2>
    <div className="input-control">
      <input type="text" placeholder="Username" name='username'/>
    </div>
    <div className="input-control">
      <input type="text" placeholder="Email" name='email'/>
    </div>
    <div className="input-control">
      <input type="text" placeholder="Password" name='password'/>
    </div>
    <div className="input-control">
      <input type="text" placeholder="Confirm password" name='confirm-password'/>
    </div>
    <Button width='80%' title='Register'></Button>
    <p>Already have an account? <Link to={'/auth?mode=login'}>Login</Link> </p>
  </Form>
  )
}

