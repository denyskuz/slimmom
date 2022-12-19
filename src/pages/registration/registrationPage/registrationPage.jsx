import * as React from 'react';
import { useDispatch } from 'react-redux';
import {
  RegisterButton,
  RegisterContainer,
  RegisterForm,
  RegisterFormName,
  LogInButton,
} from './registrationPage.styled';
import { Box, TextField } from '@mui/material';
import { register } from 'redux/auth/authOperation';

export default function RegistrationPage() {
  const dispatch = useDispatch();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleChange = event => {
    switch (event.target.type) {
      case 'text':
        setName(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <RegisterContainer>
      <RegisterFormName>Register</RegisterFormName>
      <RegisterForm>
        <Box component="form" sx={{}} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Name *"
            type="text"
            value={name}
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Email *"
            type="email"
            value={email}
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            id="standard-password-input"
            label="Password *"
            type="password"
            value={password}
            autoComplete="current-password"
            variant="standard"
            onChange={handleChange}
          />
        </Box>
        <RegisterButton onClick={handleSubmit}>Register</RegisterButton>
        <LogInButton>Log in</LogInButton>
      </RegisterForm>
    </RegisterContainer>
  );
}
