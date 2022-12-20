import { useFormik } from 'formik';
import {
  Title,
  Label,
  Form,
  Input,
  FormWrapper,
  Button,
  RadioGroup,
} from './DailyCaloriesForm.styled';

export const DailyCaloriesForm = () => {
  const formik = useFormik({
    initialValues: {
      height: '',
      age: '',
      currentWeight: '',
      desiredWeight: '',
      bloodType: '',
    },
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <FormWrapper>
      <Title>Calculate your daily calorie intake right now</Title>
      <Form onSubmit={formik.handleSubmit}>
        <Label>
          Height *
          <Input
            id="height"
            name="height"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.height}
          />
        </Label>

        <Label htmlFor="age">
          Age *
          <Input
            id="age"
            name="age"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.age}
          />
        </Label>
        <Label htmlFor="currentWeight">
          Current weight *
          <Input
            id="currentWeight"
            name="currentWeight"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.currentWeight}
          />
        </Label>
        <Label htmlFor="desiredWeight">
          Desired weight *
          <Input
            id="desiredWeight"
            name="desiredWeight"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.desiredWeight}
          />
        </Label>
        <Label id="bloodType">
          Blood type *
          <RadioGroup role="group" aria-labelledby="bloodType">
            <Label>
              <input type="radio" name="bloodType" value="1" />1
            </Label>
            <label>
              <input type="radio" name="bloodType" value="2" />2
            </label>
            <label>
              <input type="radio" name="bloodType" value="3" />3
            </label>
            <label>
              <input type="radio" name="bloodType" value="4" />4
            </label>
          </RadioGroup>
        </Label>
        <Button type="submit">Start losing weight</Button>
      </Form>
    </FormWrapper>
  );
};
