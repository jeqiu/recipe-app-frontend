import axios from 'axios'
const baseUrl = '/api/recipes'

const getRandomRecipe = async () => {
  try { 
    const response = await axios.get(baseUrl + '/random_recipe');
    const randomRecipe = response.data;
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

const getSearchRecipe = async (searchInput) => {
  try { 
    const strArr = searchInput.split(',');
    const strParam = strArr.join('_');

    const response = await axios.get(baseUrl + '/search_recipe/' + strParam);
    const selectedRecipe = response.data;
    return selectedRecipe;

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

const getAllRecipes = async () => {
  try { 
    const response = await axios.get(baseUrl);
    const allRecipes = response.data;
    return allRecipes;
    
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

const saveRandomRecipe = async (recipeToSave) => {
  try { 
    const response = await axios.post(baseUrl, recipeToSave);
    console.log(response);
    //return {message: 'random recipe saved'};
    return response.status;
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

const deleteRecipe = async (recipeId) => {
  try { 
    const res = await axios.delete(`${baseUrl}/${recipeId}`);
    console.log('deleteRecipe res: ', res);
    return res.data.message;
  } catch (error) {
    if (error.response) { // request made & server responded w/ status code outside of 2xx
      console.log("error data:", error.response);
    } 
    console.log(error.message);
    console.log(error.config);
  }
};

// const update = (id, newObject) => {
//   const req = axios.put(`${baseUrl}/${id}`, newObject);
//   return req.then(res => res.data);
// };

export default { 
  getRandomRecipe, 
  getSearchRecipe,
  getAllRecipes,
  saveRandomRecipe,
  deleteRecipe
}