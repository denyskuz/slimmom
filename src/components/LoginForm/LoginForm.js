import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  ButtonPrimary,
  ButtonSecondary,
  LinkButton,
} from 'components/Button/Button';
import { login } from '../../redux/services/operations';
import { Form, ButtonBox, Input } from './LoginForm.styled';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line
import i18n from './../../translations/i18n';

const LoginForm = () => {
  const Mail = useSelector(store => store.auth);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).max(16).required(),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(login(values));

      resetForm();
      console.log(Mail);
    },
  });
  const { t } = useTranslation();
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Input
        id="email"
        required
        label="E-mail"
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
