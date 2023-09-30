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
        // console.log('api.js res=>', res);
        return res?.data;
    } catch (error) {
       console.log('api error', error) 
    }
}

/* 
        from here we return data means we return promise...

        here, we are not storing the data into state.. to change our component state.

        with the change of url we have different promise;
 */