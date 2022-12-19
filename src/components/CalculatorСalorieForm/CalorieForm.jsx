import { React, useState } from 'react';
import { Grid, Radio, RadioGroup, FormControl } from '@mui/material';
import { FormInputContainer } from './FormInputContainer';
import { FormInput } from './FormInput';
import { FormButton } from './FormButton';
import { FormBloodInput } from './FormBloodInput';
import { FormLabel } from './FormLabel';

export const CalorieForm = () => {
  const [bloodType, setBloodType] = useState();
  const handleBloodType = event => {
    setBloodType(event.target.value);
  };

  return (
    <FormControl>
      <FormInputContainer>
        <Grid>
          <FormInput name="height" label="Height*" />
          <FormInput name="age" label="Age*" />
          <FormInput name="currentWeight" label="Current weight*" />
        </Grid>
        <Grid>
          <FormInput name="desiredWeight" label="Desired weight*" />
          <FormBloodInput
            name="bloodType"
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
      <FormButton variant="contained" color="button" type="submit">
        Start losing weight
      </FormButton>
    </FormControl>
  );
};
