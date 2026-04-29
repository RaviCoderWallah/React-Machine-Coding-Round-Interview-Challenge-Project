import { useState } from "react";

export default function useLocalStorage(key, value) {
    const [data, setData] = useState(null);
    
    //For set item
    const handleSetItem = () => {
        setData(window.localStorage.setItem(key, value))
    }
    const handleGetItem = () => {
        setData(window.localStorage.getItem(key))
    }
    const handleRemoveItem = () => {
        setData(window.localStorage.removeItem(key));
    }

    return {data, handleSetItem, handleGetItem, handleRemoveItem}
}