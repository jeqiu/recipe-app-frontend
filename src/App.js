import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Container, Row, Col, Form, InputGroup, Button, Navbar, Nav } from 'react-bootstrap';
// import QuickPickForm from './components/QuickPickForm';
import Recipe from './components/Recipe';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import Footer from './components/Footer';
import recipeService from './requests/recipe';
import userService from './requests/user';
import { TailSpin } from  'react-loader-spinner';
import '../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';



const App = () => {
  const [recipe, setRecipe] = useState({});
  const [searchInput, setsearchInput] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [imgLoading, setImgLoading] = useState(false);
  
  const [usernameInput, setUsername] = useState('');
  const [user, setUser] = useState('');

  // useEffect(() => {
  //   recipeService
  //     .getRandomRecipe()
  //     .then(recipeObj => {
  //       setRecipe(recipeObj);
  //       console.log(recipeObj.title);
  //       console.log(recipeObj.image);
  //       console.log(recipeObj.sourceUrl);
  //       console.log(recipeObj.extendedIngredients);
  //   })
  // }, []);

  const getRecipe = (event) => {
    event.preventDefault();
    setLoading(true);
    setImgLoading(true);

    if (searchInput) {
      // input with intolerances
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
          to implement
          </div>
        </Route>
        <Route path="/login">
          <div className="wrapper flex-grow-1" style={{margin: '1rem'}}>
          <Row>
            <LoginForm />
          </Row>

          {/* <Row 
          className="justify-content-center text-center"
          style={{margin: '1rem'}}
          >
          <form onSubmit={getUsername} >
            <label htmlFor='username-input'>input:</label>
            <input 
              id='username-input'
              placeholder='username'
              value={usernameInput}
              onChange={handleUsernameInput}
            />
            <Button 
              variant='primary' 
              type='submit'
            >
              {user}
            </Button>
          </form> 
          </Row> */}
       
          </div>
        </Route>
      <Route path="/">
      <div className="wrapper flex-grow-1" style={{margin: '1rem'}}>

      <Header title='Quick-Pick Recipes' subtitle='A random suggestion for your next recipe!' />
      
      <Row 
      className="justify-content-center text-center"
      style={{margin: '1rem'}}
      >
      <Form onSubmit={getRecipe} >
      <InputGroup>
        {/* <Form.Label htmlFor='recipe-search-input'>Exclude: </Form.Label> */}
        <InputGroup.Text htmlFor='recipe-search-input'>Exclude intolerances: </InputGroup.Text>
        <Form.Control 
          // className="w-50"
          type='text'
          id='recipe-search-input'
          placeholder='e.g. peanuts, shellfish'
          pattern='^$|(([a-z]|[A-Z])*,?\s?)*'
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        </InputGroup>
        <Button 
          variant='primary' 
          type='submit'
          disabled={isLoading}
        >
          {isLoading ? 'Get A New Recipe' : 'Get A New Recipe'}
        </Button>
      </Form> 
      </Row>
      
        {!isLoading && (
          <Row className="justify-content-center">
            <Recipe 
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

// const App = () => {
//   const [notes, setNotes] = useState([])
//   const [newNote, setNewNote] = useState('')
//   const [showAll, setShowAll] = useState(false)

//   useEffect(() => {
//     noteService
//       .getAll()
//       .then(initialNotes => {
//       setNotes(initialNotes)
//     })
//   }, [])

//   const addNote = (event) => {
//     event.preventDefault()
//     const noteObject = {
//       content: newNote,
//       date: new Date().toISOString(),
//       important: Math.random() > 0.5,
//     }

//     noteService
//       .create(noteObject)
//         .then(returnedNote => {
//         setNotes(notes.concat(returnedNote))
//         setNewNote('')
//       })
//   }

//   const toggleImportanceOf = id => {
//     const note = notes.find(n => n.id === id)
//     const changedNote = { ...note, important: !note.important }
  
//     noteService
//     .update(id, changedNote)
//       .then(returnedNote => {
//       setNotes(notes.map(note => note.id !== id ? note : returnedNote))
//     })
//     .catch(error => {console.log(error)})    
//   }

//   const handleNoteChange = (event) => {
//     console.log(event.target.value)
//     setNewNote(event.target.value)
//   }

//   const notesToShow = showAll
//   ? notes
//   : notes.filter(note => note.important)

//   return (
//     <div>
//       <Header title='Return-A-Recipe' />
//       <div>
//         <button onClick={() => setShowAll(!showAll)}>
//           show {showAll ? 'important' : 'all' }
//         </button>
//       </div>   
//       <ul>
//         {notesToShow.map(note => 
//             <Note
//               key={note.id}
//               note={note} 
//               toggleImportance={() => toggleImportanceOf(note.id)}
//             />
//         )}
//       </ul>
//       <form onSubmit={addNote}>
//         <input
//           value={newNote}
//           onChange={handleNoteChange}
//         />
//         <button type="submit">save</button>
//       </form>  
//       <Footer />
//     </div>
//   )
// }