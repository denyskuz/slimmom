import { useDispatch } from 'react-redux';
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

const LoginForm = () => {
  const dispatch = useDispatch();

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
        type="password"
        variant="standard"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <ButtonBox>
        <ButtonPrimary type="submit">{t('Login')}</ButtonPrimary>
        <ButtonSecondary type="button">
          <LinkButton to={'/signup'}>{t('Register')}</LinkButton>
        </ButtonSecondary>
      </ButtonBox>
    </Form>
  );
};

export default LoginForm;
