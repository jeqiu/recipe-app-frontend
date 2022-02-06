import axios from 'axios'
const baseUrl = '/api'
//heroku url: https://mysterious-dusk-60863.herokuapp.com/

const getRandomRecipe = async () => {
  try { 
    const response = await axios.get(baseUrl + '/random_recipe');
    const randomRecipe = response.data.recipes[0];
    return randomRecipe;
  } catch (error) {
    if (error.response) { // request made & server responded w/ status code outside of 2xx
      console.log("error data:", error.response);
    } else if (error.request) {  // request was made but no response was received
      console.log(error.request);
    } else {
      console.log('error in setting up request: ', error.message);
    }
    console.log(error.config);
  }
};

const getSearchRecipe = async () => {
  try { 
    const response = await axios.get(baseUrl + '/search_recipe');
    const recipeArr = response.data;
    const numOfRecipes = recipeArr.length;
    const selectedRecipe = recipeArr[Math.floor(Math.random()*numOfRecipes)];
    return selectedRecipe;
  } catch (error) {
    if (error.response) { // request made & server responded w/ status code outside of 2xx
      console.log("error data:", error.response.data);
      console.log("error status:", error.response.status);
      console.log("error headers:", error.response.headers);
    } else if (error.request) {  // request was made but no response was received
      console.log(error.request);
    } else {
      console.log('error in setting up request: ', error.message);
    }
    console.log(error.config);
  }
};

// const create = newObject => {
//   const req = axios.post(baseUrl, newObject);
//   return req.then(res => res.data);
// };

// const update = (id, newObject) => {
//   const req = axios.put(`${baseUrl}/${id}`, newObject);
//   return req.then(res => res.data);
// };

export default { 
  getRandomRecipe, 
  getSearchRecipe
}