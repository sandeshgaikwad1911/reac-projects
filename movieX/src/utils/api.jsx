import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async(url, params)=>{
    try {
        const res = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        // console.log('res=>', res)
        return res?.data;
    } catch (error) {
       console.log('api error', error) 
    }
}