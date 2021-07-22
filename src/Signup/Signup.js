import React, { useState } from 'react';
import './Form.css';
import FormSignup from './User/FormSignup';
import FormSuccess from './User/FormSuccess';
import hcbgImage from "./signup-page.png";
const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'
      style={{
        backgroundImage:"url("+hcbgImage+")",
        backgroundSize: "cover",
        height: "131vh",
      
      }}
      
      >

        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;