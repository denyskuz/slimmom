import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  ButtonPrimary,
  ButtonSecondary,
  LinkButton,
} from 'components/Button/Button';
import { login } from 'redux/Operations/operations';
import { Form, ButtonBox, Input } from './LoginForm.styled';

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

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Input
        id="email"
        required
        label="E-mail"
        variant="standard"
        placeholder="example@gmail.com"
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.touched.email && formik.errors.email}
        helperText={
          formik.touched.email && formik.errors.email && formik.errors.email
        }
      />
      <Input
        required
        id="password"
        label="Passwords"
        variant="standard"
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
        <ButtonPrimary type="submit">Login</ButtonPrimary>
        <ButtonSecondary type="button">
          <LinkButton to={'/signup'}>Register</LinkButton>
        </ButtonSecondary>
      </ButtonBox>
    </Form>
  );
};

export default LoginForm;
