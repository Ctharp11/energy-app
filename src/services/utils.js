import axios from 'axios';

export const getUserStories = () => {
    return axios.get('https://randomuser.me/api/?nat=us&results=5')       
}