import * as Yup from 'yup';

export const userParamsSchema = Yup.object({
  height: Yup.number()
    .positive()
    .typeError('Height must be a number')
    .integer()
    .min(130, 'Too small...')
    .max(224, 'Too much...')
    .required('Enter height'),
  age: Yup.number()
    .positive()
    .typeError('Age must be a number')
    .integer()
    .min(6, 'Too little...')
    .max(110, 'Too much...')
    .required('Enter age'),
  currentWeight: Yup.number()
    .typeError('Current weight must be a number')
    .positive()
    .integer()
    .min(30, 'Too little...')
    .max(300, 'Too much...')
    .required('Enter current weight'),
  desiredWeight: Yup.number()
    .typeError('Desired weight must be a number')
    .positive()
    .integer()
    .min(30, 'Too little...')
    .max(300, 'Too much...')
    .required('Enter desired weight'),
  bloodType: Yup.string().required('Choose your blood type'),
});
