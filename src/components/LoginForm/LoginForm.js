import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useFormik } from 'formik';
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonSecondaryDark,
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
  const theme = useSelector(state => state.theme.darkTheme);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

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

        {!theme?(<ButtonSecondary variant="outlined" type="button">
          <LinkButton to={'/signup'}>{t('Register')}</LinkButton>
        </ButtonSecondary>):(<ButtonSecondaryDark variant="outlined" type="button">
          <LinkButton to={'/signup'}>{t('Register')}</LinkButton>
        </ButtonSecondaryDark>)}
        
      </ButtonBox>
    </Form>
  );
};

export default LoginForm;
