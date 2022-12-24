import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  ButtonPrimary,
  ButtonSecondary,
  LinkButton,
} from 'components/Button/Button';
import { register } from 'redux/services/operations';
import { Form, ButtonBox, Input } from './registrationForm.styled';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line
import i18n from './../../translations/i18n';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    validationSchema: Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(6).max(16).required(),
    }),
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
        type="password"
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
