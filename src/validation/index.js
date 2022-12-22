import * as Yup from 'yup';

export const userParamsShema = Yup.object().shape({
  height: Yup.number().positive().required().typeError('Must be a number'),
  age: Yup.number().positive().required().typeError('Must be a number'),
  currentWeight: Yup.number()
    .positive()
    .required()
    .typeError('Must be a number'),
  desiredWeight: Yup.number()
    .positive()
    .required()
    .typeError('Must be a number'),
  bloodType: Yup.number()
    .positive()
    .required()
    .min(1)
    .max(4)
    .typeError('Must be a number'),
});
