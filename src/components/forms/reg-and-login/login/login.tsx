import React, { ChangeEvent } from 'react';
import { useFormik } from 'formik';
import Input from '../../../ui/inputs/input';

const LoginForm = () => {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => console.log(values),
  });

  const hnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    handleChange(e);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={values.email}
        label="email"
        onChange={hnChangeHandler}
        name="email"
      />
      <Input
        value={values.password}
        label="password"
        onChange={handleChange}
        name="password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
