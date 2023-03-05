import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const defaultValues = {
  username: 'username',
  email: 'email',
  age: '0',
};

const schema = yup.object({
  username: yup
    .string()
    .required()
    .min(2, 'Must be more than 2 characters')
    .max(20, 'Must be less than 20 characters')
    .matches(/^[A-Za-z]+/)
    .trim(),

  email: yup
    .string()
    .email()
    .required()
    .max(50, 'Must be less than 50 characters'),

  age: yup
    .number()
    .required()
    .integer()
    .positive()
    .typeError('Must be a valid positive number type'),
});

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isDirty, isSubmitting, isValid },
    formState,
  } = useForm({
    mode: 'onChange',
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    console.log('formState', formState);
    console.log('errors', errors);
  });

  const submitHandler = (values) => {
    console.log(values);
    reset();
  };

  useEffect(() => {
    setTimeout(() => {
      reset(defaultValues);
    }, 1000);
  }, []);
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <input type="text" {...register('username', { required: true })} />
      {errors.username && <span>{errors.username.message}</span>}

      <input type="text" {...register('email', { required: true })} />
      {errors.email && <span>{errors.email.message}</span>}

      <input type="number" {...register('age', { required: true })} />
      {errors.age && <span>{errors.age.message}</span>}

      <button type="reset">Reset</button>
      <button type="submit" disabled={isSubmitting || !isValid || !isDirty}>
        Submit
      </button>
    </form>
  );
}

export default Form;
