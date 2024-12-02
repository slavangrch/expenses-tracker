import React from "react";
import styled from "styled-components";
import { Form } from "../../styles";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";


export const LoginForm: React.FC = () => {
  return (
    <Form action="">
    <h2>Login</h2>
    <div className="input-control">
      <input type="text" placeholder="Email" name='email'/>
    </div>
    <div className="input-control">
      <input type="text" placeholder="Password" name='password'/>
    </div>
    <Button width='80%' title='Login'></Button>
    <p>Not registered yet? <Link to={'/auth?mode=register'}>Register</Link> </p>
  </Form>
  )
}
