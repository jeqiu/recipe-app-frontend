import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
  
  const schema = Yup.object().shape({
    username: Yup.string()
      .required("Required")
      .min(6, "Username must be minimum 6 characters."),
    password: Yup.string()
      .required("Required")
      .min(8, "Password must be minimum 8 characters.")
      .matches(/(?=.*[0-9])/, "Password must contain a number.")
  })
  
  return (
  <Formik
    initialValues={{ username: "", password: "" }}
    onSubmit={ (values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Form is validated..Logging in", values);
        // do stuff with form values
        setSubmitting(false); // ends form submission
      }, 500);
    }}
    validationSchema={schema}
  >
  {props => {
    const {
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit
    } = props;

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
        id="username" 
        name="username"
        type="text"
        placeholder="Enter your username"
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        />
        {errors.username && touched.username && (
          <div>{errors.username}</div>
        )}

        <label htmlFor="password">Password</label>
        <input
        id="password"
        name="password"
        type="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <div>{errors.password}</div>
        )}

        <button type="submit" disabled={isSubmitting}>
         Login
        </button>

      </form>
    );
  }}
  </Formik>
  )
}

export default LoginForm;