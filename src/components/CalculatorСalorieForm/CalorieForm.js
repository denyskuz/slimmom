import { React } from 'react';
import { Grid, Radio, RadioGroup, FormControl } from '@mui/material';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { FormInputContainer } from './FormInputContainer';
import { FormInput } from './FormInput';
import { FormButton } from './FormButton';
import { FormBloodInput } from './FormBloodInput';
import { FormLabel } from './FormLabel';
import { getProducts } from 'redux/products/actions';
import { selectLoadStatus } from 'redux/products/selectors';
import { userParamsShema } from 'validation';

export const CalorieForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadStatus);

  const handleBloodType = event => {
    handleChange(event);
  };
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

  const { values, errors, setFieldValue, setFieldTouched, touched } = formik;
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
  return (
    <FormControl component="form" onSubmit={formik.handleSubmit}>
      <FormInputContainer>
        <Grid>
          <FormInput
            id="height"
            name="height"
            value={values.height}
            error={Boolean(touched.height && errors.height)}
            helperText={touched.height && errors.height}
            label="Height*"
            onChange={handleChange}
          />
          <FormInput
            name="age"
            value={values.age}
            error={Boolean(touched.age && errors.age)}
            helperText={touched.age && errors.age}
            label="Age*"
            onChange={handleChange}
          />
          <FormInput
            name="currentWeight"
            value={values.currentWeight}
            error={Boolean(touched.currentWeight && errors.currentWeight)}
            helperText={touched.currentWeight && errors.currentWeight}
            label="Current weight*"
            onChange={handleChange}
          />
        </Grid>
        <Grid>
          <FormInput
            name="desiredWeight"
            value={values.desiredWeight}
            error={Boolean(touched.desiredWeight && errors.desiredWeight)}
            helperText={touched.desiredWeight && errors.desiredWeight}
            label="Desired weight*"
            onChange={handleChange}
          />
          <FormBloodInput
            name="bloodType"
            error={Boolean(touched.bloodType && errors.bloodType)}
            helperText={touched.bloodType && errors.bloodType}
            label="Blood type *"
            onChange={handleBloodType}
            value={values.bloodType}
          />
          <RadioGroup
            name="bloodType"
            row
            onChange={handleBloodType}
            value={values.bloodType}
          >
            <FormLabel value="1" control={<Radio />} label="1" />
            <FormLabel value="2" control={<Radio />} label="2" />
            <FormLabel value="3" control={<Radio />} label="3" />
            <FormLabel value="4" control={<Radio />} label="4" />
          </RadioGroup>
        </Grid>
      </FormInputContainer>
      <FormButton
        disabled={loading}
        variant="contained"
        color="button"
        type="submit"
      >
        Start losing weight
      </FormButton>
    </FormControl>
  );
};
