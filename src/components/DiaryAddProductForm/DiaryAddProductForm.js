import { useFormik } from 'formik';
// addDiaryListItem import

import {
  FormWrapper,
  Form,
  Label,
  Input,
  Button,
} from './DiaryAddProductForm.styled';

export const DiaryAddProductForm = ({ img, openModal }) => {
  const formik = useFormik({
    initialValues: {
      product: '',
      weigth: '',
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
        <Label>
          Grams
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
