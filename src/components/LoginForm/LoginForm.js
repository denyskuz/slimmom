import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import {
  ButtonPrimary,
  ButtonSecondary,
  RegisterButt,
} from 'components/Button/Button';
import { login } from 'redux/Operations/operations';
import { Form, ButtonBox, Input } from './LoginForm.styled';

const LoginForm = () => {
  const Mail = useSelector(state => state);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { email: '', password: '' },
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
      <Input
        sx={{
          fontFamily: 'Verdana',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '14px',
          lineHeight: '17px',
          color: '#9B9FAA',
        }}
        id="password"
        label="Password *"
        variant="standard"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <ButtonBox>
        <ButtonPrimary type="submit">Login</ButtonPrimary>
        <ButtonSecondary>
          <RegisterButt to={'/'}>Register</RegisterButt>
        </ButtonSecondary>
      </ButtonBox>
    </Form>
  );
};

export default LoginForm;
