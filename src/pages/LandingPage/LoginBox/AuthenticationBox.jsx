import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';

import Button from '../../../components/Button/Button';
import TextInput from '../../../components/TextInput/TextInput';
import * as style from './AuthenticationBox.style';
import mutationLogin from '../../../graphql/mutation-login';
import mutationRegister from '../../../graphql/mutation-register';
import { useCookies } from 'react-cookie';

const AuthenticationBox = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPasssword] = useState('');
  const [failureMessage, setFailureMessage] = useState('');
  const [, setCookie] = useCookies();

  const [doLogin, { data: loginData, error: loginError, loading: loginLoading }] = useMutation(mutationLogin, { variables: { email: '', password: '' } });
  const [doRegister, { data: registerData, error: registerError, loading: registerLoading }] = useMutation(mutationRegister, { variables: { email: '', password: '' } });

  useEffect(() => {
    if (loginError) {
      window.alert(loginError.message);
    }

    if (!loginData) return;

    if (loginData.loginUser.__typename === 'InvalidInput') {
      setFailureMessage(loginData.loginUser.reason);
      return;
    }

    setFailureMessage('');
    setCookie('accessToken', loginData.loginUser.accessToken);
    setCookie('refreshToken', loginData.loginUser.refreshToken);
    // Redirect user to authenticated page
  }, [loginData, loginError, setCookie]);

  useEffect(() => {
    if (registerError) {
      window.alert(registerError.message);
    }

    if (!registerData) return;

    if (registerData.addUser.__typename !== 'User') {
      setFailureMessage(registerData.addUser.reason);
      return;
    }

    window.alert('User has been registered. Please login.');
    setFailureMessage('');
  }, [registerData, registerError]);

  const loginUser = (e) => {
    e.preventDefault();
    doLogin({ variables: { email, password } });
  };

  const registerUser = (e) => {
    e.preventDefault();
    doRegister({ variables: { email, password } });
  };

  const isRegisterFieldsValid = () => {
    return password !== '' && password === confirmPassword;
  };

  const LoginContent = (
    <>
      <h2>Login</h2>
      <style.CreateAccountBtn onClick={() => {
        setIsRegistering(true);
        setFailureMessage('');
      }}
      >
        Create a new account
      </style.CreateAccountBtn>
      <label htmlFor='email'>Email</label>
      <TextInput id='email' size='long' value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor='password'>Password</label>
      <TextInput type='password' id='password' size='long' value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button disabled={loginLoading} onClick={loginUser}>Login</Button>
      <style.FailureMessage>{failureMessage}</style.FailureMessage>
    </>
  );

  const RegisterContent = (
    <>
      <h2>Register</h2>
      <style.CreateAccountBtn onClick={() => {
        setIsRegistering(false);
        setFailureMessage('');
      }}
      >
        Back to login
      </style.CreateAccountBtn>
      <label htmlFor='email'>Email</label>
      <TextInput id='email' size='long' value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor='password'>Password</label>
      <TextInput type='password' id='password' size='long' value={password} onChange={(e) => setPassword(e.target.value)} />
      <label htmlFor='confirm-password'>Confirm password</label>
      <TextInput type='password' id='confirm-password' size='long' value={confirmPassword} onChange={(e) => setConfirmPasssword(e.target.value)} />
      <Button disabled={registerLoading || !isRegisterFieldsValid()} onClick={registerUser}>Register</Button>
      <style.FailureMessage>{failureMessage}</style.FailureMessage>
    </>
  );

  return (
    <style.AuthenticationBox>
      <style.Content>
        {isRegistering ? RegisterContent : LoginContent}
      </style.Content>
    </style.AuthenticationBox>
  );
};

export default AuthenticationBox;
