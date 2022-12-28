import { useFormik } from 'formik';
// import { addProducts } from 'redux/products/actions';
import { useTranslation } from 'react-i18next';

import {
  FormWrapper,
  Form,
  Label,
  Input,
  Button,
} from './DiaryAddProductForm.styled';

const DiaryAddProductForm = ({ img, openModal }) => {
  const formik = useFormik({
    initialValues: {
      product: '',
      weigth: '',
    },
    onSubmit: values => {
      console.log(values);
    },
  });
  const { t } = useTranslation();
  return (
    <FormWrapper>
      <Form onSubmit={formik.handleSubmit}>
        <Label>
          {t('Product_name')}
          <Input
            id="product"
            name="product"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.product}
          />
        </Label>
        <Label>
          {t('Grams')}
          <Input
            id="weigth"
            name="weigth"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.weigth}
          />
        </Label>
        <Button type="submit">
          {img !== 'Add' ? <img src={img} alt="add product" /> : 'Add'}
        </Button>{' '}
      </Form>
    </FormWrapper>
  );
};

export default DiaryAddProductForm;
