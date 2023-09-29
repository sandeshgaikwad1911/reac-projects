import { useEffect, useState } from "react";
import { fetchDataFromApi } from  '../utils/api'

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        setLoading("loading...");

        fetchDataFromApi(url)
            .then((res) => {
                console.log('useFetch', res);
                setData(res);
                setLoading(false);
                setError(null)
            })
            .catch((err) => {
                console.log('useFetch error',err)
                setLoading(false);
                setError("Something went wrong!");
            });
    }, [url]);

    return { data, loading, error };
};
