import React, { useState, useEffect } from 'react';
import { Route, Switch, Link, useLocation } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Navbar, Nav } from 'react-bootstrap';
import QuickPickForm from './components/QuickPickForm';
import AllSavedRecipes from './components/AllSavedRecipes';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import Footer from './components/Footer';
import userService from './services/user';
import '../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const App = () => {
  const location = useLocation();
  
  const [usernameInput, setUsername] = useState('');
  const [user, setUser] = useState('');


  useEffect(() => {
    console.log(`You changed the page to: ${location.pathname}`);
  }, [location]);

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
        <Nav.Link as={Link} to="/recipes">
          Saved Recipes
        </Nav.Link>
        <Nav.Link as={Link} to="/login">
          Login
        </Nav.Link>
      </Nav>
      </Container>
    </Navbar>

    <Container fluid>
      <div className="d-flex flex-column min-vh-100">
      <Switch>
        <Route path="/recipes">
          <div className="wrapper flex-grow-1" style={{margin: '1rem'}}>
            <Row>
              <AllSavedRecipes />
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
            <Header title='Quick-Pick Recipes' subtitle='Not sure what to make? Get a random recipe suggestion.' />
            <QuickPickForm />
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
