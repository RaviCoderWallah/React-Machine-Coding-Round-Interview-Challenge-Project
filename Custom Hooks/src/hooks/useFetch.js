import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function handleFetchingData() {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error)
            }finally{
                setLoading(false);
            }

        }
        handleFetchingData();
    }, [url]);

    return {data, error, loading};
}