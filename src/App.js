import React, { useState, useEffect } from 'react';
import { Route, Switch, Link, useLocation } from 'react-router-dom';
import { Container, Row, Col, Form, InputGroup, Button, Navbar, Nav } from 'react-bootstrap';
import QuickPickForm from './components/QuickPickForm';
import RandomRecipe from './components/RandomRecipe';
import AllRecipes from './components/AllRecipes';
import SavedRecipe from './components/SavedRecipe';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import Footer from './components/Footer';
import recipeService from './requests/recipe';
import userService from './requests/user';
import { TailSpin } from  'react-loader-spinner';
import '../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';



const App = () => {
  const location = useLocation();
  const [recipe, setRecipe] = useState({});
  const [searchInput, setsearchInput] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [imgLoading, setImgLoading] = useState(false);
  
  const [usernameInput, setUsername] = useState('');
  const [user, setUser] = useState('');


  useEffect(() => {
    console.log(`You changed the page to: ${location.pathname}`);
  }, [location]);


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

  const handleUsernameInput = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };

  const getUsername = (event) => {
    event.preventDefault();
    userService
      .getUser(usernameInput)
      .then(username=>setUser(username));
  }


  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand>
        Quick-Pick Recipes
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/recipes">Saved Recipes</Nav.Link>
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
      </Nav>
      </Container>
    </Navbar>

    <Container fluid>
      <div className="d-flex flex-column min-vh-100">
      <Switch>
        <Route path="/recipes">
          <div className="wrapper flex-grow-1" style={{margin: '1rem'}}>
          <Row>
          <AllRecipes />
          </Row>
          </div>
        </Route>

        <Route path="/login">
          <div className="wrapper flex-grow-1" style={{margin: '1rem'}}>
          <Row>
            <LoginForm />
          </Row>

          </div>
        </Route>
      <Route path="/">
      <div className="wrapper flex-grow-1" style={{margin: '1rem'}}>

      <Header title='Quick-Pick Recipes' subtitle='A random suggestion for your next recipe!' />

      {/* <QuickPickForm 
        getRecipe={getRecipe}
        searchInput={searchInput}
        handleSearchInputChange={handleSearchInputChange}
        isLoading={isLoading}
      /> */}
      
      <Row 
      className="justify-content-center text-center"
      style={{margin: '1rem'}}
      >
      <Col md={{ span: 6 }}>
      <Form onSubmit={getRecipe} >
      <InputGroup>
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
      </div>
      </Route>
      </Switch>

      <Row>
        <Footer />
      </Row>
      </div>
    </Container>
    </>
  )
}

export default App
