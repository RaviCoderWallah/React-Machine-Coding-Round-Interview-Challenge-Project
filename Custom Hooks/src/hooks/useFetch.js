import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function handleFetchingData() {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.log(error)
            }

        }
        handleFetchingData();
    }, [url]);

    return data;
}