import * as Yup from 'yup';

export const userParamsShema = Yup.object().shape({
  height: Yup.number()
    .positive()
    .max(300)
    .required()
    .typeError('Must be a number, cm'),
  age: Yup.number()
    .positive()
    .max(100)
    .required()
    .typeError('Must be a number, years'),
  currentWeight: Yup.number()
    .positive()
    .max(500)
    .required()
    .typeError('Must be a number, kg'),
  desiredWeight: Yup.number()
    .positive()
    .max(500)
    .required()
    .typeError('Must be a number, kg'),
  bloodType: Yup.number()
    .positive()
    .required()
    .min(1)
    .max(4)
    .typeError('Must be a number, 1-4'),
});
