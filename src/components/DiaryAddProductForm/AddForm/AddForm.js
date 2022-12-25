import { HiPlus } from 'react-icons/hi';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { AddProductBtn } from 'components/Button/Button';
import { Form, ProductInput, GramsInput, Complete } from './AddForm.styled';
import { useDispatch } from 'react-redux';
import { addDiaryProduct } from 'redux/services/operations';
import { data } from 'globalstore/dataTemp';
import { Autocomplete, TextField } from '@mui/material';
import { useState } from 'react';

const AddForm = () => {
  const dispatch = useDispatch();
  const date = new Date().toISOString();
  const [productName, setProductName] = useState(' ');
  const [product, setProductId] = useState(' ');

  const formik = useFormik({
    initialValues: { product: '', weight: '' },
    validationSchema: Yup.object().shape({
      // product: Yup.string().required(),
      weight: Yup.number().min(2).required(),
    }),
    onSubmit: ({ weight }, { resetForm }) => {
      const data = { product, weight, date };
      console.log(data);
      setProductId(' ');
      setProductName(' ');
      dispatch(addDiaryProduct(data));
      resetForm();
    },
  });

  const handleChange = (e, value) => {
    setProductId(value.id);
    setProductName(value.label);
    // console.log('IDevent', value);
  };
  const nameProd = data.map(e => ({
    label: e.title.ua,
    id: e._id.$oid,
  }));

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Complete
        // sx={{
        //   width: '240px',
        //   height: '37px',
        //   mr: '22px',
        //   outline: 'none',
        // }}
        onChange={handleChange}
        id="product"
        name="product"
        disableClearable
        value={productName}
        options={nameProd}
        renderInput={params => (
          <ProductInput
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
      <GramsInput
        id="weight"
        name="weight"
        label="grams"
        placeholder="Grams"
        variant="standard"
        multiline
        onChange={formik.handleChange}
        value={formik.values.weight}
        error={formik.touched.weight && formik.errors.weight}
        helperText={formik.touched.weight && formik.errors.weight}
      />
      <AddProductBtn type="submit">
        <HiPlus />
      </AddProductBtn>
    </Form>
  );
};

export default AddForm;

//  {
/* <ProductInput
        id="product"
        name="product"
        label="Enter product name"
        placeholder="Enter product name"
        type="text"
        variant="standard"
        multiline
        onChange={formik.handleChange}
        value={formik.values.product}
        error={formik.touched.product && formik.errors.product}
        helperText={formik.touched.product && formik.errors.product}
      /> */
//  }
