import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import QuickPickForm from './components/QuickPickForm';
import Recipe from './components/Recipe';
import Header from './components/Header';
import Footer from './components/Footer';
import recipeService from './requests/recipe';
import { TailSpin } from  'react-loader-spinner';
import '../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';



const App = () => {
  const [recipe, setRecipe] = useState({});
  const [recipeQuery, setRecipeQuery] = useState('');
  const [isLoading, setLoading] = useState(false);

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
    if (recipeQuery) {
      // diet restrictions dropdown
      return;
    } else {
      recipeService
      .getRandomRecipe()
      .then(newRecipe=>setRecipe(newRecipe))
      .then(() => setLoading(false));
    }
  };

  const handleRecipeQueryChange = (event) => {
    console.log(event.target.value);
    setRecipeQuery(event.target.value);
  };


  return (
    <Container>
      
        <Header title='Quick-Pick Recipe' subtitle='Quick suggestions and inspiration for your next recipe!' />
      
      <Row className="justify-content-center text-center">
      <form onSubmit={getRecipe} >
        <label htmlFor='recipe-search-input'>Suggest a Recipe</label>
        <input 
          id='recipe-search-input'
          placeholder='pumpkin, butter, etc'
          pattern='^$|(([a-z]|[A-Z])*,?\s?)*'
          value={recipeQuery}
          onChange={handleRecipeQueryChange}
        />
        <Button 
          variant='primary' 
          type='submit'
          disabled={isLoading}
        >
          {isLoading ? 'Loading…' : 'Get New Recipe'}
        </Button>
      </form> 
      </Row>
      
        {!isLoading && (
          <Recipe 
          title={recipe.title} 
          image={recipe.image} 
          sourceUrl={recipe.sourceUrl}
          ingredients={recipe.extendedIngredients}
          setLoading={setLoading}   
        />
        )}

        {isLoading && (
          <Row className="justify-content-center text-center">
            <TailSpin color="#00BFFF" height={100} width={100} />
          </Row>
        )}
      
      <Row className="justify-content-center text-center">
        <Footer />
      </Row>
    
    </Container>
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