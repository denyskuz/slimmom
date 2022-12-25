import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  ButtonPrimary,
  ButtonSecondary,
  LinkButton,
} from 'components/Button/Button';
import { register } from 'redux/services/operations';
import { Form, ButtonBox, Input } from './RegistrationForm.styled';

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
        label="E-mail *"
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
        label="Password *"
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
        <ButtonPrimary type="submit">Register</ButtonPrimary>
        <ButtonSecondary type="button">
          <LinkButton to={'/login'}>Log in</LinkButton>
        </ButtonSecondary>
      </ButtonBox>
    </Form>
  );
};

export default RegisterForm;
