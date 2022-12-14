import { ChangeEventHandler, useReducer } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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

interface RegisterState {
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
  nicknameError: string;
  emailError: string;
  passwordError: string;
  confirmPasswordError: string;
  buttonDisabled: boolean;
}

const initialState: RegisterState = {
  nickname: '',
  email: '',
  password: '',
  confirmPassword: '',
  nicknameError: '',
  emailError: '',
  passwordError: '',
  confirmPasswordError: '',
  buttonDisabled: true,
};

type RegisterAction =
  | {
      type: 'nickname-change';
      nickname: string;
      nicknameError: string;
      buttonDisabled: boolean;
    }
  | {
      type: 'email-change';
      email: string;
      emailError: string;
      buttonDisabled: boolean;
    }
  | {
      type: 'password-change';
      password: string;
      passwordError: string;
      buttonDisabled: boolean;
    }
  | {
      type: 'confirmPassword-change';
      confirmPassword: string;
      confirmPasswordError: string;
      buttonDisabled: boolean;
    };

const registerReducer = (
  state: RegisterState,
  action: RegisterAction
): RegisterState => {
  switch (action.type) {
    case 'nickname-change':
      return {
        ...state,
        nickname: action.nickname,
        nicknameError: action.nicknameError,
        buttonDisabled: action.buttonDisabled,
      };
    case 'email-change':
      return {
        ...state,
        email: action.email,
        emailError: action.emailError,
        buttonDisabled: action.buttonDisabled,
      };
    case 'password-change':
      return {
        ...state,
        password: action.password,
        passwordError: action.passwordError,
        buttonDisabled: action.buttonDisabled,
      };
    case 'confirmPassword-change':
      return {
        ...state,
        confirmPassword: action.confirmPassword,
        confirmPasswordError: action.confirmPasswordError,
        buttonDisabled: action.buttonDisabled,
      };
  }
};

const Register = () => {
  const [state, dispatch] = useReducer(registerReducer, initialState);

  const handleNicknameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const isNickname = e.target.value;
    const validateNickname = (isNickname: string) => {
      const Regex = /^[a-z][a-z0-9]*$/i;
      return Regex.test(isNickname);
    };
    const isNicknameValid = validateNickname(isNickname);

    dispatch({
      type: 'nickname-change',
      nickname: isNickname,
      nicknameError: isNicknameValid ? '' : 'English only',
      buttonDisabled: isNicknameValid ? false : true,
    });
  };

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const isEmail = e.target.value;
    const validateEmail = (email: string) => {
      const Regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return Regex.test(email);
    };
    const isEmailValid = validateEmail(isEmail);

    dispatch({
      type: 'email-change',
      email: isEmail,
      emailError: isEmailValid ? '' : 'This is not a valid email',
      buttonDisabled: isEmailValid ? false : true,
    });
  };

  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const isPassword = e.target.value;
    const isPasswordValid = isPassword.length > 5;

    dispatch({
      type: 'password-change',
      password: isPassword,
      passwordError: isPasswordValid ? '' : 'Must be at 6 characters',
      buttonDisabled: isPasswordValid ? false : true,
    });
  };

  const handleConfirmPasswordChange: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const isConfirm = e.target.value;
    const validateConfirm = (password: string) => {
      return password === state.password;
    };
    const isConfirmValid = validateConfirm(isConfirm);

    dispatch({
      type: 'confirmPassword-change',
      confirmPassword: isConfirm,
      confirmPasswordError: isConfirmValid ? '' : 'Passwords do not match',
      buttonDisabled: isConfirmValid ? false : true,
    });
  };

  const handleSubmit = () => {
    alert('로그인 성공');
  };

  return (
    <RegisterContainer>
      <InnerBox>
        <Greeting>Welocome!</Greeting>
        <Form>
          <Nickname
            type="text"
            name="nickname"
            onChange={handleNicknameChange}
            placeholder="nickname"
          />
          <Errormsg>
            <p>{state.nicknameError}</p>
          </Errormsg>
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
          <ConfirnPassword
            type="password"
            name="confirm-password"
            onChange={handleConfirmPasswordChange}
            placeholder="confirm password"
          />
          <Errormsg>
            <p>{state.confirmPasswordError}</p>
          </Errormsg>
        </Form>
        <SubmitBtn
          type="submit"
          disabled={state.buttonDisabled}
          onClick={handleSubmit}
        >
          Register
        </SubmitBtn>
      </InnerBox>
    </RegisterContainer>
  );
};

export default Register;
