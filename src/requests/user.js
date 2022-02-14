import axios from 'axios'
const baseUrl = '/api'

const getUser = async (username) => {
  try { 
    const response = await axios.get(`${baseUrl}/users/${username}`);
    const user = response.data;
    return user.username;
    
  } catch (error) {
    console.log('error: ', error);
  }
};

export default {getUser}