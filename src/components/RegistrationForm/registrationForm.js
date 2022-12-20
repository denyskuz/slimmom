import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  ButtonPrimary,
  ButtonSecondary,
  LinkButton,
} from 'components/Button/Button';
import { register } from 'redux/auth/authOperation';
import { Form, ButtonBox, Input } from './registrationForm.styled';

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

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Input
        id="name"
        label="Name *"
        variant="standard"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
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
        <ButtonPrimary type="submit">Register</ButtonPrimary>
        <ButtonSecondary type="button">
          <LinkButton to={'/login'}>Log in</LinkButton>
        </ButtonSecondary>
      </ButtonBox>
    </Form>
  );
};

export default RegisterForm;
