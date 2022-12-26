import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import {
  ButtonPrimary,
  ButtonSecondary,
  LinkButton,
} from 'components/Button/Button';
import { register } from 'redux/services/operations';
import { Form, ButtonBox, Input } from './registrationForm.styled';
import { userRegisterSchema } from 'validation';
import Spinner from 'components/Spinner';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    validationSchema: userRegisterSchema,
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
        placeholder="example@gmail.com"
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
        <ButtonPrimary type="submit">
          <Spinner />
          Register
        </ButtonPrimary>
        <ButtonSecondary type="button">
          <LinkButton to={'/login'}>Log in</LinkButton>
        </ButtonSecondary>
      </ButtonBox>
    </Form>
  );
};

export default RegisterForm;
