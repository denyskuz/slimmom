import { useState } from 'react';
import { Modal } from '@mui/material';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { setUserParams, getProducts } from 'redux/services/operations';
import { selectLoadStatus, selectUserParams } from 'redux/services/selectors';
import { userParamsShema } from 'validation';
import {
  Label,
  Form,
  Input,
  Title,
  BloodInput,
  ShiftedInput,
  FormWrapper,
  FormRadioGroup,
  RadioButton,
  Button,
  StyledModalBox,
} from './DailyCaloriesForm.styled';
import DailyCalorieIntake from 'components/DailyCalorieIntake/dailyCalorieIntake';

export const DailyCaloriesForm = ({ isModal }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadStatus);
  const user = useSelector(selectUserParams);

export const DailyCaloriesForm = () => {
  const [open, setOpen] = React.useState(false);
  const [params, setParams] = React.useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: {
      height: user?.height || '',
      age: user?.age || '',
      currentWeight: user?.currentWeight || '',
      desiredWeight: user?.desiredWeight || '',
      bloodType: user?.bloodType || '',
    },
    validationSchema: Yup.object({
      height: Yup.number()
        .positive()
        .typeError('Height must be a number')
        .integer()
        .min(130, 'Too small...')
        .max(224, 'Too much...')
        .required('Enter all fields'),
      age: Yup.number()
        .positive()
        .typeError('Age must be a number')
        .integer()
        .min(6, 'Too little...')
        .max(110, 'Too much...')
        .required('Enter all fields'),
      currentWeight: Yup.number()
        .typeError('Current weight must be a number')
        .positive()
        .integer()
        .min(30, 'Too little...')
        .max(300, 'Too much...')
        .required('Enter all fields'),
      desiredWeight: Yup.number()
        .typeError('Desired weight must be a number')
        .positive()
        .integer()
        .min(30, 'Too little...')
        .max(300, 'Too much...')
        .required('Enter all fields'),
      bloodType: Yup.string().required('Choose your blood type'),
    }),

    onSubmit: (values, { resetForm }) => {
      setParams(formik.values);
      dispatch(getProducts(values));
      handleOpen();
      resetForm();
    },
  });

  const {
    values,
    errors,
    setFieldValue,
    setFieldTouched,
    touched,
    handleSubmit,
  } = formik;

  const handleChange = e => {
    if (e.target.name === 'bloodType') {
      const bloodType = e.target.value;
      if (!['1', '2', '3', '4'].includes(bloodType)) {
        return;
      }
    }
    setFieldValue(e.target.name, e.target.value);
    setFieldTouched(e.target.name, true, false);
  };

  const helper = (name, measure) => {
    return touched[name]
      ? errors[name]
        ? errors[name] + `, ${measure}`
        : measure
      : measure;
  };

  return (
    <FormWrapper>
      <Title>
        Calculate your daily calorie <br /> intake right now
      </Title>
      <Form onSubmit={handleSubmit}>
        <Input
          id="height"
          name="height"
          type="number"
          label="Height *"
          variant="standard"
          InputProps={{ inputProps: { min: 1, max: 300 } }}
          onChange={handleChange}
          value={values.height}
          error={Boolean(touched.height && errors.height)}
          helperText={helper('height', 'cm')}
        />
        <Input
          id="age"
          name="age"
          type="number"
          label="Age *"
          variant="standard"
          InputProps={{ inputProps: { min: 1, max: 200 } }}
          onChange={handleChange}
          value={values.age}
          error={Boolean(touched.age && errors.age)}
          helperText={helper('age', 'years')}
        />
        <Input
          id="currentWeight"
          name="currentWeight"
          type="number"
          label="Current weight *"
          variant="standard"
          InputProps={{ inputProps: { min: 1, max: 500 } }}
          onChange={handleChange}
          value={values.currentWeight}
          error={Boolean(touched.currentWeight && errors.currentWeight)}
          helperText={helper('currentWeight', 'kg')}
        />
        <ShiftedInput
          id="desiredWeight"
          name="desiredWeight"
          type="number"
          label="Desired weight *"
          variant="standard"
          InputProps={{ inputProps: { min: 1, max: 500 } }}
          onChange={handleChange}
          value={values.desiredWeight}
          error={Boolean(touched.desiredWeight && errors.desiredWeight)}
          helperText={helper('desiredWeight', 'kg')}
        />
        <FormRadioGroup>
          <BloodInput
            id="bloodType"
            name="bloodType"
            type="number"
            label="Blood type *"
            variant="standard"
            InputProps={{ inputProps: { min: 1, max: 4 } }}
            onChange={handleChange}
            value={values.bloodType}
            error={Boolean(touched.bloodType && errors.bloodType)}
          />
          {formik.touched.desiredWeight && formik.errors.desiredWeight ? (
            <Error>{formik.errors.desiredWeight}</Error>
          ) : null}
        </Wrap>
        <Label id="bloodType">
          Blood type *
          <RadioGroup role="group" aria-labelledby="bloodType">
            <label>
              <Radio
                type="radio"
                name="bloodType"
                onChange={formik.handleChange}
                value="1"
              />
              1
            </label>
            <label>
              <Radio
                type="radio"
                name="bloodType"
                onChange={formik.handleChange}
                value="2"
              />
              2
            </label>
            <label>
              <Radio
                type="radio"
                name="bloodType"
                onChange={formik.handleChange}
                value="3"
              />
              3
            </label>
            <label>
              <Radio
                type="radio"
                name="bloodType"
                onChange={formik.handleChange}
                value="4"
              />
              4
            </label>
          </RadioGroup>
        </Label>
        <Button type="submit">Start losing weight</Button>
        {formik.errors.height ||
        formik.errors.age ||
        formik.errors.currentWeight ||
        formik.errors.desiredWeight ||
        formik.errors.bloodType ? null : (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <StyledModalBox>
              <DailyCalorieIntake closeModal={handleClose} params={params} />
            </StyledModalBox>
          </Modal>
        )}
      </Form>
    </FormWrapper>
  );
};

DailyCaloriesForm.propTypes = {
  isModal: PropTypes.bool,
};
