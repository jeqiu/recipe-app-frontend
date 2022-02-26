import React from 'react';
import { Row, Col, Form, InputGroup, Button } from 'react-bootstrap';

const QuickPickForm = ({ getRecipe, searchInput, handleSearchInputChange, isLoading }) => {
  
  return (
    <Row 
    className="justify-content-center text-center"
    style={{margin: '1rem'}}
    >
    <Col md={{ span: 6 }}>
    <Form onSubmit={getRecipe} >
    <InputGroup>
      {/* <Form.Label htmlFor='recipe-search-input'>Exclude: </Form.Label> */}
      <InputGroup.Text htmlFor='recipe-search-input'>Exclude:</InputGroup.Text>
      <Form.Control 
        type='text'
        id='recipe-search-input'
        placeholder='any intolerances e.g. peanuts'
        pattern='^$|(([a-z]|[A-Z])*,?\s?)*'
        value={searchInput}
        onChange={handleSearchInputChange}
      />
      <Button 
        // className="w-50"
        variant='primary' 
        type='submit'
        disabled={isLoading}
      >
        {isLoading ? 'Get A New Recipe' : 'Get A New Recipe'}
      </Button>
      </InputGroup>
    </Form> 
    </Col>
    </Row>
  )
}

export default QuickPickForm