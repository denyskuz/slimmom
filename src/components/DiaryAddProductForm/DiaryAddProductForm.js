import * as React from 'react';
import { Modal } from '@mui/material';

import { useFormik } from 'formik';
import {
  FormWrapper,
  Form,
  Label,
  Input,
  Button,
} from './DiaryAddProductForm.styled';

export const DiaryAddProductForm = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: {
      product: '',
      weights: '',
    },
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <FormWrapper>
      <Form onSubmit={formik.handleSubmit}>
        <Label>
          Enter product name
          <Input
            id="product"
            name="product"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.product}
          />
        </Label>

        <Label htmlFor="weights">
          Grams
          <Input
            id="weights"
            name="weights"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.weights}
          />
        </Label>

        <Button type="submit" onClick={handleOpen}>
          Add
        </Button>
      </Form>
    </FormWrapper>
  );
};
