import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import {
  ButtonPrimary,
  ButtonSecondary,
  LinkButton,
} from 'components/Button/Button';
import { register } from 'redux/services/operations';
import { Form, ButtonBox, Input } from './RegistrationForm.styled';
import { useTranslation } from 'react-i18next';
import { userRegisterSchema } from 'validation';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    validationSchema: userRegisterSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(register(values));
      resetForm();
    },
  });
  const { t } = useTranslation();
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Input
        id="name"
        label={t('Name')}
        type="text"
        variant="standard"
        onChange={formik.handleChange}
        value={formik.values.name}
        error={formik.touched.name && formik.errors.name}
        helperText={
          formik.touched.name && formik.errors.name && formik.errors.name
        }
      />
      <Input
        id="email"
        label={t('Email')}
        variant="standard"
        type="email"
        onChange={formik.handleChange}
        placeholder="example@gmail.com"
        value={formik.values.email}
        error={formik.touched.email && formik.errors.email}
        helperText={
          formik.touched.email && formik.errors.email && formik.errors.email
        }
      />
      <Input
        id="password"
        label={t('Password')}
        variant="standard"
        type={showPassword ? 'text' : 'password'}
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
        error={formik.touched.password && formik.errors.password}
        helperText={
          formik.touched.password &&
          formik.errors.password &&
          formik.errors.password
        }
      />
      <ButtonBox>
        <ButtonPrimary type="submit">{t('Register')}</ButtonPrimary>
        <ButtonSecondary type="button">
          <LinkButton to={'/login'}>{t('Login')}</LinkButton>
        </ButtonSecondary>
      </ButtonBox>
    </Form>
  );
};

export default RegisterForm;
