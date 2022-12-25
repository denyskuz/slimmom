import { HiPlus } from 'react-icons/hi';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { AddProductBtn } from 'components/Button/Button';
import { Form, ProductInput, GramsInput, Complete } from './AddForm.styled';
import { useDispatch } from 'react-redux';
import { addDiaryProduct } from 'redux/services/operations';
import { data } from 'globalstore/dataTemp';
// import { Autocomplete, TextField } from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-toastify';

const AddForm = () => {
  const dispatch = useDispatch();
  const date = new Date().toISOString();
  const [productName, setProductName] = useState(null);
  const [product, setProduct] = useState('');

  const formik = useFormik({
    initialValues: { weight: '' },
    validationSchema: Yup.object().shape({
      // product: Yup.string().required(),
      weight: Yup.number().min(2).required(),
    }),
    onSubmit: ({ weight }, { resetForm }) => {
      if (productName === null) {
        toast('You need add product');
        return;
      }
      const data = { product, weight, date };
      console.log(data);
      setProduct(' ');
      setProductName(' ');
      dispatch(addDiaryProduct(data));
      resetForm();
    },
  });

  const handleChange = (e, value) => {
    setProduct(value.id);
    setProductName(value.label);
    // dispatch();
    // console.log('IDevent', value);
  };
  const nameProd = data.map(e => ({
    label: e.title.ua,
    id: e._id.$oid,
  }));

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Complete
        onChange={handleChange}
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
