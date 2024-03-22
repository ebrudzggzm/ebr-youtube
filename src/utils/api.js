import axios from 'axios';

const api = axios.create({
    baseURL: 'https://yt-api.p.rapidapi.com',
    params: {
      geo: 'TR',
      lang: 'tr',
    },
    headers: {
        'X-RapidAPI-Key': '0088e954bemsh3f8f6ef04cb185ep12e058jsn9d9f93d2b743',
        'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
      }


});

export default api;