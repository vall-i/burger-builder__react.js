import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-31513.firebaseio.com/'
});

export default instance;