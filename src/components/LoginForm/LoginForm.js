import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  ButtonPrimary,
  ButtonSecondary,
  LinkButton,
} from 'components/Button/Button';
import { login } from '../../redux/services/operations';
import { Form, ButtonBox, Input } from './LoginForm.styled';

const LoginForm = () => {
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
    },
  });

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
        label="Passwords"
        type="password"
        variant="standard"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <ButtonBox>
        <ButtonPrimary type="submit">Login</ButtonPrimary>
        <ButtonSecondary type="button">
          <LinkButton to={'/signup'}>Register</LinkButton>
        </ButtonSecondary>
      </ButtonBox>
    </Form>
  );
};

export default LoginForm;
