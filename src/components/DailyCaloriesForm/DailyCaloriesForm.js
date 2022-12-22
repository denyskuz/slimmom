import { React } from 'react';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from 'redux/products/actions';
import { selectLoadStatus } from 'redux/products/selectors';
import { userParamsShema } from 'validation';
import {
  Title,
  Label,
  Form,
  Input,
  BloodInput,
  FormWrapper,
  FormRadioGroup,
  RadioButton,
  Button,
} from './DailyCaloriesForm.styled';

export const DailyCaloriesForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadStatus);

  const formik = useFormik({
    initialValues: {
      height: '',
      age: '',
      currentWeight: '',
      desiredWeight: '',
      bloodType: '',
    },
    validationSchema: userParamsShema,
    onSubmit: (data, e) => {
      e.preventDefault();
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
      <Title>Calculate your daily calorie intake right now</Title>
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
            helperText={helper('bloodType', '')}
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
        <Button disabled={loading} type="submit">
          Start losing weight
        </Button>
      </Form>
    </FormWrapper>
  );
};
