import { AddProductBtn } from 'components/Button/Button';
import { HiPlus } from 'react-icons/hi';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Form, ProductInput, GramsInput } from './AddForm.styled';

import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  return (
    <Form>
      <ProductInput
        id="productName"
        label={t('Product_name')}
        placeholder={t('Product_name')}
        aria-label="Enter product name"
        multiline
        onChange={formik.handleChange}
        value={formik.values.productName}
        error={formik.touched.productName && formik.errors.productName}
        helperText={formik.touched.productName && formik.errors.productName}
      />
      <GramsInput
        name="grams"
        label={t('Grams')}
        placeholder={t('Grams')}
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
