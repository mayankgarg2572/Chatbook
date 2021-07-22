import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Signin.css';

const FormSignin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form1-content'>
      <form onSubmit={handleSubmit} className='form1' noValidate>
        <h1>
          Let's get started with chatbook by login to your account
        </h1>
        <div className='form1-inputs'>
          <label className='form1-label'>Email</label>
          <input
            className='form1-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form1-inputs'>
          <label className='form1-label'>Password</label>
          <input
            className='form1-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button className='form1-input-btn' type='submit'>
          Login
        </button>
      </form>
    </div>
  );
};

export default FormSignin; 