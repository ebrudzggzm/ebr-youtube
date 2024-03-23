import axios from 'axios';

const api = axios.create({
    baseURL: 'https://yt-api.p.rapidapi.com',
    params: {
      geo: 'TR',
      lang: 'tr',
    },
    headers: {
        'X-RapidAPI-Key': 'your key is here',
        'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
      }


});

export default api;