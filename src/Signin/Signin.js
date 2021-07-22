import React, { useState } from 'react';
import './Signin.css';
import FormSignin from './FormSignin';
import FormSuccess from './FormSuccess';
import hcbgImage from "./loginPage.png";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form1-container'
      style={{
        backgroundImage:"url("+hcbgImage+")",
        backgroundSize: "cover",
        height: "100vh",
        // color: "#f5f5f5"
      }}
      
      >
        {/* <div className='form-content-left'>
        </div> */}
        {!isSubmitted ? (
          <FormSignin submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form; 