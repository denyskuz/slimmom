import * as Yup from 'yup';

export const userParamsSchema = Yup.object({
  height: Yup.number()
    .positive()
    .typeError('Height must be a number')
    .integer()
    .min(100, 'Too small...')
    .max(250, 'Too much...')
    .required('Enter height'),
  age: Yup.number()
    .positive()
    .typeError('Age must be a number')
    .integer()
    .min(18, 'Too little...')
    .max(100, 'Too much...')
    .required('Enter age'),
  currentWeight: Yup.number()
    .typeError('Current weight must be a number')
    .positive()
    .integer()
    .min(20, 'Too little...')
    .max(500, 'Too much...')
    .required('Enter current weight'),
  desiredWeight: Yup.number()
    .typeError('Desired weight must be a number')
    .positive()
    .integer()
    .min(20, 'Too little...')
    .max(500, 'Too much...')
    .required('Enter desired weight'),
  bloodType: Yup.string().required('Choose your blood type'),
});

export const userRegisterSchema = Yup.object({
  name: Yup.string().required('Enter your name'),
  email: Yup.string()
    .typeError('Email must be valid')
    .email()
    .required('Enter email'),
  password: Yup.string()
    .typeError('Must be between 6 and 16 characters')
    .min(6, 'Too little...')
    .max(16, 'Too much...')
    .required('Enter password'),
});

export const userLoginSchema = Yup.object({
  email: Yup.string()
    .typeError('Email must be valid')
    .email()
    .required('Enter email'),
  password: Yup.string()
    .typeError('Must be between 6 and 16 characters')
    .min(6, 'Too little...')
    .max(16, 'Too much...')
    .required('Enter password'),
});
