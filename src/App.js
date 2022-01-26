import React, { useState, useEffect } from 'react'
// import QuickPickForm from './components/QuickPickForm'
import Recipe from './components/Recipe'
import Header from './components/Header'
import Footer from './components/Footer'
import recipeService from './requests/recipe'

const App = () => {
  const [recipe, setRecipe] = useState({});
  const [recipeQuery, setRecipeQuery] = useState('');

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
    if (recipeQuery) {
      // search with params
      recipeService
      .getSearchRecipe()
      .then(newRecipe=>setRecipe(newRecipe));
    } else {
      recipeService
      .getRandomRecipe()
      .then(newRecipe=>setRecipe(newRecipe));
    }
  };

  const handleRecipeQueryChange = (event) => {
    console.log(event.target.value);
    setRecipeQuery(event.target.value);
  };


  return (
    <div>
      <Header title='Quick-Pick Recipe' />


      <form onSubmit={getRecipe}>
        <label htmlFor='recipe-search-input'>Suggest a Recipe</label>
        <input 
          id='recipe-search-input'
          placeholder='pumpkin, butter, brown sugar, etc'
          pattern='^$|(([a-z]|[A-Z])*,?\s?)*'
          value={recipeQuery}
          onChange={handleRecipeQueryChange}
        />
        <button type='submit'>Get Recipe</button>
      </form> 

      <Recipe 
        title={recipe.title} 
        image={recipe.image} 
        sourceUrl={recipe.sourceUrl}
        ingredients={recipe.extendedIngredients}   
      />

      <Footer />
    </div>
  )
}

export default App

