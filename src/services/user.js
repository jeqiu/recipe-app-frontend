import axios from 'axios'
const baseUrl = '/api/users'

const getUser = async (username) => {
  try { 
    const response = await axios.get(`${baseUrl}/${username}`);
    const user = response.data;
    return user.username;
    
  } catch (error) {
    console.log('error: ', error);
  }
};

export default {getUser}