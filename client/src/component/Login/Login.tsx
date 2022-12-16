import React, { useState } from 'react';
import {
  LoginContainer,
  InnerBox,
  Greeting,
  Form,
  Email,
  Password,
  Errormsg,
  ForgotPassword,
  SubmitBtn,
  Register,
} from './login-style';

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const [emailError, setemailError] = useState('');
  const [passwordError, setpasswordError] = useState('');

  const validateEmail = (e: string) => {
    const Regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return Regex.test(e);
  };

  const validatePassword = (e: string) => {
    return e.length > 7;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'email') {
      if (!validateEmail(e.target.value)) {
        setemailError('This is not a valid email');
      } else {
        setemailError('');
        setState((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      }
    } else if (e.target.name === 'password') {
      if (!validatePassword(e.target.value)) {
        setpasswordError('Must be at 8 characters');
      } else {
        setpasswordError('');
        setState((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      }
    }
  };

  const handleSubmit = () => {
    if (emailError === '' && passwordError === '') {
      alert('로그인 성공');
      console.log(state);
    } else {
      alert('내용확인!');
    }
  };

  return (
    <LoginContainer>
      <InnerBox>
        <Greeting>Hello!</Greeting>
        <Form>
          <Email
            type="text"
            name="email"
            onChange={handleChange}
            placeholder="example@email.com"
          />
          <Errormsg>
            <p>{emailError}</p>
          </Errormsg>
          <Password
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="password"
          />
          <Errormsg>
            <p>{passwordError}</p>
          </Errormsg>
          <ForgotPassword>Forgot Password</ForgotPassword>
        </Form>
        <SubmitBtn type="submit" onClick={handleSubmit}>
          Log in
        </SubmitBtn>
        <Register>
          Don't have an account? <span>Register</span>
        </Register>
      </InnerBox>
    </LoginContainer>
  );
};

export default Login;
