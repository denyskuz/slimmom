import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  ButtonPrimary,
  ButtonSecondary,
  RegisterButt,
} from 'components/Button/Button';
import { login } from 'redux/Operations/operations';
import { Form, ButtonBox, Input } from './LoginForm.styled';

const LoginForm = () => {
  const Mail = useSelector(state => state.auth);
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
        label="E-mail *"
        variant="standard"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <Input
        id="password"
        label="Password *"
        variant="standard"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}
      <ButtonBox>
        <ButtonPrimary type="submit">Login</ButtonPrimary>
        <ButtonSecondary type="button">
          <RegisterButt to={'/signup'}>Register</RegisterButt>
        </ButtonSecondary>
      </ButtonBox>
    </Form>
  );
};

export default LoginForm;
