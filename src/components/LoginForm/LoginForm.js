import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';
import { useFormik } from 'formik';
import {
  ButtonPrimary,
  ButtonSecondary,
  LinkButton,
} from 'components/Button/Button';
import { login } from '../../redux/services/operations';
import { Form, ButtonBox, Input } from './LoginForm.styled';
import { userLoginSchema } from 'validation';
import { useTranslation } from 'react-i18next';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const clientID =
    '1031961331557-6mt21rdd0d8p0u6q3l3tvqii5rqe5gcc.apps.googleusercontent.com';

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientID,
      })
    }
    gapi.load('client:auth2', start)
  }, [])
  
  const onSuccess = (response) => {
    const { email, googleId } = response.profileObj;
    dispatch(
      login({
        email: email,
        password: googleId,
      })
    );
    console.log(response.profileObj);
  }

  const onFailure = () => {
    console.log('fail!');
  }

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: userLoginSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(login(values));
      resetForm();
    },
  });
  const { t } = useTranslation();
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Input
        id="email"
        required
        label={t('Email')}
        variant="standard"
        type="email"
        placeholder="example@gmail.com"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <Input
        required
        id="password"
        label={t('Passwords')}
        type={showPassword ? 'text' : 'password'}
        variant="standard"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <ButtonBox>
        <ButtonPrimary variant="contained" type="submit">
          {t('Login')}
        </ButtonPrimary>
        <ButtonSecondary variant="outlined" type="button">
          <LinkButton to={'/signup'}>{t('Register')}</LinkButton>
        </ButtonSecondary>
      </ButtonBox>
      <div className='googleBtn' style={{paddingTop: '40px'}}>
        <GoogleLogin
          clientId={clientID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_policy'}
        />
      </div>
    </Form>
  );
};

export default LoginForm;
