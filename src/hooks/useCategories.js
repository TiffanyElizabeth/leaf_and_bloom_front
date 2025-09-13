import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function () {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get("/teas/categories")
            .then((res) => setCategories(res.data))
            .catch((err) => console.error(err));
    }, []);

    return categories;
}