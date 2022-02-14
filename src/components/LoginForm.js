import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => (
  <Formik
    initialValues={{ username: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
    setTimeout(() => {
        console.log("Form is validated. Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
    username: Yup.string()
      .required("Required")
      .min(6, "Username should be at least 6 characters."),
    password: Yup.string()
      .required("Required")
      .min(8, "Password should be 8 characters.")
      .matches(/(?=.*[0-9])/, "Password must contain a number.")
  })}
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
        className={errors.username && touched.username && "error"}
        />
        {errors.username && touched.username && (
          <div className="input-feedback">{errors.username}</div>
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
        className={errors.password && touched.password && "error"}
        />
        {errors.password && touched.password && (
          <div className="input-feedback">{errors.password}</div>
        )}

        <button type="submit" disabled={isSubmitting}>
         Login
        </button>

      </form>
    );
  }}
  </Formik>
);

export default LoginForm;