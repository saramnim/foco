import { ChangeEventHandler, useReducer } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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

interface LoginState {
  email: string;
  password: string;
  emailError: string;
  passwordError: string;
}

const initialState: LoginState = {
  email: '',
  password: '',
  emailError: '',
  passwordError: '',
};

type LoginAction =
  | { type: 'email-Change'; email: string; emailError: string }
  | { type: 'password-Change'; password: string; passwordError: string };

const loginReducer = (state: LoginState, action: LoginAction): LoginState => {
  switch (action.type) {
    case 'email-Change':
      return {
        ...state,
        email: action.email,
        emailError: action.emailError,
      };
    case 'password-Change':
      return {
        ...state,
        password: action.password,
        passwordError: action.passwordError,
      };
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const isEmail = e.target.value;
    const validateEmail = (email: string) => {
      const Regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return Regex.test(email);
    };
    const isEmailValid = validateEmail(isEmail);

    dispatch({
      type: 'email-Change',
      email: isEmail,
      emailError: isEmailValid ? '' : 'This is not a valid email',
    });
  };

  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const isPassword = e.target.value;
    const isPasswordValid = isPassword.length > 5;

    dispatch({
      type: 'password-Change',
      password: isPassword,
      passwordError: isPasswordValid ? '' : 'Must be at 6 characters',
    });
  };

  return (
    <LoginContainer>
      <InnerBox>
        <Greeting>Hello!</Greeting>
        <Form>
          <Email
            type="text"
            name="email"
            onChange={handleEmailChange}
            placeholder="example@email.com"
          />
          <Errormsg>
            <p>{state.emailError}</p>
          </Errormsg>
          <Password
            type="password"
            name="password"
            onChange={handlePasswordChange}
            placeholder="password"
          />
          <Errormsg>
            <p>{state.passwordError}</p>
          </Errormsg>
          <ForgotPassword>Forgot Password</ForgotPassword>
        </Form>
        <SubmitBtn type="submit">Log in</SubmitBtn>
        <Register>
          Don't have an account? <span>Register</span>
        </Register>
      </InnerBox>
    </LoginContainer>
  );
};

export default Login;
