import React, { useState } from 'react';
import { Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import RandomRecipe from './RandomRecipe';
import recipeService from '../services/recipe';
import { TailSpin } from  'react-loader-spinner';

const QuickPickForm = () => {
  const [recipe, setRecipe] = useState({});
  const [imgLoading, setImgLoading] = useState(false);
  const [searchInput, setsearchInput] = useState('');
  const [isLoading, setLoading] = useState(false);

  const getRecipe = (event) => {
    event.preventDefault();
    setLoading(true);
    setImgLoading(true);

    if (searchInput) {
      // input contains intolerances
      recipeService
      .getSearchRecipe(searchInput)
      .then(newRecipe=>setRecipe(newRecipe))
      .then(() => setLoading(false));
      return;
    } else {
      recipeService
      .getRandomRecipe()
      .then(newRecipe=>setRecipe(newRecipe))
      .then(() => setLoading(false));
    }
  };

  const handleSearchInputChange = (event) => {
    console.log(event.target.value);
    setsearchInput(event.target.value);
  };


  return (
    <>
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
      
    {!isLoading && (
      <Row className="justify-content-center">
        <RandomRecipe
          recipeId={recipe.id}
          title={recipe.title} 
          image={recipe.image} 
          sourceUrl={recipe.sourceUrl}
          ingredients={recipe.extendedIngredients}
          imgLoading={imgLoading}
          setImgLoading={setImgLoading} 
        />
      </Row>
      )}

    {imgLoading && (
      <Row className="justify-content-center text-center">
        <TailSpin color="#00BFFF" height={100} width={100} />
      </Row>
    )}
    </>
  )
}

export default QuickPickForm