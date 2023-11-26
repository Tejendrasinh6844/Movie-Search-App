import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = 
'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGU2NjU4ODRjY2UzNDI0NTM0YTAyZjhiMWE3NTY3NyIsInN1YiI6IjY0ZDEwYmIxNTQ5ZGRhMDBlMmRlMzRlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4Xo5aLEQZEMNS4p0nVxPZDn6j4CCUuG-oUMp5CJH4zU'
// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
