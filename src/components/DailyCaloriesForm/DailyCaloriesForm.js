import * as React from 'react';
import { Modal } from '@mui/material';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import DailyCalorieIntake from 'components/DailyCalorieIntake/dailyCalorieIntake';
import { getProducts } from '../../redux/services/operations';
import { useFormik } from 'formik';
import {
  Title,
  Label,
  Form,
  Input,
  FormWrapper,
  Button,
  RadioGroup,
  StyledModalBox,
  Radio,
  Error,
  Wrap,
} from './DailyCaloriesForm.styled';

export const DailyCaloriesForm = () => {
  const [open, setOpen] = React.useState(false);
  const [params, setParams] = React.useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      height: '',
      age: '',
      currentWeight: '',
      desiredWeight: '',
      bloodType: '',
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
  return (
    <FormWrapper>
      <Title>Calculate your daily calorie intake right now</Title>
      <Form onSubmit={formik.handleSubmit}>
        <Wrap>
          <Input
            label="Height *"
            id="height"
            name="height"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.height}
            variant="standard"
          />
          {formik.touched.height && formik.errors.height ? (
            <Error>{formik.errors.height}</Error>
          ) : null}
        </Wrap>
        <Wrap>
          <Input
            label="Age *"
            id="age"
            name="age"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.age}
            variant="standard"
          />
          {formik.touched.age && formik.errors.age ? (
            <Error>{formik.errors.age}</Error>
          ) : null}
        </Wrap>
        <Wrap>
          <Input
            label="Current weight *"
            id="currentWeight"
            name="currentWeight"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.currentWeight}
            variant="standard"
          />
          {formik.touched.currentWeight && formik.errors.currentWeight ? (
            <Error>{formik.errors.currentWeight}</Error>
          ) : null}
        </Wrap>
        <Wrap>
          <Input
            label="Desired weight *"
            id="desiredWeight"
            name="desiredWeight"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.desiredWeight}
            variant="standard"
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
