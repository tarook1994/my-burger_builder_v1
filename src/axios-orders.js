import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://racingcalendar-5b73e.firebaseio.com/'
});

export default instance;