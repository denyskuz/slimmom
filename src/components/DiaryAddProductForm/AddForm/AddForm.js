import { AddProductBtn } from 'components/Button/Button';
import { HiPlus } from 'react-icons/hi';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Form, ProductInput, GramsInput } from './AddForm.styled';

const AddForm = () => {
  const formik = useFormik({
    initialValues: { productName: '', grams: '' },
    validationSchema: Yup.object().shape({
      productName: Yup.string().required(),
      grams: Yup.number().min(2).required(),
    }),
    onSubmit: (values, e) => {
      e.preventDefault();
      console.log(values);
    },
  });

  return (
    <Form>
      <ProductInput
        id="productName"
        label="Enter product name"
        placeholder="Enter product name"
        aria-label="Enter product name"
        multiline
        onChange={formik.handleChange}
        value={formik.values.productName}
        error={formik.touched.productName && formik.errors.productName}
        helperText={formik.touched.productName && formik.errors.productName}
      />
      <GramsInput
        name="grams"
        label="Grams"
        placeholder="Grams"
        aria-label="Grams"
        multiline
        onChange={formik.handleChange}
        value={formik.values.grams}
        error={formik.touched.grams && formik.errors.grams}
        helperText={formik.touched.grams && formik.errors.grams}
      />
      <AddProductBtn type="button" aria-label="Add product">
        <HiPlus />
      </AddProductBtn>
    </Form>
  );
};

export default AddForm;
