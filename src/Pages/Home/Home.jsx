import React from 'react';

const Home = () => {
  return (
    <>
     <p>Import Scroll Module from &apos;/portfolio V2.0/Oc_Pace_Setters V1.0.0&apos;</p>
     <h2>Feature Clothing *Module* &apos;/portfolio V2.0/Clothing_website_mock&apos;</h2>
     <p>Import Scroll Module from &apos;/portfolio V2.0/Oc_Pace_Setters V1.0.0&apos;</p>
     <h2>About Us</h2>
     <p>Import Scroll Module from &apos;/portfolio V2.0/Oc_Pace_Setters V1.0.0&apos;</p>
     <h2>How You Can join us *Form*</h2>
     <fieldset>
        <legend className='loginSignUp-selector'>
          <label htmlFor='first-name'>
          First Name:{' '}
          <span>
            <strong>*</strong>
          </span>{' '}
        </label>
        <input
          type='text'
          id='first-name'
          name='first-name'
          placeholder=''
          required
        />
        </legend>
        <legend className='loginSignUp-selector'>
          <label htmlFor='last-name'>
          Last Name:{' '}
          <span>
            <strong>*</strong>
          </span>{' '}
        </label>
        <input
          type='text'
          id='last-name'
          name='last-name'
          placeholder=''
          required
        />
         <button type='submit'>Sign Up</button>
        </legend>
      </fieldset>
    </>
  );
};

export default Home;
