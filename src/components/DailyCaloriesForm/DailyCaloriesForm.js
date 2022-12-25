import { useState } from 'react';
import { Modal } from '@mui/material';
import { bool } from 'prop-types';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { setUserParams, getProducts } from 'redux/services/operations';
import { selectLoadStatus, selectUserParams } from 'redux/services/selectors';
import { userParamsSchema } from 'validation';
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

export const DailyCaloriesForm = ({ isModal = false }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadStatus);
  const user = useSelector(selectUserParams);
  const initialValues = {
    height: user?.height || 0,
    age: user?.age || 0,
    currentWeight: user?.currentWeight || 0,
    desiredWeight: user?.desiredWeight || 0,
    bloodType: user?.bloodType || 1,
  };
  const [isOpen, setOpen] = useState(false);
  const [params, setParams] = useState(initialValues);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: userParamsSchema,
    onSubmit: data => {
      setParams(data);
      dispatch(setUserParams(data));
      setOpen(true);
      dispatch(getProducts(data));
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
          <FormRadioGroup
            row
            name="bloodType"
            onChange={handleChange}
            value={values.bloodType}
          >
            <Label value="1" control={<RadioButton />} label="1" />
            <Label value="2" control={<RadioButton />} label="2" />
            <Label value="3" control={<RadioButton />} label="3" />
            <Label value="4" control={<RadioButton />} label="4" />
          </FormRadioGroup>
        </FormRadioGroup>
        <Button disabled={loading} variant="contained" type="submit">
          Start losing weight
        </Button>

        <Modal
          open={isModal && isOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <StyledModalBox>
            <DailyCalorieIntake closeModal={handleClose} params={params} />
          </StyledModalBox>
        </Modal>
      </Form>
    </FormWrapper>
  );
};

DailyCaloriesForm.propTypes = {
  isModal: bool,
};
