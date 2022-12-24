import { AddProductBtn } from 'components/Button/Button';
import { HiPlus } from 'react-icons/hi';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Form, ProductInput, GramsInput } from './AddForm.styled';
import { useDispatch } from 'react-redux';
import { addDiaryProduct } from 'redux/services/operations';

const AddForm = () => {
  const dispatch = useDispatch();
  const date = new Date().toISOString();
  const formik = useFormik({
    initialValues: { product: '', weight: '' },
    validationSchema: Yup.object().shape({
      product: Yup.string().required(),
      weight: Yup.number().min(2).required(),
    }),
    onSubmit: (values, { resetForm }) => {
      const data = { ...values, date };
      console.log(data);
      dispatch(addDiaryProduct(data));
      resetForm();
    },
    onChange: (values, _) => {
      console.log(values);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <ProductInput
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
