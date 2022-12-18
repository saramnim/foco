import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  validateNickname,
  validateEmail,
  validatePassword,
} from '../util/usefulFunctions';
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

interface inputData {
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface errorData {
  nicknameError: string;
  emailError: string;
  passwordError: string;
  confirmPasswordError: string;
}

const Register = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState<inputData>({
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState<errorData>({
    nicknameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
  });

  const validateConfirmPassword = (password: string) => {
    return password === info.password;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'nickname') {
      if (!validateNickname(e.target.value)) {
        setError((prev) => ({
          ...prev,
          nicknameError: 'English only',
        }));
      } else {
        setError((prev) => ({
          ...prev,
          nicknameError: '',
        }));
        setInfo((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      }
    } else if (e.target.name === 'email') {
      if (!validateEmail(e.target.value)) {
        setError((prev) => ({
          ...prev,
          emailError: 'This is not a valid email',
        }));
      } else {
        setError((prev) => ({
          ...prev,
          emailError: '',
        }));
        setInfo((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      }
    } else if (e.target.name === 'password') {
      if (!validatePassword(e.target.value)) {
        setError((prev) => ({
          ...prev,
          passwordError: 'Must be at 8 characters',
        }));
      } else {
        setError((prev) => ({
          ...prev,
          passwordError: '',
        }));
        setInfo((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      }
    } else if (e.target.name === 'confirmPassword') {
      if (!validateConfirmPassword(e.target.value)) {
        setError((prev) => ({
          ...prev,
          confirmPasswordError: 'Passwords do not match',
        }));
      } else {
        setError((prev) => ({
          ...prev,
          confirmPasswordError: '',
        }));
        setInfo((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      }
    }
  };

  const handleSubmit = () => {
    if (
      error.nicknameError === '' &&
      error.emailError === '' &&
      error.passwordError === '' &&
      error.confirmPasswordError === ''
    ) {
      alert('회원가입 성공');
      console.log(info);
      navigate('/login');
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
            <p>{error.nicknameError}</p>
          </Errormsg>
          <Email
            type="text"
            name="email"
            onChange={handleChange}
            placeholder="example@email.com"
          />
          <Errormsg>
            <p>{error.emailError}</p>
          </Errormsg>
          <Password
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="password"
          />
          <Errormsg>
            <p>{error.passwordError}</p>
          </Errormsg>
          <ConfirnPassword
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            placeholder="confirm password"
          />
          <Errormsg>
            <p>{error.confirmPasswordError}</p>
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
