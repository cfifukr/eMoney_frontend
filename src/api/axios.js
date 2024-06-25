import axios from 'axios';

export default axios.create({
    baseURL: "https://emoney-backend-ffaef65c5de6.herokuapp.com",
    headers: {"ngrok-skip-browser-warning": "true"}
});