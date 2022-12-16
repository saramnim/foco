import React, { useState } from 'react';
//import { useNavigate, Link } from 'react-router-dom';
import {
  RegisterContainer,
  InnerBox,
  Greeting,
  Form,
  Nickname,
  Email,
  Password,
  ConfirnPassword,
  Errormsg,
  SubmitBtn,
} from './register-style';

const Register = () => {
  const [state, setState] = useState({
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [nicknameError, setNicknameError] = useState('');
  const [emailError, setemailError] = useState('');
  const [passwordError, setpasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validateNickname = (e: string) => {
    const Regex = /^[a-z][a-z0-9]*$/i;
    return Regex.test(e);
  };

  const validateEmail = (e: string) => {
    const Regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return Regex.test(e);
  };

  const validatePassword = (e: string) => {
    return e.length > 7;
  };

  const validateConfirmPassword = (e: string) => {
    return e === state.password;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'nickname') {
      if (!validateNickname(e.target.value)) {
        setNicknameError('English only');
      } else {
        setNicknameError('');
        setState((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      }
    } else if (e.target.name === 'email') {
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
    } else if (e.target.name === 'confirmPassword') {
      if (!validateConfirmPassword(e.target.value)) {
        setConfirmPasswordError('Passwords do not match');
      } else {
        setConfirmPasswordError('');
        setState((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      }
    }
  };

  const handleSubmit = () => {
    if (
      nicknameError === '' &&
      emailError === '' &&
      passwordError === '' &&
      confirmPasswordError === ''
    ) {
      alert('로그인 성공');
      console.log(state);
    } else {
      alert('내용확인!');
    }
  };

  return (
    <RegisterContainer>
      <InnerBox>
        <Greeting>Welocome!</Greeting>
        <Form>
          <Nickname
            type="text"
            name="nickname"
            onChange={handleChange}
            placeholder="nickname"
          />
          <Errormsg>
            <p>{nicknameError}</p>
          </Errormsg>
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
          <ConfirnPassword
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            placeholder="confirm password"
          />
          <Errormsg>
            <p>{confirmPasswordError}</p>
          </Errormsg>
        </Form>
        <SubmitBtn type="submit" onClick={handleSubmit}>
          Register
        </SubmitBtn>
      </InnerBox>
    </RegisterContainer>
  );
};
export default Register;
