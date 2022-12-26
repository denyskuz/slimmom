import { HiPlus } from 'react-icons/hi';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { AddProductBtn } from 'components/Button/Button';
import { Form, ProductInput, GramsInput, Complete } from './AddForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addDiaryProduct, getNameProducts } from 'redux/services/operations';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { getProductTitle } from 'redux/services/selectors';

const AddForm = () => {
  const dispatch = useDispatch();
  const date = new Date().toISOString();
  const [productName, setProductName] = useState(null);
  const [product, setProduct] = useState('');
  const dataTitle = useSelector(getProductTitle);
  const formik = useFormik({
    initialValues: { weight: '' },
    validationSchema: Yup.object().shape({
      weight: Yup.number().min(2).required(),
    }),
    onSubmit: ({ weight }, { resetForm }) => {
      if (productName === null) {
        toast('You need add product');
        return;
      }
      const data = { dataTitle, productName, product, weight, date };
      setProduct(' ');
      setProductName(' ');
      dispatch(addDiaryProduct(data));
      resetForm();
    },
  });

  const handleChange = (e, value) => {
    setProduct(value.id);
    setProductName(value.label);
  };
  const nameProd = dataTitle.map(e => {
    return {
      label: e.title.ua,
      id: e._id,
    };
  });
  const { t } = useTranslation();
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Complete
        onInputChange={(e, v) => {
          dispatch(getNameProducts(v));
        }}
        onChange={handleChange}
        freeSolo
        disableClearable
        value={productName}
        options={nameProd}
        renderInput={params => (
          <ProductInput
            {...params}
            label="Enter product name"
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
      />
      <AddProductBtn type="submit" aria-label="Add product">
        <HiPlus />
      </AddProductBtn>
    </Form>
  );
};

export default AddForm;
