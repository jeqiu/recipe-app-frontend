import React from 'react';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

const LoginForm = ({submitData}) => {
  
  const schema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/(?=.*[0-9])/, "Password must contain a number")
  })
  
  return (
  <Formik
    initialValues={{ username: "", password: "" }}
    onSubmit={ (values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Form is validated..Logging in");
        console.log(values);
        // submitData();
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
      <Container>
      <Row 
        className="justify-content-center text-center"
        style={{margin: '1rem'}}
      >
      <Col as='h3'>User Login</Col>
      </Row>
      <Row className="justify-content-center text-center">

      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3" style={{marginTop: '0.5rem'}}>
          <InputGroup.Text htmlFor="username">Username:</InputGroup.Text>
          <Form.Control
            id="username" 
            name="username"
            type="text"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </InputGroup>

        {errors.username && touched.username && (
          <div className="alert alert-warning">{errors.username}</div>
        )}

        <InputGroup className="mb-3" style={{marginTop: '0.5rem'}}>
          <InputGroup.Text htmlFor="password">Password: </InputGroup.Text>
          <Form.Control
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </InputGroup>

        {errors.password && touched.password && (
          <div className="alert alert-warning">{errors.password}</div>
        )}

        <Button 
          name="login"
          type="submit" 
          disabled={isSubmitting}
        >
         Login
        </Button>

      </Form>
      
      </Row>
      </Container>
    );
  }
  }
  </Formik>
  )
}

export default LoginForm;