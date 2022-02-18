import axios from 'axios';
export const apiBaseUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/`

export const GET =  endpoint => {
    return axios.get(`${apiBaseUrl}/${endpoint}`);
}