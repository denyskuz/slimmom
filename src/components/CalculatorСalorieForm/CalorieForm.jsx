import { React, useState } from 'react';
import { Grid, Radio, RadioGroup, FormControl } from '@mui/material';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { useSelector, useDispatch } from 'react-redux';
import { FormInputContainer } from './FormInputContainer';
import { FormInput } from './FormInput';
import { FormButton } from './FormButton';
import { FormBloodInput } from './FormBloodInput';
import { FormLabel } from './FormLabel';
import { userParamsShema } from 'validation';
import { getProducts } from 'redux/products/actions';
import { selectLoadStatus } from 'redux/products/selectors';

export const CalorieForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadStatus);

  const [bloodType, setBloodType] = useState();
  const handleBloodType = event => {
    const bloodType = event.target.value;
    if (bloodType >= 1 && bloodType <= 4) {
      setBloodType(bloodType);
    }
  };
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(userParamsShema),
  });
  const onFormSubmit = (data, e) => {
    e.preventDefault();
    dispatch(getProducts(data));
  };
  return (
    <FormControl component="form" onSubmit={handleSubmit(onFormSubmit)}>
      <FormInputContainer>
        <Grid>
          <FormInput
            {...register('height')}
            error={Boolean(errors?.height)}
            helperText={errors?.height?.message}
            label="Height*"
            onBlur={async () => {
              await trigger('height');
            }}
          />
          <FormInput
            {...register('age')}
            error={Boolean(errors?.age)}
            helperText={errors?.age?.message}
            label="Age*"
            onBlur={async () => {
              await trigger('age');
            }}
          />
          <FormInput
            {...register('currentWeight')}
            error={Boolean(errors?.currentWeight)}
            helperText={errors?.currentWeight?.message}
            label="Current weight*"
            onBlur={async () => {
              await trigger('currentWeight');
            }}
          />
        </Grid>
        <Grid>
          <FormInput
            {...register('desiredWeight')}
            error={Boolean(errors?.desiredWeight)}
            helperText={errors?.desiredWeight?.message}
            label="Desired weight*"
            onBlur={async () => {
              await trigger('desiredWeight');
            }}
          />
          <FormBloodInput
            {...register('bloodType')}
            error={Boolean(errors?.bloodType)}
            helperText={errors?.bloodType?.message}
            label="Blood type *"
            value={bloodType || ''}
            onChange={handleBloodType}
            inputRef={input => {
              if (input != null && bloodType !== undefined) {
                input.focus();
              }
            }}
          />
          <RadioGroup
            name="bloodType"
            row
            onChange={handleBloodType}
            value={bloodType || ''}
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
