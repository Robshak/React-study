import { useState, useEffect } from "react";

export function useLocalStorage(key) {
    const [date, setData] = useState([]);

    const loadData = () => {
        const res = JSON.parse(localStorage.getItem(key));
        if (res) {
            setData(res);
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    const saveData = (newData) => {
        localStorage.setItem(key, JSON.stringify(newData));
        setData(newData);
    }

    return [date, saveData];
}