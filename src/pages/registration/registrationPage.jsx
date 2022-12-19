import * as React from 'react';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import {
  RegisterButton,
  RegisterContainer,
  RegisterForm,
  RegisterFormName,
  LogInButton,
  MainContainer,
} from './registrationPage.styled';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { register } from 'redux/auth/authOperation';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#9B9FAA',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#FC842D',
  },
});

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
    <MainContainer>
      <RegisterContainer>
        <RegisterFormName>Register</RegisterFormName>
        <RegisterForm>
          <Box
            component="form"
            sx={{
              display: 'grid',
              gridTemplateColumns: { sm: '1fr' },
              gap: 2,
              width: 285,
            }}
            noValidate
            autoComplete="off"
          >
            <CssTextField
              id="name"
              label="Name *"
              type="text"
              value={name}
              variant="standard"
              onChange={handleChange}
            />
            <CssTextField
              id="email"
              label="Email *"
              type="email"
              value={email}
              variant="standard"
              onChange={handleChange}
            />
            <CssTextField
              id="password"
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
    </MainContainer>
  );
}
